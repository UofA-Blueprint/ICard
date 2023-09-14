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
          <TouchableOpacity
            style={styles.functionButton}
            onPress={onPress}
          >
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

  const RefreshButton = ({ status, onPress }) => {
    let content1 = null;
    {
      content1 = (
        <View>
          <TouchableOpacity
            style={styles.functionButton}
            onPress={onPress}
          >
            <Text style={styles.buttonText}>Refresh</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return content1;
  };

  const LogOutButton = ({ status, onPress }) => {
    let content = null;
    {
      content = (
        <View>
          <TouchableOpacity
            style={styles.functionButton}
            onPress={onPress}
          >
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return content;
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
        "Link to your University of Alberta email to gain access to My ICard";
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
        <View style={styles.notification}>
          <Image
            source={icon_source}
            style={styles.notificationPic}
          />
          <Text style={styles.notificationText}>{message}</Text>
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
              referrerPolicy="no-referrer" // Google rate-limits localhost requests. the bug might not be reproducible in production.
              style={[{ ...styles.avatar, borderColor: theme }]}
            />
            <Text style={styles.userName}>
              {user != null ? user.name : "N/A"}
            </Text>
            <Text style={styles.statusHeader}>ISAF status</Text>
            <Text
              style={[
                {
                  ...styles.ISAFStatus,
                  color: theme,
                  borderColor: theme,
                },
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
        <View style={styles.buttonsContainer}>
          {props.status == "inactive, verify" ||
          props.status == "inactive, reverify" ? (
            <VerificationButton
              onPress={props.verify}
              status={props.status}
            />
          ) : (
            <></>
          )}
          <RefreshButton onPress={props.refresh} />
          {user !== null && <LogOutButton onPress={props.logOut} />}
          {props.status == "Unlinked" ? props.children : <></>}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  fitContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    gap: "4rem",
  },
  containerInside: {
    alignItems: "center",
    width: "100%",
  },
  container: {
    borderRadius: 15,
    backgroundColor: colors.white,
    alignItems: "center",
    color: "#EF6464",
    width: "80%",
    maxWidth: "500px",
    borderRadius: 25,
    borderWidth: 0,
    borderStyle: "solid",
    borderTopWidth: 10,
    // borderWidth: "10px 0px",
    borderBottomWidth: 10,
    padding: 20,
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    elevation: 5,
  },
  backgroundImage: {
    flex: 1,
  },
  avatar: {
    aspectRatio: "1/1",
    maxWidth: 128,
    minWidth: 72,
    borderWidth: 3,
    borderRadius: 64,
    position: "absolute",
    top: "-50%",
    backgroundColor: colors.white,
  },
  userName: {
    marginTop: "2rem",
    fontSize: 24,
    fontWeight: "700",
  },
  statusHeader: {
    marginTop: 12,
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
    flexDirection: "row",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.25,
    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 24,
    maxWidth: "80%",
    backgroundColor: colors.white,
  },
  notificationPic: {
    width: 32,
    height: 32,
  },
  notificationText: {
    flex: 1,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    color: "#737373",
    flexWrap: "wrap",
  },
  functionButton: {
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
  buttonText: {
    color: colors.primary,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyICardPage;
