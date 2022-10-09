import React from 'react';
import {StyleSheet, View, FlatList, Text, Dimensions} from 'react-native';
import Header from '../components/shared/Header';
import {globalStyleSheet} from '../utilites/Theme';
import vendorData from '../data/vendorMockData';
import {colors} from '../utilites/Theme'
import {useState} from 'react';
import SearchBar from '../components/shared/SearchBar';
import VendorList from '../components/shared/VendorList';
<<<<<<< HEAD
import { shuffle } from '../utilites/Shuffle';

=======

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
<<<<<<< HEAD
>>>>>>> 57731ef (need to fix styling)
=======
>>>>>>> 7fd9c6c (Fixed conflict)
>>>>>>> 75c0bec (Fixed conflict)

const VendorView = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);

  const vendorDataRandom = shuffle(vendorData);


  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <View style={styles.container}>
=======
    <View style={[styles.container, {backgroundColor: '#D9FFDC44'}]}>
=======
    <View style={styles.container}>
>>>>>>> b95fceb (matched styling with figma)
      <Header/>

>>>>>>> 57731ef (need to fix styling)
=======
    <View style={styles.container}>
=======
    <View style={[styles.container, {backgroundColor: '#D9FFDC44'}]}>
      <Header/>

>>>>>>> 7fd9c6c (Fixed conflict)
>>>>>>> 75c0bec (Fixed conflict)
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

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 75c0bec (Fixed conflict)
    flex: 1,
    paddingTop: 64,
    backgroundColor: "#D9FFDC44",
=======
    flex: 1,
    backgroundColor: colors.white,
>>>>>>> b95fceb (matched styling with figma)
    alignItems: 'center',
  },
  vendorList: {
    paddingHorizontal: 20,
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 75c0bec (Fixed conflict)
=======
    ...globalStyleSheet.container,
    top: 0
  }
<<<<<<< HEAD
>>>>>>> 57731ef (need to fix styling)
=======
>>>>>>> b95fceb (matched styling with figma)
=======
>>>>>>> 7fd9c6c (Fixed conflict)
>>>>>>> 75c0bec (Fixed conflict)
});

export default VendorView;
