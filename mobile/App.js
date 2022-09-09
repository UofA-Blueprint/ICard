/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeView from './src/views/HomeView';
import ScanView from './src/views/ScanView';
import VendorView from './src/views/VendorView';
import RegistrationView from './src/views/RegistrationView';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenOption from './src/utilites/ScreenOption';
import {globalStyleSheet} from './src/utilites/Theme';
import MyICardView from './src/views/MyICardView';

import {Text} from 'react-native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import AuthContext from './src/context/AuthContext';

const Tab = createBottomTabNavigator();

const App = () => {
  const [user, setUser] = useState(null);
  const value = {user, setUser};
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <AuthContext.Provider value={value}>
          <Tab.Navigator screenOptions={ScreenOption}>
            {user == null ? (
              <>
                <Tab.Screen name="Home" component={HomeView} />
                <Tab.Screen name="Vendors" component={VendorView} />
                <Tab.Screen
                  name="Scan"
                  component={ScanView}
                  options={{tabBarStyle: globalStyleSheet.tabBarHidden}}
                />
                <Tab.Screen name="My ICard" component={RegistrationView} />
              </>
            ) : (
              <>
                <Tab.Screen name="Home" component={HomeView} />
                <Tab.Screen name="Vendors" component={VendorView} />
                <Tab.Screen
                  name="Scan"
                  component={ScanView}
                  options={{tabBarStyle: globalStyleSheet.tabBarHidden}}
                />
                <Tab.Screen name="My ICard" component={MyICardView} />
              </>
            )}
          </Tab.Navigator>
        </AuthContext.Provider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
