import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenOption from './src/utilites/ScreenOption';
import {useState} from 'react';
import Home from "./src/views/Home";
import MyICardView from "./src/views/MyICardView";
import PageNotFound from "./src/views/PageNotFound";
import RegistrationView from "./src/views/RegistrationView";
import React from "react";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  const [user, setUser] = useState(null);
  const Tabs = () => {return (
      <Tab.Navigator screenOptions={ScreenOption}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Vendors" component={PageNotFound} />
        {user == null ? (
        <Stack.Screen name="My ICard" component={RegistrationView} />
        ) : (
        <Stack.Screen name="My ICard" component={MyICardView} />
        )}
      </Tab.Navigator>
  )};

  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={ScreenOption}>
            <Stack.Screen name="Tabs" component={Tabs} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}