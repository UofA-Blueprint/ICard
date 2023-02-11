import React from 'react';
import axios from 'axios';
import {StyleSheet, View, FlatList, Text, Dimensions, ImageBackground} from 'react-native';
import Header from '../components/shared/Header';
import {globalStyleSheet} from '../utilites/Theme';
import {colors} from '../utilites/Theme'
import {useState, useEffect} from 'react';
import SearchBar from '../components/shared/SearchBar';
import VendorList from '../components/shared/VendorList';
import { shuffle } from '../utilites/Shuffle';
import {options, url} from '../data/vendorMockData'

  const VendorView = () => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [clicked, setClicked] = useState(false);
    const [vendorData, setList] = useState([]);

  React.useEffect(() => {
    axios.get(url, options)
          .then((res) => {
          setList(res.data)
        })
        .catch((error) => console.log(error))
  }, []);


    return (
      <ImageBackground source={require('../../assets/Background.png')} style={styles.backgoundImage}>
        <Text style={{
          color: colors.primary,
          fontSize: 35,
          fontWeight: 'bold',
          marginTop: 36,
          marginHorizontal: 20,
          alignSelf: 'flex-start'
        }}>
          Vendors
        </Text>

        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />

        <VendorList
          searchPhrase={searchPhrase}
          data={vendorData}
          setClicked={setClicked}
        />

      </ImageBackground>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 64,
      backgroundColor: "#D9FFDC44",
      alignItems: 'center',
    },
    backgoundImage:{
      flex: 1,
      resizeMode: 'cover'
    },
    vendorList: {
      paddingHorizontal: 20,
    },
  });

export default VendorView;
