import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon } from 'phosphor-react-native'
import { scale } from './responsiveSize'

const Icons = () => {
  return (
    <View style={{width:scale(52), height:scale(52), borderRadius:scale(26), backgroundColor:'green', justifyContent:'center', alignItems:'center', bottom:20}}>
        
      <MagnifyingGlassIcon size={24} weight='fill' />
    </View>
  )
}

export default Icons

const styles = StyleSheet.create({})