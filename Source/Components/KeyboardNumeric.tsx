// import React, { useState } from "react";
// import { View, Text,Pressable,StyleSheet, TextInput } from "react-native";

// const KeyboardNumeric = () => {
//     const [phoneNumber, setPhoneNumber] = useState('');

//     const handleKeyPress = (value:any) => {
//         if(value === 'delete'){
//             setPhoneNumber(phoneNumber.slice(0, -1));
//         } else {
//             setPhoneNumber(phoneNumber + value)
//         }
//     };

//     const buttons = ['1','2','3','4','5','6','7','8','9','','0','delete'];

//     return(
//         <View style={styles.container}>
//              <TextInput
//               style={styles.inputDisplay}
//               value={phoneNumber}
//               maxLength={9}
//               showSoftInputOnFocus={false} // Empêche le clavier natif de monter
//               placeholder="Entrez le numéro"
//               caretHidden={false} // Affiche le curseur même sans clavier
//             />
//             <View style={styles.keypadContainer}>
//                 {buttons.map((button, index) => (
//                     <Pressable
//                     key={index}
//                     style={styles.keypadButton}
//                     onPress={() => handleKeyPress(button)}
//                     >
//                         <Text
//                          style={styles.buttonText}
//                         >
//                             {button === 'delete' ? '⌫': button}
//                         </Text>
//                     </Pressable>
//                 ))}
//             </View>
//         </View>
//     )
// }

// export default KeyboardNumeric;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff', // Fond blanc pour la partie clavier
//     justifyContent: 'flex-end',
//     paddingBottom: 20,
//   },
//   // Style pour le numéro de téléphone affiché au-dessus
//   inputDisplay: { 
//     fontSize: 24,
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#333',
    
//     // Assurez-vous d'avoir une View autour de votre TextInput avec un style 
//     // qui correspond à la boîte de saisie grise claire de l'image.
//   },
//   keypadContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap', // Permet aux éléments de passer à la ligne suivante
//     justifyContent: 'center',
//     // La grille de l'image est légèrement décalée vers le haut par rapport au bas de l'écran
//   },
//   keypadButton: {
//     width: 80,         // Taille approximative des boutons ronds
//     height: 80,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10,        // Espace entre les boutons
//     // L'image utilise juste du texte, pas de cercle de fond gris pour les boutons
//   },
//   buttonText: {
//     fontSize: 28,
//     fontWeight: 'normal',
//     color: '#333333', // Couleur du texte des chiffres
//   },
//   // Vous aurez besoin d'un style spécifique pour le bouton 'Continue' bleu
//   continueButton: {
//     backgroundColor: '#4B6EE6', // Couleur bleue de l'image
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 8,
//     marginHorizontal: 20,
//     marginTop: 20,
//   },
//   continueButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });


import React, { useRef, useState } from 'react';
import { Keyboard, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

let CODE_LENGTH = 4

const OtpCustomInput = ({code , codeLength}:{code:string, codeLength:number}) => {
  const [codes, setCode] = useState('');
  const [isFocused,setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<TextInput>(null);

  const handlePress = () => {

    // Rend le TextInput visiblement focusable quand on clique sur la zone des codes
    inputRef.current?.focus();
  };

  const handleTextChange = (text:any) => {
    if(text.length <= CODE_LENGTH) {
      setCode(text)

      // Gere la logique quand le code est complets ici si necessaire 

      if(text.length === CODE_LENGTH) {
        Keyboard.dismiss // instruction pour masquer le clavier
        console.log("code complets", text)
      }
    } 
  };

  return(
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <TextInput
        ref={inputRef}
        style={styles.hiddenInput}
        value={code}
        onChangeText={handleTextChange}
        // Config pour le clavier
        keyboardType='numeric'
        maxLength={CODE_LENGTH}
        autoFocus={true}
        caretHidden={true}
        textContentType={Platform.select({ios:"oneTimeCode", android:'oneTimeCode'})} 
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        />

        {Array(codeLength).fill(0).map((_, index)=>(
          <View
          style={[styles.cell,
          // change le style de case si elle est la prochaine a etre remplis 
            isFocused && index === code.length && styles.focusCell,
            // ou si elle a deja un chiffres
            code[index] !== undefined && styles.filledCell,
           ]}
          >
            <Text>
              {code[index] || (isFocused && index === code.length ? '|' :'')}
            </Text>

          </View>

        ))}
      </View>
    </Pressable>
  )
}

export default OtpCustomInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    position: 'relative',
    // Hauteur et largeur du conteneur pour le clic
    height: 60,
  },
  hiddenInput: {
    // Positionnement absolu pour le masquer visuellement mais le garder fonctionnel
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0,
    // S'assure qu'il est cliquable (z-index supérieur)
    zIndex: 1, 
  },
  cell: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8, // Bords arrondis comme sur l'image
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
  focusCell: {
    borderColor: '#000', // Bordure plus foncée pour la case active
  },
  filledCell: {
      borderColor: '#000', // Bordure plus foncée pour les cases remplies
  },
  cellText: {
    fontSize: 24,
    textAlign: 'center',
    color: '#000',
  },
});
