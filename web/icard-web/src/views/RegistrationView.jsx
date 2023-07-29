import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { colors } from "../utilites/Theme";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

import AuthContext from "../context/AuthContext";
import axios from "axios";

import { googleLogout, useGoogleLogin } from "@react-oauth/google";

WebBrowser.maybeCompleteAuthSession();

// import {CLIENT_ID, API_ROUTE, API_KEY} from '@env';
import MyICardPage from "../components/shared/ICardPage";
import { storeDate } from "../utilites/StoreDate";
import { storeUser } from "../utilites/StoreUser";
// import VerificationView from './VerificationView';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const expoClientId = CLIENT_ID;
// const authRoute = API_ROUTE;
// const apiKey = API_KEY;

const Stack = createNativeStackNavigator();

const Registration = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);
  const [response, setResponse] = useState(false)
  const login = useGoogleLogin({
    onSuccess: (codeResponse) =>{ console.log(codeResponse);setResponse(codeResponse)},
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    console.log("USER",response)
    if (response) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log("Profile",res.data)
          setUser(res.data);
        })
        .catch((err) => console.log("ERROR",err));
    }
  }, [response]);

  const logOut = () => {
    googleLogout();
    setUser(null);
    setResponse(null);
  };
  // setUser("Hello")
  // Google Use Auth Request Hook

  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   responseType: 'id_token',
  //   expoClientId: expoClientId,
  //   scopes: ['email', 'profile'],
  // });

  // Effect Hook to save the access token and then fetch user data
  // React.useEffect(() => {
  //   if (response?.type === 'success') {
  //     const token = response.params.id_token;
  //     const fetchData = async () => {
  //       fetch(authRoute + 'api/auth/login', {
  //         method: 'POST',
  //         headers: {'session-token': token, 'x-api-key': apiKey},
  //       })
  //         .then(result => {
  //           return result.json();
  //         })
  //         .then(data => {
  //           //Data being retrieved from backend is weird. If completely new user logs in
  //           //then verification image is undefined and does not show up in the fetched user data obj
  //           //If verifcation image was added to user at somepoint and then erased (so field is blank now), suddenly
  //           //verification image field is not undefined and is just recognised as a blank space in
  //           //the fetched user obj
  //           //Line below is a work around
  //           //if verification field is blank space or undefined, label it as empty/blank space
  //           data["verification_image"] == ""  || data["verification_image"] == undefined ? data["verification_image"] = "" : null;
  //           data["id"] = data["_id"];
  //           delete data["_id"];
  //           setUser(data);
  //           storeDate();
  //           storeUser(data);
  //         });
  //     };
  //     fetchData();
  //     navigation.navigate('Verification')
  //   }
  // }, [response]);

  /*
  Render a Google Sign In Button
  */

  //status defines button condition
  return (
    <MyICardPage user={null} status={"Unlinked"}>
      <View style={styles.bodyContainer}>
        <TouchableOpacity
          // disabled={!request}
          onPress={() => {
            login();
          }}
          style={styles.signInButton}
          activeOpacity={0.5}
        >
          <Image
            source={require("../../assets/google.png")}
            style={styles.google}
          />
          <Text style={styles.promptMessage}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
    </MyICardPage>
  );
};

const RegistrationView = () => {
  return (
    //Added:
    <Registration />

    // <Stack.Navigator>
    //   <Stack.Screen
    //     name="Registration"
    //     component={Registration}
    //     options={{headerShown: false}}
    //   />
    //   <Stack.Screen
    //     name="Verification"
    //     component={VerificationView}
    //     options={{headerShown: false}}
    //   />
    // </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    width: "60%",
    justifyContent: "center",
    marginTop: 5,
    zIndex: 1,
  },
  signInButton: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    width: 250,
    paddingHorizontal: 24,
    paddingVertical: 15,
    backgroundColor: "white",
    borderRadius: 50,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
    elevation: 1,
    boxShadow: "0px 2px 3px 0px rgba(0, 0, 0, 0.17), 0px 0px 3px 0px rgba(0, 0, 0, 0.08)",
    elevation: 5
  },
  promptMessage: {
    color: colors.primary,
  },
  google:{
    width: 25,
    height: 25,
  }
});

export default RegistrationView;
