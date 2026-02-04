import React, { useState } from "react";
import { View, Text,Pressable,StyleSheet, TextInput } from "react-native";

const KeyboardNumeric = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleKeyPress = (value:any) => {
        if(value === 'delete'){
            setPhoneNumber(phoneNumber.slice(0, -1));
        } else {
            setPhoneNumber(phoneNumber + value)
        }
    };

    const buttons = ['1','2','3','4','5','6','7','8','9','','0','delete'];

    return(
        <View style={styles.container}>
             <TextInput
              style={styles.inputDisplay}
              value={phoneNumber}
              maxLength={9}
              showSoftInputOnFocus={false} // Empêche le clavier natif de monter
              placeholder="Entrez le numéro"
              caretHidden={false} // Affiche le curseur même sans clavier
            />
            <View style={styles.keypadContainer}>
                {buttons.map((button, index) => (
                    <Pressable
                    key={index}
                    style={styles.keypadButton}
                    onPress={() => handleKeyPress(button)}
                    >
                        <Text
                         style={styles.buttonText}
                        >
                            {button === 'delete' ? '⌫': button}
                        </Text>
                    </Pressable>
                ))}
            </View>
        </View>
    )
}

export default KeyboardNumeric;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Fond blanc pour la partie clavier
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  // Style pour le numéro de téléphone affiché au-dessus
  inputDisplay: { 
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
    
    // Assurez-vous d'avoir une View autour de votre TextInput avec un style 
    // qui correspond à la boîte de saisie grise claire de l'image.
  },
  keypadContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Permet aux éléments de passer à la ligne suivante
    justifyContent: 'center',
    // La grille de l'image est légèrement décalée vers le haut par rapport au bas de l'écran
  },
  keypadButton: {
    width: 80,         // Taille approximative des boutons ronds
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,        // Espace entre les boutons
    // L'image utilise juste du texte, pas de cercle de fond gris pour les boutons
  },
  buttonText: {
    fontSize: 28,
    fontWeight: 'normal',
    color: '#333333', // Couleur du texte des chiffres
  },
  // Vous aurez besoin d'un style spécifique pour le bouton 'Continue' bleu
  continueButton: {
    backgroundColor: '#4B6EE6', // Couleur bleue de l'image
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 20,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});