import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useAppTheme from '../Hooks/useAppTheme';
import { fontPath } from '../Constant /fontPath';
import { Colors } from '../Constant /Colors';
import { RootTabParamList } from '../type/RootParamList';
import { moderateScale, scale, textScale } from '../responsiveSize';
import { ArchiveIcon, ChatCenteredDotsIcon, HoodieIcon, HouseSimpleIcon, MagnifyingGlassIcon, UserIcon } from 'phosphor-react-native';
import Home from '../Screens/House/Home';
import Course from '../Screens/House/Course';
import Search from '../Screens/House/Search';
import Account from '../Screens/House/Account';
import Message from '../Screens/House/Message';
import { View } from 'react-native';
import  { AccountActiveIcons, CourseActiveIcons, HomeActiveIcons, MessageActiveIcons, SearchActiveIcons, SearchInactiveIcons } from '../icons';


const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigation = () => {
    const { colors } = useAppTheme();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: colors.tabBarColors,
                    // elevation: scale(10),
                    // borderTopWidth: 0,
                    // paddingBottom:scale(0),
                    height: scale(111),
                    position:'relative',
                    width:scale(375),
                    borderTopLeftRadius:scale(16),
                    borderTopRightRadius:scale(16),
                    // borderRadius:scale(16),
                    // top:1,
                    justifyContent:'center',
                    alignItems:'center'
                },
                tabBarActiveTintColor: '#3D5CFF', 
                tabBarInactiveTintColor: '#9E9E9E',
                tabBarLabelStyle: {
                    fontFamily: fontPath.Medium,
                    fontSize: textScale(11), 
                    //  marginBottom: scale(10),
                },
                tabBarIconStyle:{
                    marginTop: scale(10),
                },
                
                tabBarIcon: ({ color, focused }) => {
                    
                    const iconSize = 24;
                    
                    // On retourne directement le composant
                    if (route.name === 'Home') {
                        return focused ?  <HomeActiveIcons/>:<HouseSimpleIcon size={iconSize} />
                    } else if (route.name === 'Course') {
                        return focused ?  <CourseActiveIcons/>: <ArchiveIcon size={iconSize}/>
                    } else if (route.name === "Search") {
                        return focused ?  <SearchActiveIcons/> : <SearchInactiveIcons/>
                    } else if(route.name === 'Message') {
                        return focused ?<MessageActiveIcons/>: <ChatCenteredDotsIcon size={iconSize}/> 
                    }else if (route.name === 'Account') {
                        return focused ? <AccountActiveIcons/>: <UserIcon size={iconSize}/>
                    }
                }
            })}
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Course' component={Course}/>
            <Tab.Screen name='Search' component={Search}/>
            <Tab.Screen name='Message' component={Message}/>
            <Tab.Screen name='Account' component={Account}/>
        </Tab.Navigator>
    );
};

export default TabNavigation
