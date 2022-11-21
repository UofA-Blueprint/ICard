import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeDate = async() => {
    try{
        await AsyncStorage.setItem('lastOpened', new Date().getTime().toString())
    } catch(error) {
        storeDate() //Is this a good way to handle error?
    }
}

 

