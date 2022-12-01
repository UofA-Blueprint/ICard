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
import { storeDateKey, storedUserDataKey, monthInMilliseconds } from './src/utilites/GlobalConstants';


const Tab = createBottomTabNavigator();

const App = () => {
  const [user, setUser] = useState(null);
  const [check, setCheck] = useState(false);
  const value = {user, setUser};
  const appState = useRef(AppState.currentState);
  
  const logoutCheckOnStartupAndOnForeground = async(userData = null,startup = false) => {
    
    try{
        const lastDate = parseInt(await AsyncStorage.getItem(storeDateKey));    
        if(lastDate != null){
            //change num in if statement below to a month in milliseconds
            if(new Date().getTime() - lastDate > monthInMilliseconds){
                setUser(null)
                storeUser(null)
            }
            else{
              if(startup){
                  //If the user is starting up the app from scratch, log them in automatically
                  //TODO: User data automatically being set to old data that was saved before quitting or going to bg. Currently need to refresh after automatic login to get new refreshed data. Maybe, if stuff has changed, we set user to the new data instead of the old stored data
                  setUser(userData)
                }
                await storeDate()
            }
        }
    } catch(error){
        console.log(error)
    }
}
  //Log out check on startup
  useEffect(() => {
    const checkUser = async() => {
      const userData = JSON.parse(await AsyncStorage.getItem(storedUserDataKey))
      if(userData != null){
        logoutCheckOnStartupAndOnForeground(userData, true)
      }

    } 
    checkUser()
  }, [])
  
  

  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {    
      appState.current = nextAppState;
      if(appState.current === 'active' && user != null){         
        logoutCheckOnStartupAndOnForeground()          
        
      }
      if(appState.current === 'background' && user != null){ 
        storeDate()
      }
    
    });

    return () => {
      subscription.remove();
    };
  }, [user]);
 
  
  
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
