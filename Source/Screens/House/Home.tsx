import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { imgPath } from '../../Constant /imgPath';
import { ThemeText } from '../../Components/ThemeText';
import { scale } from '../../responsiveSize';
import { Colors } from '../../Constant /Colors';
import useAppTheme from '../../Hooks/useAppTheme';

const Home = () => {
    
  const {colors} = useAppTheme();


  return (
   <SafeAreaView style={{flex:1, backgroundColor:'#3D5CFF',}}>
      <View style={{flexDirection:'row', padding:scale(16), justifyContent:'space-between'}}>
        <View>
          <ThemeText variant='Popins_Bold_24' style={{color:'#FFFFFF'}}>Hi, Kristin</ThemeText>
          <ThemeText variant='Popins_Regular_12' style={{color:'#FFFFFF'}}> Let's start learning</ThemeText>
        </View>
        <Image source={imgPath.Maskgroup}/>
      </View>
      <View style={{padding:scale(16), borderRadius:scale(24), height:scale(96), width:scale(335), backgroundColor:colors.freeCadreColors }}>

      </View>
   </SafeAreaView>
  )
}

export default Home;

const styles = StyleSheet.create({})