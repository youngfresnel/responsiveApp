import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ThemeText } from '../../Components/ThemeText'
import { Colors } from '../../Constant /Colors'
import useAppTheme from '../../Hooks/useAppTheme'
import { scale } from '../../responsiveSize'
import { Textfill } from '../../Components/Textfill'
import { Boutton } from '../../Components/Bouton'
import { NativeStackNavigationProp, NativeStackNavigatorProps } from '@react-navigation/native-stack'
import { RootStackAuthParamList } from '../../type/RootParamList'
import { useNavigation } from '@react-navigation/native'

type SignUpScreensProps = NativeStackNavigationProp<RootStackAuthParamList,'SignUp'>

const SignUp = () => {
  const navigation = useNavigation<SignUpScreensProps>();
  const {colors} = useAppTheme();
  const [isCheck, setIsCheck] = useState<boolean>(false)

  return (
    <SafeAreaView style={{flex:1, backgroundColor:colors.bgAuthColor}}>
      <View style={{paddingHorizontal:scale(16), marginTop:70}}>
        <ThemeText style={{color:colors.subtitle}} variant='Popins_Bold_32'>Sign Up</ThemeText>
        <ThemeText style={{color:colors.TextOnboardingcolor}} variant='Popins_Regular_12'>Enter your details below & free sign up</ThemeText>
      </View>
      <View style={{width:scale(375), height:scale(653), padding:scale(22), borderTopLeftRadius:scale(10), borderTopRightRadius:scale(10), backgroundColor:colors.modalAuthColor}}>
        <View>
          <Textfill labelone='Your Email' placeone='Enter your email' labeltwo='Your PassWord' placetwo='Enter your password' isHere={true}/>
        </View>
        <View>
          <Boutton name='Create Account' isFill={true} style={{width:scale(327)}} onPress={() => navigation.replace('Phone')}/>
        </View>
        <View style={{flexDirection:'row', paddingVertical:scale(16), gap:scale(5)}}>
          <Pressable onPress={() => setIsCheck(!isCheck)} style={{ borderWidth:scale(1), backgroundColor: isCheck ? 'gray':colors.bgOnboardingColor, borderColor:'#B8B8D2', width:scale(15), height:scale(15),borderRadius:scale(2) }}/>
          <ThemeText variant='Popins_Regular_12' style={{color:colors.TextOnboardingcolor}}>By creating an account you have to agree {'\n'}with our them & condication.</ThemeText>
        </View>
        <View style={{flexDirection:'row', padding:scale(70)}}>
          <ThemeText variant='Popins_Regular_12' style={{color:colors.TextOnboardingcolor}}>Already have an account ? </ThemeText>
          <Pressable onPress={() => navigation.replace('Login')}>
          <ThemeText style={{textDecorationLine:'underline', color:'#3D5CFF',}} variant='Popins_Bold_12' >Login</ThemeText>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignUp


const styles = StyleSheet.create({})