import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
=======
import {StyleSheet, View, FlatList, Text, Image, ImageBackground} from 'react-native';
import VendorCard from '../components/shared/VendorCard';
>>>>>>> cbd9915 (Put the home page together)
=======
import {StyleSheet, View, FlatList, Text, Image} from 'react-native';
import Header from '../components/shared/Header';
import VendorCard from '../components/home/VendorCard';
>>>>>>> 4eab920 (fixed accidental duplicate code)
=======
import {StyleSheet, View, FlatList, Text, Image, ImageBackground} from 'react-native';
import VendorCard from '../components/shared/VendorCard';
>>>>>>> 45a41de (Put the home page together)
=======
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
>>>>>>> b47603a (fixed vendor component on home page)
import DiscoverBar from '../components/home/DiscoverBar';
<<<<<<< HEAD
<<<<<<< HEAD
import {globalStyleSheet} from '../utilites/Theme';
=======
import {globalStyleSheet, colors} from '../utilites/Theme';
import VendorList from '../components/shared/VendorList';
import {useState} from 'react';
<<<<<<< HEAD
>>>>>>> b47603a (fixed vendor component on home page)

import vendorData from '../data/vendorMockData';
import { shuffle } from '../utilites/Shuffle';

const HomeView = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======

import vendorData from '../data/vendorMockData';
import { shuffle } from '../utilites/Shuffle';



const HomeView = () => {
>>>>>>> b47603a (fixed vendor component on home page)

  const vendorDataRandom = shuffle(vendorData);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
<<<<<<< HEAD
=======
>>>>>>> cbd9915 (Put the home page together)
  
=======
import {globalStyleSheet} from '../utilites/Theme';

import vendorData from '../data/vendorMockData';
import {shuffle} from '../utilites/Shuffle';

const HomeView = () => {
  const vendorDataRandom = shuffle(vendorData);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);

>>>>>>> df5ffde (Fixed conflict)
  return (
    <ImageBackground
      source={require('../../assets/Background.png')}
      resizeMode="cover"
      style={styles.backgoundImage}>
=======
=======
>>>>>>> b47603a (fixed vendor component on home page)
  
  return (
    <ImageBackground source={require('../../assets/Background.png')} resizeMode="cover" style={styles.backgoundImage}>
      
>>>>>>> 45a41de (Put the home page together)
      <Image
        source={require('../../assets/Sign-Out.png')}
        style={styles.signOut}
      />
      <Image
        source={require('../../assets/ISA-logo.png')}
        style={styles.logo}
      />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> df5ffde (Fixed conflict)
      <Text style={styles.title}>
        Welcome{'\n'}to ISA's{'\n'}mobile app
      </Text>
      <Text style={styles.heading}>Discover</Text>
<<<<<<< HEAD
<<<<<<< HEAD
      <DiscoverBar />
=======
      <DiscoverBar/>
>>>>>>> 4eab920 (fixed accidental duplicate code)
=======
      <DiscoverBar />
>>>>>>> df5ffde (Fixed conflict)
=======
      <Text style={styles.title}>Welcome{'\n'}to ISA's{'\n'}mobile app</Text>
      <Text style={styles.headingDiscover}>Discover</Text>
      <DiscoverBar/>
<<<<<<< HEAD
>>>>>>> 4eab920 (fixed accidental duplicate code)
      <FlatList
        data={vendorData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.vendorList}
        contentContainerStyle={globalStyleSheet.listContentContainer}
<<<<<<< HEAD
      />
    </View>
=======
      <Text style={styles.title}>Welcome{'\n'}to ISA's{'\n'}mobile app</Text>
      <Text style={styles.headingDiscover}>Discover</Text>
      <DiscoverBar/>
=======
      <Text style={styles.title}>Welcome{'\n'}to ISA's{'\n'}mobile app</Text>
      <Text style={styles.headingDiscover}>Discover</Text>
      <DiscoverBar/>
>>>>>>> cbd9915 (Put the home page together)
=======
>>>>>>> 45a41de (Put the home page together)
      <View style={styles.row}>
        <Text style={styles.headingVendor}>Vendors</Text>
        <Text style={styles.vendorText}>See All</Text>
      </View>
      
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b47603a (fixed vendor component on home page)
      <VendorList
        searchPhrase={searchPhrase}
        data={vendorDataRandom}
        setClicked={setClicked}
<<<<<<< HEAD
=======
>>>>>>> df5ffde (Fixed conflict)
      />
    </ImageBackground>
>>>>>>> 45a41de (Put the home page together)
=======
      <VendorCard/>
=======
      />
>>>>>>> b47603a (fixed vendor component on home page)

    </ImageBackground>
>>>>>>> cbd9915 (Put the home page together)
=======
      <VendorCard/>

    </ImageBackground>
>>>>>>> 45a41de (Put the home page together)
  );
};
const styles = StyleSheet.create({
  container: {
    ...globalStyleSheet.container,
  },
  vendorList: {
    paddingHorizontal: 20,
  },
  headingDiscover: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
    marginLeft: 25,
  },
  headingVendor: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 25,
    color: colors.darkGray,
  },
  headingVendor: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 25,
    color: colors.darkGray,
  },
  headingVendor: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 25,
    color: colors.darkGray,
  },
  title: {
    marginLeft: 25,
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 11,
  },
  logo: {
    width: 100,
    height: 83,
    resizeMode: 'stretch',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    marginLeft: 25,
    marginTop: 5,
=======
=======
>>>>>>> cbd9915 (Put the home page together)
=======
>>>>>>> 45a41de (Put the home page together)
    marginLeft: 25, 
    marginTop: 7,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center"
  },
  signOut: {
    width: 24,
    height: 24,
    resizeMode: 'stretch',
    marginRight: 25, 
    marginTop: 24,
    alignSelf: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'space-between',
  },
  vendorText: {
    color: colors.darkGray,
    marginRight: 24,
    fontSize: 14,
    textAlign: 'right',
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 45a41de (Put the home page together)
=======
>>>>>>> cbd9915 (Put the home page together)
=======
    marginLeft: 25,
    marginTop: 5,
>>>>>>> df5ffde (Fixed conflict)
=======
>>>>>>> 45a41de (Put the home page together)
  },
});

export default HomeView;
