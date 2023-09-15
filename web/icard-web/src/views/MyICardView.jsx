import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import {
  View,
  RefreshControl,
  StyleSheet,
  ScrollView,
} from "react-native";

import AuthContext from "../context/AuthContext";
import MyICardPage from "../components/shared/ICardPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import VerificationView from "../views/VerificationView";
import { useFocusEffect } from "@react-navigation/native";
import { setNavigationCache } from "../utilites/NavigationCache";
import { googleLogout } from "@react-oauth/google";

const Stack = createNativeStackNavigator();

import { API_ROUTE, API_KEY } from "@env";
import { storeUser } from "../utilites/StoreUser";
import SubmittedView from "./SubmittedView";

const MyICard = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);
  const [status, setStatus] = useState("");
  const [verbose, setVerbose] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setNavigationCache({
        lastVisitedPage: "My ICard",
        lastTime: Date.now(),
      });
      loadUserData();
    }, [])
  );

  const loadUserData = async () => {
    setRefreshing(true);
    axios
      .get(`${API_ROUTE}api/students/${user._id}`, {
        headers: { "x-api-key": API_KEY, "jwt-token": user.key },
      })
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        data["verification_image"] == "" ||
        data["verification_image"] == undefined
          ? (data["verification_image"] = "")
          : null;
        setRefreshing(false);
        setUser({ ...user, ...data });
        storeUser({ ...user, ...data });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (user == null) return <></>;

  const statusCheck = () => {
    let userStatus = "active";
    let userVerbose = "";
    if (user == null) return <></>;
    if (user.verify) userStatus = "inactive";
    if (user.isaf_status && user.verify_status) userStatus = "active";
    if (!user.isaf_status && user.verify_status)
      userStatus = "inactive, reverify";
    if (
      !user.isaf_status &&
      !user.verify_status &&
      !user.verification_image
    )
      userStatus = "inactive, verify";
    if (
      !user.isaf_status &&
      !user.verify_status &&
      user.verification_image
    ) {
      userStatus = "verifying account";
      userVerbose =
        "Verification in progress, may take up to 1-3 business days";
    }
    return { userStatus, userVerbose };
  };

  useEffect(() => {
    if (refreshing === false) {
      let { userStatus, userVerbose } = statusCheck();
      setStatus(userStatus);
      setVerbose(userVerbose);
    }
  }, [status, verbose, refreshing]);
  return (
    <View style={styles.container}>
      <ScrollView
        data-testid={"refreshControl"}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              loadUserData();
            }}
          />
        }
        contentContainerStyle={styles.contentContainer}
      >
        <MyICardPage
          status={status}
          msg={verbose}
          verify={({}) => {
            navigation.navigate("Verification Navigator");
          }}
          refresh={async () => {
            await loadUserData();
          }}
          logOut={async () => {
            setUser(null);
            storeUser(null);
            googleLogout();
          }}
        />
      </ScrollView>
    </View>
  );
};

const VerificationStack = createNativeStackNavigator();

const VerificationNavigator = ({}) => {
  return (
    <VerificationStack.Navigator>
      <VerificationStack.Screen
        name="Verification"
        component={VerificationView}
        options={{ headerShown: false }}
      />
      <VerificationStack.Screen
        name="Submitted"
        component={SubmittedView}
        options={{ headerShown: false }}
      />
    </VerificationStack.Navigator>
  );
};

const MyICardView = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My ICard Main"
        component={MyICard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Verification Navigator"
        component={VerificationNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});

export default MyICardView;
