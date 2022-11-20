import React, {useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../context/AuthContext';

export const storeDate = async() => {
    try{
        await AsyncStorage.setItem('lastOpened', new Date().toString())
        console.log("Storing Date");
    } catch(error) {
        storeDate() //Is this a good way to handle error?
    }
}

export const logoutCheck = async() => {
    const {_, setUser} = useContext(AuthContext);
    try{
        const lastDate = await AsyncStorage.getItem('lastOpened')
        if(lastDate != null){
            if(new Date() - lastDate > 0.02){
                setUser(null)
            }
            else{
                storeDate()
            }

        }
    } catch(error){
        logoutCheck()
    }
}

