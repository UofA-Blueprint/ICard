import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenOption from './src/utilites/ScreenOption';

import Home from "./src/views/Home";
import PageNotFound from "./src/views/PageNotFound";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const Tabs = () => {return (
      <Tab.Navigator screenOptions={ScreenOption}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Vendors" component={PageNotFound} />
        <Stack.Screen name="My ICard" component={PageNotFound} />
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