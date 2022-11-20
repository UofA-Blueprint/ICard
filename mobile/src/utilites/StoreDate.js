import AsyncStorage from '@react-native-async-storage/async-storage';
import { getTimestamp } from 'react-native-reanimated/lib/reanimated2/core';


export const storeDate = async() => {
    try{
        
        await AsyncStorage.setItem('lastOpened', new Date().getTime().toString())
        console.log("Storing Date");
    } catch(error) {
        storeDate() //Is this a good way to handle error?
    }
}

 

