/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeView from './src/views/HomeView';
import ScanView from './src/views/ScanView';
import RegistrationView from './src/views/RegistrationView';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenOption from './src/utilites/ScreenOption';
import {globalStyleSheet} from './src/utilites/Theme';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
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
    </SafeAreaView>
  );
};

export default App;
