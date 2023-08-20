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
import { useState, useEffect, useContext } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
//import VendorList from '../components/shared/VendorList';
//import VendorView from './VendorView';
//import {useState, useEffect, useContext} from 'react';
//import {options, url} from '../data/vendorMockData';
//import {shuffle} from '../utilites/Shuffle';
//import {getData} from '../data/vendorMockData';
//import {SafeAreaView} from 'react-native-safe-area-context';
//import {ScrollView} from 'react-native-virtualized-view';
//import AuthContext from '../context/AuthContext';
import {storeUser} from '../utilites/StoreUser';

const Home = ({ navigation }) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [vendorData, setList] = useState(
    require("./../data/vendorMockData.json")
  );
  /*
  const {user, setUser} = useContext(AuthContext);

  React.useEffect(() => {
    axios
      .get(url, options)
      .then(res => {
        setList(res.data);
      })
      .catch(error => console.log(error));
  }, []);
  */

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
            onPress={async () =>{
              await storeUser(null);
              setUser(null);
            }}>
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
            setClicked={setClicked}
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
