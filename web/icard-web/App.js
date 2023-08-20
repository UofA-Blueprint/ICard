import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AuthContext from "./src/context/AuthContext";
import { useState } from "react";
import Index from "./src/views/Index";
import Home from "./src/views/Home";
import RegistrationView from "./src/views/RegistrationView";
import VerificationView from "./src/views/VerificationView";
import { SafeAreaProvider } from 'react-native-safe-area-context';


import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

// import secret from "./secrets/client_secrets.json";
import {CLIENT_ID} from '@env';
export default function App() {
  const [user, setUser] = useState(null);
  const value = { user, setUser };

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <AuthContext.Provider value={value}>
        <SafeAreaProvider>
          {/* <VerificationView /> */}
          <Index />
        </SafeAreaProvider>
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  )
}