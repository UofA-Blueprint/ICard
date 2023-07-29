import React, { useContext, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { colors } from "../../utilites/Theme";

const statusColors = {
  active: colors.primary,
  inactive: colors.red,
  stale: colors.darkGray,
  "verifying account": colors.yellow,
  Unlinked: colors.lightGray,
  "inactive, verify": colors.red,
  "inactive, reverify": colors.red,
};

const MyICardPage = (props) => {
  const { user } = props;
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const VerificationButton = ({ status, onPress }) => {
    let content1 = null;
    {
      content1 = (
        <View>
          <TouchableOpacity style={styles.verificationbutton} onPress={onPress}>
            <Text style={styles.buttonText}>
              {status === "inactive, verify"
                ? "Verify Account"
                : "Reverify account"}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
    return content1;
  };

  const Card = ({ status, msg }) => {
    let color = props.status;
    let message;
    let icon_source;
    if (status == "inactive") {
      icon_source = require("../../../assets/x.png");
      message = msg;
    } else if (status == "stale") {
      icon_source = require("../../../assets/Refresh.png");
      message = "Refresh page to update status";
    } else if (status == "Unlinked") {
      icon_source = require("../../../assets/Link.png");
      message =
        "Link to your University of Alberta\nemail to gain access to My ICard";
    } else if (status == "verifying account") {
      icon_source = require("../../../assets/Link.png");
      message = msg;
    } else if (status == "inactive, verify") {
      icon_source = require("../../../assets/x.png");
      message =
        "Your account is unverified. Please go through the verification process";
    } else if (status == "inactive, reverify") {
      icon_source = require("../../../assets/x.png");
      message =
        "Something went wrong, please reverify account or contact ISA at isa.general@ualberta.ca";
    }
    if (message) {
      return (
        <View>
          <View style={styles.notification}>
            <Image source={icon_source} style={styles.notificationPic} />
            <View justifyContent={"center"} style={[{ flex: 1 }]}>
              <Text style={styles.notificationText}>{message}</Text>
            </View>
          </View>
        </View>
      );
    } else {
      // Active Status
      return <View></View>;
    }
  };


  const theme = statusColors[props.status];
  return (
    <ImageBackground
      source={require("../../../assets/Background.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <View id="fitContent" style={styles.fitContent}>
        <Card status={props.status} msg={props.msg} />
        <View
          style={[{ ...styles.container, borderColor: theme }]}
          backgroundColor={theme}
        >
          <View style={styles.containerInside}>
            <Image
              source={
                user != null
                  ? { uri: user.picture }
                  : require("../../../assets/account.png")
              }
              style={[{ ...styles.avatar, borderColor: theme }]}
            />
            <Text style={styles.userName}>
              {user != null ? user.name : "N/A"}
            </Text>
            <Text style={styles.statusHeader}>ISAF status</Text>
            <Text
              style={[
                { ...styles.ISAFStatus, color: theme, borderColor: theme },
              ]}
            >
              {props.status === "inactive, reverify" ||
              props.status === "inactive, verify" ? (
                <Text>Inactive</Text>
              ) : (
                <Text>{props.status}</Text>
              )}
            </Text>
          </View>
        </View>
        {props.status == "inactive, verify" ||
        props.status == "inactive, reverify" ? (
          <VerificationButton onPress={props.verify} status={props.status} />
        ) : (
          <></>
        )}

        {props.status == "Unlinked" ? props.children : <></>}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  fitContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  containerInside: {
    alignItems: "center",
  },
  container: {
    borderRadius: 15,
    backgroundColor: colors.white,
    flexGrow: 1,
    alignItems: "center",
    flex: 1,
    color: "#EF6464",
    width: "80%",
    maxWidth: "500px",
    maxHeight: 266,
    borderRadius: 25,
    borderWidth: 0,
    borderStyle: "solid",
    borderTopWidth: 10,
    borderWidth: "10px 0px",
    borderBottomWidth: 10,
    padding: 20,
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    elevation: 5,
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
  },
  avatar: {
    width: 128,
    height: 128,
    borderWidth: 3,
    borderRadius: 64,
    position: "absolute",
    top: -80,
    backgroundColor: colors.white,
  },
  userName: {
    marginTop: 72,
    fontSize: 26,
    fontWeight: "700",
  },
  statusHeader: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: "600",
  },
  ISAFStatus: {
    textTransform: "capitalize",
    marginTop: 4,
    fontSize: 30,
    fontWeight: "700",
  },
  notification: {
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    top: "10px",
    left: "50%",
    position: "fixed",
    transform: "translate(-50%, 0);",
    flexDirection: "row",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-evenly",
    minHeight: 66,
    backgroundColor: colors.white,
    marginTop: 60,
    maxWidth: 350,
    shadowOpacity: 0.25,
    elevation: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  notificationPic: {
    width: 34,
    height: 34,
    marginRight: 10,
  },
  notificationText: {
    minWidth: "200px",
    flex: 1,
    marginLeft: 5,
    height: "100%",
    textAlignVertical: "center",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
    color: "#737373",
    flexWrap: "wrap",
  },
  verificationbutton: {
    backgroundColor: colors.white,
    padding: 16,
    alignSelf: "center",
    width: 312,
    height: 54,
    borderRadius: 50,
    marginTop: 25,
    fontFamily: Poppins_600SemiBold,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 0.1px #efefef",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: "normal",
    color: colors.darkGray,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MyICardPage;