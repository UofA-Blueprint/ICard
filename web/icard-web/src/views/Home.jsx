import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

import DiscoverBar from "../components/home/DiscoverBar";
import { globalStyleSheet, colors } from "../utilites/Theme";
import VendorList from "../components/shared/VendorList";
import { useState, useEffect, useContext, useCallback } from "react";
import React from "react";
import axios from "axios";
import { options, url } from "../data/vendorMockData";
import { getUser, storeUser } from "../utilites/StoreUser";
import AuthContext from "../context/AuthContext";
import {
  useFocusEffect,
  useNavigationState,
} from "@react-navigation/native";
import { storeDate, getDate } from "../utilites/StoreDate";
import {
  getNavigationCache,
  setNavigationCache,
} from "../utilites/NavigationCache";

const Home = ({ navigation }) => {
  const [searchPhrase] = useState("");
  const [vendorData, setList] = useState([]);
  const { _, setUser } = useContext(AuthContext);

  useEffect(() => {
    const caching = async () => {
      let navigationCache = await getNavigationCache();
      let user = await getUser();
      if (navigationCache.lastVisitedPage === "My ICard") {
        navigation.navigate(
          user === null ? "Registration" : "My ICard"
        );
      } else if (Date.now() - navigationCache.lastTime > 3 * 1000)
        navigation.navigate(navigationCache.lastVisitedPage);
    };
    caching();
  }, []);

  useFocusEffect(
    useCallback(() => {
      setNavigationCache({
        lastVisitedPage: "Home",
        lastTime: Date.now(),
      });
    }, [])
  );

  useEffect(() => {
    axios
      .get(url, options)
      .then((res) => {
        setList(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/Background.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <ScrollView>
          {
            // TODO: User == null logic and relevant functions missing
          }
          <TouchableOpacity
            onPress={async () => {
              await storeUser(null);
              setUser(null);
            }}
          >
            <Image
              source={require("../../assets/Sign-Out.png")}
              style={styles.signOut}
            />
          </TouchableOpacity>
          <Image
            source={require("../../assets/ISA-logo.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>
            Welcome{"\n"}to ISA's{"\n"}mobile app
          </Text>
          <Text style={styles.headingDiscoverDiscover}>Discover</Text>
          <DiscoverBar />
          <View style={styles.row}>
            <Text style={styles.headingVendor}>Vendors</Text>

            <Text
              style={styles.vendorText}
              onPress={() => navigation.navigate("Vendors")}
            >
              See All
            </Text>
          </View>
          <VendorList
            searchPhrase={searchPhrase}
            data={vendorData.slice(0, 3)}
          />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyleSheet.container,
  },
  vendorList: {
    paddingHorizontal: 20,
  },
  headingDiscoverDiscover: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
    marginLeft: 25,
    color: colors.darkGray,
  },
  headingVendor: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 25,
    color: colors.darkGray,
  },
  title: {
    marginLeft: 25,
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 11,
  },
  logo: {
    width: 100,
    height: 83,
    resizeMode: "stretch",
    marginLeft: 25,
    marginTop: 7,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  signOut: {
    width: 24,
    height: 24,
    resizeMode: "stretch",
    marginRight: 25,
    marginTop: 24,
    alignSelf: "flex-end",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    justifyContent: "space-between",
  },
  vendorText: {
    color: colors.darkGray,
    marginRight: 24,
    fontSize: 14,
    textAlign: "right",
  },
});

export default Home;
