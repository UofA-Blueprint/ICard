import { useState, useEffect } from "react";
import axios from "axios";
import { options, url } from "../data/vendorMockData";
import VendorList from "../components/shared/VendorList";
import {
  ImageBackground,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { colors } from "../utilites/Theme";
import SearchBar from "../components/shared/SearchBar";
const VendorView = () => {
  const [list, setList] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
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
      style={styles.backgroundImage}
      source={require("../../assets/Background.png")}
    >
      <Text style={styles.titleText}>Vendors</Text>
      <SearchBar
        nativeID="searchBar"
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <VendorList searchPhrase={searchPhrase} data={list} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  titleText: {
    color: colors.primary,
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 64,
    marginHorizontal: 24,
    alignSelf: "flex-start",
  },
});

export default VendorView;
