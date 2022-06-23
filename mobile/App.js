/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeView from './src/views/HomeView';
import ScanView from './src/views/ScanView';
import RegistrationView from './src/views/RegistrationView';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarStyle: {
              borderTopWidth: 1,
              borderTopColor: '#2E6933',
            },
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home-variant' : 'home-variant-outline';
              } else if (route.name === 'Scan') {
                iconName = focused ? 'camera' : 'camera-outline';
              } else if (route.name === 'My ICard') {
                iconName = focused ? 'credit-card' : 'credit-card-outline';
              }
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#2E6933',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Home" component={HomeView} />
          <Tab.Screen
            name="Scan"
            component={ScanView}
            options={{
              // hide the bottom tab bar on Product Screen
              tabBarStyle: {display: 'none'},
            }}
          />
          <Tab.Screen name="My ICard" component={RegistrationView} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
