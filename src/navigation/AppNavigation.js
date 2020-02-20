import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import { MainScreen } from '../screens/MainScreen';
import { PhotoScreen } from '../screens/PhotoScreen';
import { PhotoZoomScreen } from '../screens/PhotoZoomScreen';

import { THEME } from '../theme';

const screenOptions = {
  headerTintColor: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
  headerStyle: {
    backgroundColor: Platform.OS === 'ios' ? '#fff' : THEME.MAIN_COLOR
  }
};

const Stack = createStackNavigator();

export const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name='Gallery' component={MainScreen} />
      <Stack.Screen name='Photo' component={PhotoScreen} />
      <Stack.Screen
        name='PhotoZoom'
        component={PhotoZoomScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
