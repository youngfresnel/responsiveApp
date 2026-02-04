import { StyleSheet, StatusBar, SafeAreaView} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './Source/gestionnaire/Store';
import RootNavigation from './Source/Navigation/RootNavigation';
import { Boutton } from './Source/Components/Bouton';
import { Textfill } from './Source/Components/Textfill';
import ScrollPager from './Source/Screens/onBoarding/scrollPage';


export default function App() {
  return (
    <Provider store={store}>
    <SafeAreaView style={{flex:1}}>
      <StatusBar/>
        <RootNavigation/>
    </SafeAreaView>
    </Provider>
  );
}
const styles = StyleSheet.create({})
