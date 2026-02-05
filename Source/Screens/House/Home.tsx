/* eslint-disable react-native/no-inline-styles */
import { Image, ImageBackground, SafeAreaView, ScrollView, View } from 'react-native'
import React from 'react'
import { imgPath } from '../../Constant /imgPath';
import { ThemeText } from '../../Components/ThemeText';
import { scale } from '../../responsiveSize';
// import { colors } from '../../Constant /Colors';
import useAppTheme from '../../Hooks/useAppTheme';
import { Boutton } from '../../Components/Bouton';

const Home = () => {

  const {colors} = useAppTheme();
  const steps:number = 10;


  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#3D5CFF',}}>
        <View style={{flexDirection:'row', paddingHorizontal:scale(24), paddingVertical:scale(42), justifyContent:'space-between'}}>
            <View>
              <ThemeText variant='Popins_Bold_24' style={{color:'#FFFFFF'}}>Hi, Kristin</ThemeText>
              <ThemeText variant='Popins_Regular_12' style={{color:'#FFFFFF'}}> Let's start learning</ThemeText>
            </View>
            <Image source={imgPath.Maskgroup}/>
          </View>
          <View style={{ flex:1,backgroundColor:colors.bgOnboardingColor, top:scale(32)}}>
            <View style={{paddingHorizontal:scale(16), }}>
              <View style={{borderRadius:scale(14), height:scale(96), width:scale(335), backgroundColor:colors.freeCadreColors, elevation:15, bottom:scale(40)}}>
                <View style={{padding:scale(12), flexDirection:'column', gap:scale(6)}}>
                  <View style={{justifyContent:'space-between', flexDirection:'row'}}>
                    <ThemeText variant='Popins_Regular_12' style={{color:'#858597'}}>Learned Today</ThemeText>
                    <ThemeText variant='Popins_Regular_12' style={{color:'#3D5CFF'}}>My Courses</ThemeText>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <ThemeText variant='Popins_Bold_20' style={{color:'#FFFFFF'}}>46 min</ThemeText>
                    <ThemeText variant='Popins_Bold_20' style={{color:'#858597', fontSize:16, top:scale(5)}}> /</ThemeText>
                    <ThemeText variant='Popins_Regular_10' style={{color:'#858597', top:scale(12) }}>60 min</ThemeText>
                  </View>
                  <View>
                    <View style={{width:scale(303), height:scale(6), borderRadius:scale(6), overflow:'hidden', backgroundColor:'white'}}></View>
                  </View>
                </View>
              </View>
              {/* <View style={{flex:1}}>
                <View style={{  }}>
                  <Image source={imgPath.illustration4} style={{ left:100 }}/>
                  <Boutton name='je suis' style={{ bottom:scale(80), position:'static' }}/>
                </View>
              </View> */}
          </View>
        </View>
    </SafeAreaView>
  
  )
}

export default Home;

