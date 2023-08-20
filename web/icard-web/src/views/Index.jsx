import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import MyICardView from "./MyICardView";

// export default function App() {
//   const [user, setUser] = useState(null);
//   const value = {user, setUser};

//   return (
//     <AuthContext.Provider value={value}>
//       <Home />
//     </AuthContext.Provider>
//   )
// }
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenOption from "../utilites/ScreenOption";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import RegistrationView from "./RegistrationView";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Index() {
  const {user,setUser} = useContext(AuthContext);


  const LogIn = () => {
    return (
      <Tab.Navigator screenOptions={ScreenOption} initialRouteName="My ICard">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Vendors" component={PageNotFound} />
        <Stack.Screen name="My ICard" component={RegistrationView} />
      </Tab.Navigator>
    )
  }
  const Tabs = () => {
    return (
      <Tab.Navigator screenOptions={ScreenOption}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Vendors" component={PageNotFound} />
        <Stack.Screen name="My ICard" component={MyICardView} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ScreenOption}>
        <Stack.Screen name="Tabs" component={user?Tabs:LogIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
