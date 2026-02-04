import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemeText } from '../../Components/ThemeText';
import { imgPath } from '../../Constant /imgPath';
import useAppTheme from '../../Hooks/useAppTheme';
import { scale } from '../../responsiveSize';
import { Boutton } from '../../Components/Bouton';
import { NativeStackNavigationProp, NativeStackNavigatorProps, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackAuthParamList,  } from '../../type/RootParamList';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { completeOnboarding } from '../../gestionnaire/authSlice'; // Ajustez le chemin si nécessaire


type FiresScreenProps = NativeStackNavigationProp<RootStackAuthParamList,'SignUp'>;

const ThirdPage = () => {
      const {colors} = useAppTheme();
      const navigation = useNavigation<FiresScreenProps>();
      const disPatch = useDispatch();
      
       const handleFinishOnboarding = () => {
    disPatch(completeOnboarding()); 
  }
  return (
    <View style={{flex:1, alignItems:'center'}}>
      <View style={{alignSelf:'flex-end', padding:scale(35)}}>
        {/* <ThemeText variant='Popins_Regular_14' style={{color:colors.TextOnboardingcolor}} >Skip</ThemeText> */}
      </View>
      <View style={{justifyContent:'center', }}>
        <Image source={imgPath.illustration3} />
      </View>
      <View style={{paddingVertical:scale(50), gap:scale(20)}}>
        <ThemeText style={{textAlign:'center', color:colors.subtitle}} variant='Popins_Bold_22'>Quick and easy {'\n'}learning</ThemeText>
        <ThemeText style={{textAlign:'center', color:colors.TextOnboardingcolor}} variant='Popins_Regular_14'>Easy and fast learning at {'\n'} any time to help you {'\n'} improve various skills</ThemeText>
      </View>
      <View style={{flexDirection:'row', marginTop:scale(100), gap:scale(10)}}>
        <Boutton isColor={false} isFill={true} name='SignUp' onPress={() => navigation.navigate('SignUp')}/>
        <Boutton isColor={true} isFill={false} name='Login' onPress={() => navigation.navigate('Login')}/>
      </View>
    </View>
  )
}


export default ThirdPage

const styles = StyleSheet.create({})