/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useRef, useEffect} from 'react';
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
import { AppState } from "react-native";
import AuthContext from './src/context/AuthContext';
import { logoutCheck } from './src/utilites/LogoutCheck';

const Tab = createBottomTabNavigator();

//console.log(AppState.currentState);
const App = () => {
  const [user, setUser] = useState(null);
  const value = {user, setUser};
  const appState = useRef(AppState.currentState);
  const val = useRef(value.user);
  console.log(val);
  
  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {
      
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        console.log("App has come to the foreground!");
      }

      appState.current = nextAppState;
      console.log("AppState", appState.current);
    
      
    
    
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {
      
      appState.current = nextAppState;
      if(appState.current === 'active'){
        console.log('Blimey');
        console.log(val);
        if(val.current != null){
          console.log('Logout check done')
          logoutCheck();
          
        }
      }

     
    
      
    
    
    });

    return () => {
      subscription.remove();
    };
  }, []);
 
 
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <AuthContext.Provider value={value}>
          <Tab.Navigator screenOptions={ScreenOption}>
            {user == null ? (
              <>
                <Tab.Screen name="Home" component={HomeView} />
                <Tab.Screen name="Vendors" component={VendorView} />
                <Tab.Screen name="My ICard" component={RegistrationView} />
              </>
            ) : (
              <>
                <Tab.Screen name="Home" component={HomeView} />
                <Tab.Screen name="Vendors" component={VendorView} />
                <Tab.Screen name="My ICard" component={MyICardView} />
              </>
            )}
          </Tab.Navigator>
        </AuthContext.Provider>
      </NavigationContainer>
    </SafeAreaView>
  );

            }
export default App;
