import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useAppTheme from '../Hooks/useAppTheme';
import { fontPath } from '../Constant /fontPath';
import { Colors } from '../Constant /Colors';
import { RootTabParamList } from '../type/RootParamList';
import { moderateScale, scale, textScale } from '../responsiveSize';
import { ArchiveIcon, HouseSimpleIcon, MagnifyingGlassIcon } from 'phosphor-react-native';
import Home from '../Screens/House/Home';
import Course from '../Screens/House/Course';
import Search from '../Screens/House/Search';
import Account from '../Screens/House/Account';


const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigation = () => {
    const { colors } = useAppTheme();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: colors.bgOnboardingColor,
                    elevation: scale(10),
                    borderTopWidth: 0,
                    paddingBottom: moderateScale(12),
                    height: scale(70),
                },
                tabBarActiveTintColor: colors.bgOnboardingColor, 
                tabBarInactiveTintColor: '#9E9E9E',
                tabBarLabelStyle: {
                    fontFamily: fontPath.Medium,
                    fontSize: textScale(12), 
                },
                tabBarIcon: ({ color, focused }) => {
                    const iconSize = 24;
                    const weight = focused ? 'fill' : 'regular'; 
                    
                    // On retourne directement le composant
                    if (route.name === 'Home') {
                        return <HouseSimpleIcon size={iconSize} color={color} weight={weight} />;
                    } else if (route.name === 'Course') {
                        return <ArchiveIcon size={iconSize} color={color} weight={weight} />;
                    } else if (route.name === "Search") {
                        return <MagnifyingGlassIcon size={iconSize} color={color} weight={weight} />;
                    }
                }
            })}
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Course' component={Course}/>
            <Tab.Screen name='Search' component={Search}/>
            <Tab.Screen name='Account' component={Account}/>
        </Tab.Navigator>
    );
};

export default TabNavigation
