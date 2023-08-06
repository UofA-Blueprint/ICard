import { StatusBar } from "expo-status-bar";
import Home from "./src/views/Home";
import RegistrationView from "./src/views/RegistrationView";
import VerificationView from "./src/views/VerificationView";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <VerificationView />
    </SafeAreaProvider>
  );
}