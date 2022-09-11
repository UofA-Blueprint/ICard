import React from 'react';
import {StyleSheet, View, FlatList, Text, Dimensions} from 'react-native';
import Header from '../components/shared/Header';
import {globalStyleSheet} from '../utilites/Theme';
import vendorData from '../data/vendorMockData';
import {colors} from '../utilites/Theme'
import {useState} from 'react';
import SearchBar from '../components/shared/SearchBar';
import VendorList from '../components/shared/VendorList';

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const VendorView = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);

  const vendorDataRandom = shuffle(vendorData);


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
        data={vendorDataRandom}
        setClicked={setClicked}
      />

    </View>
  );
};

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0.075*win.height,
    backgroundColor: "#D9FFDC44",
    alignItems: 'center',
  },
  vendorList: {
    paddingHorizontal: 20,
  },
});

export default VendorView;
