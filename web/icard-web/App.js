import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";
import AuthContext from "./src/context/AuthContext";
import { useEffect, useState } from "react";
import Index from "./src/views/Index";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenOption from './src/utilites/ScreenOption';

import Home from "./src/views/Home";
import MyICardView from "./src/views/MyICardView";
import PageNotFound from "./src/views/PageNotFound";
import RegistrationView from "./src/views/RegistrationView";
import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';


import {
  storeDateKey,
  storedUserDataKey,
  monthInMilliseconds,
} from './src/utilites/GlobalConstants';

import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";


// import secret from "./secrets/client_secrets.json";
import {CLIENT_ID} from '@env';
export default function App() {
  const [user, setUser] = useState(null);
  const value = { user, setUser };
  useEffect(() => {
    const checkUser = async () => {
      const userData = JSON.parse(
        await AsyncStorage.getItem(storedUserDataKey),
      );
      console.log(userData);
      setUser(userData);
      // if (userData != null) {
      //   logoutCheckOnStartupAndOnForeground(userData, true);
      // }
    };
    checkUser();
  }, []);

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <AuthContext.Provider value={value}>
        <SafeAreaProvider>
          <Index />
        </SafeAreaProvider>
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  )

}