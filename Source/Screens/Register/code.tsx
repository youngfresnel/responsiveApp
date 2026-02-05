import React, { useState, useEffect , useRef} from 'react';
import { View, Text, Pressable, StyleSheet, Animated } from 'react-native';
import useAppTheme from '../../Hooks/useAppTheme';
import { ThemeText } from '../../Components/ThemeText';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackAuthParamList } from '../../type/RootParamList';
import { moderateScale, scale } from '../../responsiveSize';
import { Boutton } from '../../Components/Bouton';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackAuthParamList,'code'>;
type CodeSceensProps = NativeStackNavigationProp<RootStackAuthParamList,'code'>;
const CODE_LENGTH = 4;

// 1. Petit composant pour le curseur clignotant
const BlinkingCursor = () => {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 0, duration: 500, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 1, duration: 500, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  return <Animated.View style={[styles.cursor, { opacity }]} />;
};

const OtpScreen = ({route}:Props) => {
  const [code, setCode] = useState('');
  const {phoneNumber} = route.params
  // Gestion du clavier custom
  const handleKeyPress = (value: string) => {
    if (value === 'delete') {
      setCode(prev => prev.slice(0, -1));
    } else if (value !== '' && code.length < CODE_LENGTH) {
      setCode(prev => prev + value);
    }
  };
  const {colors} = useAppTheme();
  const navigation = useNavigation<CodeSceensProps>();


  return (
    <View style={[styles.mainContainer, {backgroundColor:colors.codeColor}]}>
       <View style={{justifyContent:'space-between', alignItems:'center', gap:scale(36)}}>
         <ThemeText variant='Popins_Medium_18' style={{color:colors.subtitle}}> Verify Phone</ThemeText>
       </View>

      {/* ZONE D'AFFICHAGE (Les carrés) */}
      <View style={{bottom:scale(28), alignItems:'center', gap:scale(12)}}>
        <ThemeText variant='Popins_Regular_18' style={{color:colors.TextOnboardingcolor}}>Code is send to {phoneNumber}</ThemeText>
        <View style={styles.otpContainer}>
          {Array(CODE_LENGTH).fill(0).map((_, index) => {
              // LOGIQUE ICI : 
              // On est focus si c'est l'index actuel 
              // OU si le code est plein et qu'on est sur la dernière case
              const isFocused = index === code.length || (code.length === CODE_LENGTH && index === CODE_LENGTH - 1);
              // Pour le curseur : on ne l'affiche que si c'est la case active
              // ET (soit la case est vide, soit le code est complet pour rester sur la dernière)
              const showCursor = isFocused && (index === code.length || code.length === CODE_LENGTH);
            const char = code[index];

            return (
              <View
                key={index}
                style={[styles.cell, isFocused && styles.focusCell, {borderColor:colors.phoneBorderColor,}]}
              >
                <ThemeText  variant='Popins_Medium_18' style={[styles.cellText, {color:colors.subtitle}]}>{char}</ThemeText>
                {/* On affiche le curseur clignotant seulement dans la case active */}
                {  showCursor&& <BlinkingCursor />}
              </View>
            );
          })}
        </View>
        <View style={{top:scale(68),paddingTop:scale(8)}}>
          <Boutton name='Verify and create Account' isFill={true} style={{width:scale(253)}} onPress={() => navigation.navigate('done')}/>
        </View>
      </View>

      {/* TON CLAVIER CUSTOM */}
      <View style={styles.keypadContainer}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'delete'].map((btn, i) => (
          <Pressable 
            key={i} 
            style={styles.keypadButton} 
            onPress={() => handleKeyPress(btn)}
          >
            <Text style={[styles.buttonText,{color:colors.subtitle}]}>{btn === 'delete' ? '⌫' : btn}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { flex: 1, justifyContent: 'space-between', paddingVertical: scale (45), backgroundColor: '#fff' },
  otpContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  cell: {
    width: scale(55),
    height: scale(60),
    borderWidth:  scale(.5),
    borderRadius: scale(12),
    marginHorizontal:  scale(8),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', // Pour aligner le texte et le curseur
  },
  focusCell: { borderColor: '#007AFF', },
  cellText: { fontSize: moderateScale(22), fontWeight: 'bold', },
  cursor: {
    width: scale(2),
    height: scale (25),
    backgroundColor: '#007AFF',
    position: 'absolute', // Le curseur se superpose au centre
  },
  // Style du clavier
  keypadContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  keypadButton: { width: '30%', height: scale(80), justifyContent: 'center', alignItems: 'center' },
  buttonText: { fontSize: scale(28), color: '#333' },
});

export default OtpScreen;

