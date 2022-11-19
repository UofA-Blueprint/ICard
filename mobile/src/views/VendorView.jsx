import React from 'react';
import axios from 'axios';
import {StyleSheet, View, FlatList, Text, Dimensions} from 'react-native';
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
      <View style={styles.container}>
        <Text style={{
          color: colors.primary,
          fontSize: 30,
          fontWeight: 'bold',
          marginVertical: 10,
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

      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 64,
      backgroundColor: "#D9FFDC44",
      alignItems: 'center',
    },
    vendorList: {
      paddingHorizontal: 20,
    },
  });

export default VendorView;
