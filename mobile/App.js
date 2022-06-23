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
import ScanView from './src/views/ScanView';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeView} />
          <Tab.Screen name="Scan" component={ScanView} />
        </Tab.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
