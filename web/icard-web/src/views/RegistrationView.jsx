import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import VerificationView from "./VerificationView";

import { colors } from "../utilites/Theme";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

import AuthContext from "../context/AuthContext";
import axios from "axios";

import { googleLogout, useGoogleLogin } from "@react-oauth/google";

WebBrowser.maybeCompleteAuthSession();

import { API_ROUTE, API_KEY } from "@env";
import MyICardPage from "../components/shared/ICardPage";
import { storeUser } from "../utilites/StoreUser";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFocusEffect } from "@react-navigation/native";
import { setNavigationCache } from "../utilites/NavigationCache";

const Stack = createNativeStackNavigator();

const Registration = ({ navigation }) => {
  const { _, setUser } = useContext(AuthContext);
  const [response, setResponse] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setNavigationCache({
        lastVisitedPage: "Registration",
        lastTime: Date.now(),
      });
    }, [])
  );

  const login = useGoogleLogin({
    flow: "auth-code",
    onSuccess: (codeResponse) => {
      setResponse(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (response) {
      axios
        .post(
          `${API_ROUTE}api/auth/login`,
          {},
          {
            headers: {
              "session-token": response.code,
              "x-api-key": API_KEY,
            },
          }
        )
        .then((res) => {
          setUser(res.data);
          storeUser(res.data);
        })
        .catch((err) => console.log("ERROR", err));
    }
  }, [response]);

  const logOut = () => {
    googleLogout();
    setUser(null);
    setResponse(null);
  };

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
          <Text style={styles.promptMessage}>
            Sign In with Google
          </Text>
        </TouchableOpacity>
      </View>
    </MyICardPage>
  );
};

const RegistrationView = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ICard Registration"
        component={Registration}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ICard Verification"
        component={VerificationView}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
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
    boxShadow:
      "0px 2px 3px 0px rgba(0, 0, 0, 0.17), 0px 0px 3px 0px rgba(0, 0, 0, 0.08)",
    elevation: 5,
  },
  promptMessage: {
    color: colors.primary,
  },
  google: {
    width: 25,
    height: 25,
  },
});

export default RegistrationView;
