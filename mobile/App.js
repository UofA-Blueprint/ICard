/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeView from './src/views/HomeView';
import VendorView from './src/views/VendorView';
import RegistrationView from './src/views/RegistrationView';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenOption from './src/utilites/ScreenOption';
import MyICardView from './src/views/MyICardView';
import { AppState } from "react-native";
import AuthContext from './src/context/AuthContext';
import { storeDate } from './src/utilites/StoreDate';
import { storeUser } from './src/utilites/StoreUser';

const Tab = createBottomTabNavigator();

const App = () => {
  const [user, setUser] = useState(null);
  const [check, setCheck] = useState(false);
  const value = {user, setUser};
  const appState = useRef(AppState.currentState);
  
  const logoutCheck = async(userData = null,startup = false) => {
    
    try{
        const lastDate = parseInt(await AsyncStorage.getItem('lastOpened'));    
        if(lastDate != null){
            //change num in if statement below to a month in milliseconds
            if(new Date().getTime() - lastDate > 2629800000){
                setUser(null)
                storeUser(null)
            }
            else{
                if(startup){
                  setUser(userData)
                }
                await storeDate()
            }
        }
    } catch(error){
        logoutCheck()
    }
}
  useEffect(() => {
    const checkUser = async() => {
      const userData = JSON.parse(await AsyncStorage.getItem('userData'))
      if(userData != null){
        logoutCheck(userData, true)
      }

    } 
    checkUser()
  }, [])
  
  
  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {
      
      if (
        appState.current.match(/active/) &&
        nextAppState === "background"
      ) {
        
        if(user != null){ 
          storeDate()
        }
      }

      appState.current = nextAppState;
      
    });

    return () => {
      subscription.remove();
    };
  }, [user]);
  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {    
      appState.current = nextAppState;
      if(appState.current === 'active'){
        
        if(user != null){         
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
