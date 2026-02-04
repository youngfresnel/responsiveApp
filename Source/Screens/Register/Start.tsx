import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { RootStackAuthParamList } from '../../type/RootParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type AuthScreenNavigationProp = NativeStackNavigationProp<RootStackAuthParamList, 'Start'>;

const Start = () => {

  const navigation = useNavigation<AuthScreenNavigationProp>();

   React.useEffect(() => {
    navigation.replace('SignUp'); 
  }, [navigation]);

  return (
    null
  )
}

export default Start;

const styles = StyleSheet.create({})