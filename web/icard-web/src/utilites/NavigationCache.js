import AsyncStorage from "@react-native-async-storage/async-storage";
import { lastVisitedPage } from "./GlobalConstants";

export const getNavigationCache = async () => {
  try {
    const value = await AsyncStorage.getItem(lastVisitedPage);
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    throw e;
  }
};

export const setNavigationCache = async (value) => {
  try {
    await AsyncStorage.setItem(
      lastVisitedPage,
      JSON.stringify(value)
    );
  } catch (e) {
    throw e;
  }
};
