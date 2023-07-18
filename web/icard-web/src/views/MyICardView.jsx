import React, { useContext, useEffect, useState } from "react";
import {
  View,
  RefreshControl,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
// import AuthContext from "../context/AuthContext";
import MyICardPage from "../components/shared/ICardPage";
// import SubmittedView from "./SubmittedView";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import VerifcationView from "./VerificationView";

let message;

const Stack = createNativeStackNavigator();


const MyICard = () => {
  // const { user, setUser } = useContext(AuthContext);
  
  const user = {
    name: "Stephanie Jones",
    picture: require("../../assets/temp/pfp.png")
  }
  const [checkStatus, setCheckStatus] = useState(true);
  const [status, setStatus] = useState()
  const [verbose, setVerbose] = useState()
  const [refreshing, setRefreshing] = useState(false);
  useEffect(()=>{
    setStatus("active")
    setVerbose("Please pay your ISAF fees to activate account.")
  })
  // Note: The function to find the status of a user is already implemented in the old code. 
  // Examples
  // const loadUserData = async () => {
  //   setRefreshing(true);
  //   fetch(authRoute + `api/students/${user.id}`, {
  //     method: "GET",
  //     headers: { "x-api-key": apiKey, "jwt-token": user.key },
  //   })
  //     .then((result) => {
  //       return result.json();
  //     })
  //     .then((data) => {
  //       data["key"] = user.key;
  //       data["id"] = data["_id"];
  //       //Data being retrieved from backend is weird. If completely new user logs in
  //       //then verification image is undefined and does not show up in the fetched user data obj
  //       //If verifcation image was added to user at somepoint and then erased (so field is blank now), suddenly
  //       //verification image field is not undefined and is just recognised as a blank space in
  //       //the fetched user obj
  //       //Line below is a work around
  //       //if verification field is blank space or undefined, label it as empty/blank space
  //       data["verification_image"] == "" ||
  //       data["verification_image"] == undefined
  //         ? (data["verification_image"] = "")
  //         : null;
  //       delete data["_id"];
  //       setRefreshing(false);
  //       setUser(data);
  //       storeUser(data);
  //       setCheckStatus(true);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // if (user == null) return <></>;

  // const statusCheck = () => {
  //   finalStatus = "active"
    // if (user == null) return <></>;
    // if (user.verify) finalStatus = "inactive";
    // if (user.isaf_status && user.verify_status) finalStatus = "active";
    // if (!user.isaf_status && user.verify_status)
    //   finalStatus = "inactive, reverify"; //reverify

    // if (!user.isaf_status && !user.verify_status && !user.verification_image)
    //   finalStatus = "inactive, verify"; //verify
    // if (!user.isaf_status && !user.verify_status && user.verification_image)
    //   finalStatus = "verifying account";
    // message = "Verification in progress, may take up to 1-3 business days";
  // };

  // useEffect(() => {
  //   if (checkStatus) {
  //     statusCheck();
  //     setCheckStatus(false);
  //   }
  // }, [checkStatus]);

  //verify button below is a todo. Just have a console.log in it for now
  return (
    <View style={styles.container}>
      <ScrollView
        data-testid={"refreshControl"}
        refreshControl={
          <RefreshControl refreshing={refreshing} />
        }
        contentContainerStyle={styles.contentContainer}
      >
        <MyICardPage
          user={user}
          status={status}
          msg={verbose}
          // TODO: Uncomment this once the verification page is ready
          // verify={() => {
          //   navigation.navigate("Verification");
          // }}
        />
      </ScrollView>
    </View>
  );
};

const MyICardView = () => {
  return (
    // <View>
    //   <MyICard></MyICard>
    // </View>
    <Stack.Navigator
      initialRouteName="Verification"
    >
      <Stack.Screen
        name="My ICard"
        component={MyICard}
        options={{ headerShown: false }}
      />
      {/* TODO: Add verification page */}
      {/* <Stack.Screen
        name="Verification"
        component={VerificationPage}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Submitted"
        component={SubmittedPage}
        options={{ headerShown: false }}
      /> */}
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
