import AsyncStorage from "@react-native-async-storage/async-storage";
import { storedUserDataKey } from "./GlobalConstants";

export const storeUser = async (data) => {
  try {
    await AsyncStorage.setItem(
      storedUserDataKey,
      JSON.stringify(data)
    );
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    const value = await AsyncStorage.getItem(storedUserDataKey);
    return value === null ? null : JSON.parse(value);
  } catch (error) {
    console.log(error);
  }
};
