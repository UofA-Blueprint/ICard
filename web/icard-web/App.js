import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import Home from "./src/views/Home";
import secret from "./secrets/client_secrets.json";

export default function App() {
  console.log(secret);
  return (
    <GoogleOAuthProvider clientId={secret.web.client_id}>
      <Home />
    </GoogleOAuthProvider>
  );
}
