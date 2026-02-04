import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import useAppTheme from '../../Hooks/useAppTheme'
import { ThemeText } from '../../Components/ThemeText'
import { scale } from '../../responsiveSize'
import { imgPath } from '../../Constant /imgPath'
import { Boutton } from '../../Components/Bouton'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackAuthParamList } from '../../type/RootParamList'
import { useNavigation } from '@react-navigation/native'

type PhoneSceenProps = NativeStackNavigationProp<RootStackAuthParamList,'Phone'>
const Phone = () => {
  const {colors} = useAppTheme();
  const navigation = useNavigation<PhoneSceenProps>();
     const [phoneNumber, setPhoneNumber] = useState('');
  
      const handleKeyPress = (value:any) => {
          if(value === 'delete'){
              setPhoneNumber(phoneNumber.slice(0, -1));
          } else {
              setPhoneNumber(phoneNumber + value)
          }
      };
      
      const buttons = ['1','2','3','4','5','6','7','8','9','','0','delete'];

  return (
   <SafeAreaView style={{flex:1, backgroundColor:colors.bgAuthColor}}>
      <View style={{alignItems:'center', paddingVertical:scale(46), gap:scale(12)}}>
        <ThemeText variant='Popins_Medium_18' style={{color:colors.subtitle}}>Continue With Phone</ThemeText>
        <Image source={imgPath.illustration}/>
      </View>
      <View style={{width:scale(375), height:scale(520), padding:scale(22), borderTopLeftRadius:scale(10), borderTopRightRadius:scale(10), backgroundColor:colors.modalColor}}>
        <View style={{alignItems:'center'}}>
          <ThemeText variant='Popins_Regular_14' style={{color:colors.TextOnboardingcolor, paddingVertical:scale(24) }}>Enter your Phone Number</ThemeText>
        </View>

          {/* partie reserver au clavier  */}

         <View style={[styles.container,  ]}>
                        <View style={{flexDirection:'row'}}>
                          <TextInput
                            style={[styles.inputDisplay,{color:colors.subtitle}]}
                            value={phoneNumber}
                            maxLength={9}
                            showSoftInputOnFocus={false} // Empêche le clavier natif de monter
                            placeholder="6XXXXXXXX"
                            onChangeText={setPhoneNumber}
                            placeholderTextColor={colors.subtitle}
                            caretHidden={false} // Affiche le curseur même sans clavier
                          />
                          <Boutton name='Continue' isFill={true} style={{marginLeft:scale(-155)}} onPress={() => navigation.navigate('code', {phoneNumber:phoneNumber})}/>            
                        </View>
                    <View style={styles.keypadContainer}>
                        {buttons.map((button, index) => (
                            <Pressable
                            key={index}
                            style={styles.keypadButton}
                            onPress={() => handleKeyPress(buttons[index])}
                            >
                                <ThemeText
                                variant='Popins_Bold_24'
                                 style={[styles.buttonText, {color:colors.subtitle}]}
                                >
                                    {button === 'delete' ? '⌫': button}
                                </ThemeText>
                            </Pressable>
                        ))}
                    </View>
                </View>
      </View>
      
   </SafeAreaView>
  )
}



export default Phone





const styles = StyleSheet.create({
  container: {
    flex: 1, // Fond blanc pour la partie clavier
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  inputDisplay: { 
    fontSize: 24,
    left:scale(1),
    marginBottom: 20,
    width:scale(327),
    height:scale(50),
    borderRadius:scale(8),
    borderWidth:scale(.2),
    borderColor:'#B8B8D2'
   
  },
  keypadContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Permet aux éléments de passer à la ligne suivante
    justifyContent: 'center',
    // La grille de l'image est légèrement décalée vers le haut par rapport au bas de l'écran
  },
  keypadButton: {
    width: 85,         // Taille approximative des boutons ronds
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,        // Espace entre les boutons
    // L'image utilise juste du texte, pas de cercle de fond gris pour les boutons
  },
  buttonText: {
    fontSize: 28,
    fontWeight: 'normal',
     // Couleur du texte des chiffres
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