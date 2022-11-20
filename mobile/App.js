/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useRef, useEffect, useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
import { storeDate } from './src/utilites/StoreDate';

const Tab = createBottomTabNavigator();

//console.log(AppState.currentState);
const App = () => {
  const [user, setUser] = useState(null);
  const [check, setCheck] = useState(false);
  const value = {user, setUser};
  const appState = useRef(AppState.currentState);
  //const val = useRef(user);
  //console.log(val);
  const logoutCheck = async() => {
    
    try{
        const lastDate = parseInt(await AsyncStorage.getItem('lastOpened'));
        console.log(lastDate);
        if(lastDate != null){
            console.log(lastDate);
            console.log(new Date().getTime());
            console.log(new Date().getTime() - lastDate);
            
            if(new Date().getTime() - lastDate > 60000){
                setUser(null)
            }
            else{
                await storeDate()
            }

        }
    } catch(error){
        logoutCheck()
    }
}
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
        console.log(user);
        if(user != null){
          console.log('Logout check done')
          setCheck(true);          
        }
      }

     
    
      
    
    
    });

    return () => {
      subscription.remove();
    };
  }, [user]);
 
  useEffect(() => {
    const checkLogout = async() => {
      if(check){
        await logoutCheck();
        console.log(user);
        setCheck(false);
      }
    }
    checkLogout()
  }, [check])
  
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
