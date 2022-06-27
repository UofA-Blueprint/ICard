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
import RegistrationView from './src/views/RegistrationView';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenOption from './src/components/shared/ScreenOption';
import {globalStyleSheet} from './src/components/shared/Theme';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={ScreenOption}>
          <Tab.Screen name="Home" component={HomeView} />
          <Tab.Screen
            name="Scan"
            component={ScanView}
            options={{tabBarStyle: globalStyleSheet.tabBarHidden}}
          />
          <Tab.Screen name="My ICard" component={RegistrationView} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
