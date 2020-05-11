import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignUpScreen } from '../screens/SignUpScreen';
import { SignInScreen } from '../screens/SignInScreen';
import { THEME } from '../theme';
import { useSelector } from 'react-redux';
import { AppNavigation } from '../navigation/AppNavigation';

const Stack = createStackNavigator();

export const Authentication = () => {
  let isLogged = useSelector((state) => state.users.isLogged);

  if (isLogged) {
    return <AppNavigation />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: THEME.MAIN_COLOR,
          },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name='Login' component={SignInScreen} />
        <Stack.Screen name='Sign up' component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
