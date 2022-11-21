import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeUser = async(data) => {
    try{
        await AsyncStorage.setItem('userData', JSON.stringify(data))
    }catch(error){
        storeUser()
    }
};

