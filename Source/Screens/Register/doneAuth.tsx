import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import useAppTheme from '../../Hooks/useAppTheme'
import { scale } from '../../responsiveSize';
import { imgPath } from '../../Constant /imgPath';
import { ThemeText } from '../../Components/ThemeText';
import { Boutton } from '../../Components/Bouton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackAuthParamList, RootTabParamList } from '../../type/RootParamList';
import { useDispatch } from 'react-redux';
import { completeAuth } from '../../gestionnaire/authSlice';
import { useNavigation } from '@react-navigation/native';
// import { Image } from 'react-native-svg';

type DoneScreensProps = NativeStackNavigationProp<RootTabParamList,'Home'>

const DoneAuth = () => {
     const navigation = useNavigation<DoneScreensProps>();
     const disPatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
                disPatch(completeAuth());
                navigation.navigate('Home')
        },3000);
        return () => {clearTimeout(timer)}; 
    },[])

    const {colors} = useAppTheme();
  return (
   <SafeAreaView style={[styles.contain, {backgroundColor:colors.bgAuthColor}]}>
       <View style={{width:scale(291), gap:scale(16), height:scale(301), borderRadius:scale(8), backgroundColor:colors.modalColor, justifyContent:'center', alignItems:'center'}}>
            <View style={{width:scale(64), height:scale(64), borderRadius:scale(60), backgroundColor:'#3D5CFF', justifyContent:"center", alignItems:'center'}}>
                <Image source={imgPath.vector7}/>
            </View>
            <ThemeText variant='Popins_Medium_16' style={{color:colors.subtitle}}>Succes</ThemeText>
            <ThemeText variant='Popins_Regular_12' style={{color:colors.TextOnboardingcolor, textAlign:'center'}}>Congratulations, you have {'\n'} completed your registration!</ThemeText>
            <Boutton name='Chargement...' isFill={true} style={{width:scale(259)}}/>
       </View>
   </SafeAreaView>
  )
}

export default DoneAuth

const styles = StyleSheet.create({
    contain:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
    }
    
})