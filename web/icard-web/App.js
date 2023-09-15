import AuthContext from "./src/context/AuthContext";
import { useEffect, useState } from "react";
import Index from "./src/views/Index";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { storedUserDataKey } from "./src/utilites/GlobalConstants";

import { GoogleOAuthProvider } from "@react-oauth/google";

import { CLIENT_ID } from "@env";
import { navigationRef } from "./src/utilites/RootNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [user, setUser] = useState(null);
  const value = { user, setUser };
  useEffect(() => {
    const checkUser = async () => {
      const userData = JSON.parse(
        await AsyncStorage.getItem(storedUserDataKey)
      );
      setUser(userData);
    };
    checkUser();
  }, []);

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <AuthContext.Provider value={value}>
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef}>
            <Index />
          </NavigationContainer>
        </SafeAreaProvider>
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );
}
