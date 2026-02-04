import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

// Importez tous vos Stacks ou Composants directs
import AuthStack  from './StackNavigation';
import TabNavigation from './TabNavigation';
import { RootState } from '../gestionnaire/Store';

const Root = createNativeStackNavigator();

const RootNavigation = () => {
  const { isFirsLaunch, isLoggedIn } = useSelector((state: RootState) => state.auth);

  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{ headerShown: false }}>
        {isFirsLaunch ? (
          // Si c'est le premier lancement, on monte le stack d'onboarding et les AuthScreens
          <Root.Screen name="OnboardingFlow" component={AuthStack} />
        ) : !isLoggedIn ? (
          <Root.Screen name="MainFlow" component={TabNavigation} />
        ):(undefined)}
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
