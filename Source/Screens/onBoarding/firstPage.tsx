import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemeText } from '../../Components/ThemeText'
import { imgPath } from '../../Constant /imgPath'
import { scale } from '../../responsiveSize'
import useAppTheme from '../../Hooks/useAppTheme'



const FirstPage = () => {

  const {colors} = useAppTheme();

  return (
    <View style={{flex:1, alignItems:'center'}}>
      <View style={{alignSelf:'flex-end', padding:scale(35)}}>
        <ThemeText variant='Popins_Regular_14' style={{color:colors.TextOnboardingcolor}} >Skip</ThemeText>
      </View>
      <View style={{justifyContent:'center', }}>
        <Image source={imgPath.illustration1} />
      </View>
      <View style={{paddingVertical:scale(50), gap:scale(20)}}>
        <ThemeText style={{textAlign:'center', color:colors.subtitle}} variant='Popins_Bold_22'>Numerous free {'\n'}trial courses</ThemeText>
        <ThemeText style={{textAlign:'center', color:colors.TextOnboardingcolor}} variant='Popins_Regular_14'>Free courses for you to {'\n'}find your way to learning</ThemeText>
      </View>
    </View>
  )
}

export default FirstPage

const styles = StyleSheet.create({})