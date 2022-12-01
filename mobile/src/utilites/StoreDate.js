import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeDateKey } from './GlobalConstants';

export const storeDate = async() => {
    try{
        await AsyncStorage.setItem(storeDateKey, new Date().getTime().toString())
    } catch(error) {
        console.log(error);
    }
}

 

