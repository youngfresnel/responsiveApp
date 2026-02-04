import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { RootStackAuthParamList,  } from '../type/RootParamList';
import ScrollPager from '../Screens/onBoarding/scrollPage';
import firstPage from '../Screens/onBoarding/firstPage';
import secondPage from '../Screens/onBoarding/secondPage';
import thirdPage from '../Screens/onBoarding/thirdPage';
import Start from '../Screens/Register/Start';
import SignUp from '../Screens/Register/SignUp';
import Login from '../Screens/Register/Login';
import Phone from '../Screens/Register/Phone';
import OtpScreen from '../Screens/Register/code';
import DoneAuth from '../Screens/Register/doneAuth';


const onBoarding = createNativeStackNavigator<RootStackAuthParamList>();
const Auth = createNativeStackNavigator<RootStackAuthParamList>();

  const AuthStack = () => {
   return(
    <SafeAreaView style={{flex:1}}>
    <Auth.Navigator initialRouteName='scrollPage' screenOptions={{headerShown:false,}}>
      <Auth.Screen name='scrollPage' component={ScrollPager} />
      <Auth.Screen name='firstPage' component={firstPage}/>
      <Auth.Screen name='secondPage' component={secondPage}/>
      <Auth.Screen name='thirdPage' component={thirdPage}/>
      <Auth.Screen name='Start' component={Start}/>
      <Auth.Screen name='SignUp' component={SignUp}/>
      <Auth.Screen name='Login' component={Login}/>
      <Auth.Screen name='Phone' component={Phone}/>
      <Auth.Screen name='code' component={OtpScreen}/>
      <Auth.Screen name='done' component={DoneAuth}/>
    </Auth.Navigator>
    </SafeAreaView>
  )
}

 export default AuthStack
