/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeView from './src/views/HomeView';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <HomeView></HomeView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
