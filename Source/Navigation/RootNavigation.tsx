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
  // const isLoggedIn  = useSelector((state: RootState) => state.auth);
    const isAuthIn = useSelector((state: RootState) => state.auth.isAuthIn);

  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{ headerShown: false }}>
        {isAuthIn? (
          // Si c'est le premier lancement, on monte le groupe d'authentification 
          <Root.Screen name="MainFlow" component={TabNavigation} />
        ) : (
          <Root.Screen name="OnboardingFlow" component={AuthStack} />
        )}
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
