import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArchiveIcon, ChatCenteredDotsIcon, HouseSimpleIcon, MagnifyingGlassIcon, UserIcon } from 'phosphor-react-native'
import { scale } from './responsiveSize'
import useAppTheme from './Hooks/useAppTheme'

   // icones de la page de Home sur la tabBar
      
  export const HomeActiveIcons = () => {
    const {colors} = useAppTheme();
    return(
      <View style={{backgroundColor:colors.tabBarColors, height:scale(60), width:scale(26), }}>
        <View style={{gap:(14)}}>
          <View style={{width:scale(26), height:scale(2), backgroundColor:"#3D5CFF"}}/>
          <HouseSimpleIcon style={{color:'#3D5CFF'}} weight='fill'/>
        </View>
      </View>
    )
  }  

  // icone de la page de Course sur la tabBar
  
    export const CourseActiveIcons = () => {
    const {colors} = useAppTheme();
    return(
      <View style={{backgroundColor:colors.tabBarColors, height:scale(60), width:scale(26), }}>
        <View style={{gap:(14)}}>
          <View style={{width:scale(26), height:scale(2), backgroundColor:"#3D5CFF"}}/>
          <ArchiveIcon style={{color:'#3D5CFF'}} weight='fill'/>
        </View>
      </View>
    )
  }  

  // icone de la page de Message sur la tabBar
  
    export const MessageActiveIcons = () => {
    const {colors} = useAppTheme();
    return(
      <View style={{backgroundColor:colors.tabBarColors, height:scale(60), width:scale(26), }}>
        <View style={{gap:(14)}}>
          <View style={{width:scale(26), height:scale(2), backgroundColor:"#3D5CFF"}}/>
          <ChatCenteredDotsIcon style={{color:'#3D5CFF'}} weight='fill'/>
        </View>
      </View>
    )
  }  

  // icone de la page de Account sur la tabBar

    export const AccountActiveIcons = () => {
    const {colors} = useAppTheme();
    return(
      <View style={{backgroundColor:colors.tabBarColors, height:scale(60), width:scale(26), }}>
        <View style={{gap:(14)}}>
          <View style={{width:scale(26), height:scale(2), backgroundColor:"#3D5CFF"}}/>
          <UserIcon style={{color:'#3D5CFF'}} weight='fill'/>
        </View>
      </View>
    )
  }  

    // Partie  des icone de la pages de recherche

 export const SearchActiveIcons = () => {
   const {colors} =useAppTheme();
  return (
  <View style={{ width:scale(68), height:scale(100), borderRadius:scale(36), backgroundColor:colors.tabBarColors, justifyContent:'center', alignItems:'center' }}>  
    <View style={{width:scale(52), height:scale(52), borderRadius:scale(26), backgroundColor:colors.searchActiveBarColors, justifyContent:'center', alignItems:'center', bottom:scale(18)}}>
      <MagnifyingGlassIcon size={24} weight='fill' />
    </View>
 </View>
  )
}

export const SearchInactiveIcons = () => {
    const {colors} = useAppTheme();
       return (
  <View style={{ width:scale(68), height:scale(100), borderRadius:scale(36), backgroundColor:colors.tabBarColors, justifyContent:'center', alignItems:'center' }}>  
    <View style={{width:scale(52), height:scale(52), borderRadius:scale(26), backgroundColor:colors.SearchInactiveBarColor, justifyContent:'center', alignItems:'center', bottom:scale(18)}}>
      <MagnifyingGlassIcon size={24} weight='fill' />
    </View>
 </View>
  )
}



