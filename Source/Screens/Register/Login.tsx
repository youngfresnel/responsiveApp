import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Boutton } from '../../Components/Bouton'
import { Textfill } from '../../Components/Textfill'
import { ThemeText } from '../../Components/ThemeText'
import { scale } from '../../responsiveSize'
import useAppTheme from '../../Hooks/useAppTheme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackAuthParamList } from '../../type/RootParamList'
import { useNavigation } from '@react-navigation/native'

type LoginScreensProps = NativeStackNavigationProp<RootStackAuthParamList,'Login'>


const Login = () => {

  const {colors} = useAppTheme();
  const navigation = useNavigation<LoginScreensProps>();

  return (
     <SafeAreaView style={{flex:1, backgroundColor:colors.bgAuthColor}}>
          <View style={{paddingHorizontal:scale(16), marginTop:70}}>
            <ThemeText style={{color:colors.subtitle}} variant='Popins_Bold_32'>Log In</ThemeText>
            <ThemeText style={{color:colors.TextOnboardingcolor}} variant='Popins_Regular_12'>Enter your details below & free sign up</ThemeText>
          </View>
          <View style={{width:scale(375), height:scale(653), padding:scale(22), borderTopLeftRadius:scale(10), borderTopRightRadius:scale(10), backgroundColor:colors.modalAuthColor}}>
            <View>
              <Textfill labelone='Your Email' placeone='Enter your email' labeltwo='Your PassWord' placetwo='Enter your password' isHere={true}/>
            </View>
             <View style={{flexDirection:'row', paddingVertical:scale(8), gap:scale(5), justifyContent:'space-between'}}>
              <View/>
              {/* <Pressable onPress={() => setIsCheck(!isCheck)} style={{ borderWidth:scale(1), backgroundColor: isCheck ? 'gray':colors.bgOnboardingColor, borderColor:'#B8B8D2', width:scale(15), height:scale(15),borderRadius:scale(2) }}/> */}
              <ThemeText variant='Popins_Regular_12' style={{alignSelf:'flex-end', marginLeft:scale(60)}}>Forget password?</ThemeText>
            </View>
            <View>
              <Boutton name='Log In' isFill={true} style={{width:scale(327)}}/>
            </View>
            <View style={{flexDirection:'row', paddingHorizontal:scale(72), paddingVertical:scale(24)}}>
              <ThemeText variant='Popins_Regular_12' style={{color:colors.TextOnboardingcolor}}>Don’t have an account? </ThemeText>
              <Pressable onPress={() => navigation.replace('SignUp')}>
              <ThemeText style={{textDecorationLine:'underline', color:'#3D5CFF',}} variant='Popins_Bold_12' >Sign up</ThemeText>
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})