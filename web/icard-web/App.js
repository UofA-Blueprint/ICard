import { StatusBar } from 'expo-status-bar';
import HomeView from './src/views/HomeView';
import {
  StyleSheet,
  View,
} from 'react-native';

export default function App() {
  return (
      <View>
        <HomeView />
      </View>
  );
}

