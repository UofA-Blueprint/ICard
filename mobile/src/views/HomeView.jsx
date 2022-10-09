import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9bc3438 (Fixed conflict)
=======
>>>>>>> ea2a4cf (Fixed conflict)
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
=======
import {StyleSheet, View, FlatList, Text, Image, ImageBackground} from 'react-native';
import VendorCard from '../components/shared/VendorCard';
<<<<<<< HEAD
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
=======
import {StyleSheet, View, FlatList, Text, Image, ImageBackground} from 'react-native';
import VendorCard from '../components/shared/VendorCard';
>>>>>>> cbd9915 (Put the home page together)
=======
>>>>>>> b6f9aa8 (Fixed conflict)
>>>>>>> 9bc3438 (Fixed conflict)
import DiscoverBar from '../components/home/DiscoverBar';
<<<<<<< HEAD
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
=======
import {globalStyleSheet, colors} from '../utilites/Theme';
import VendorList from '../components/shared/VendorList';
import {useState} from 'react';
=======
import {globalStyleSheet} from '../utilites/Theme';
>>>>>>> 3b11119 (Fixed merge conflict)
>>>>>>> cbeefdb (Fixed conflict)

import vendorData from '../data/vendorMockData';
import { shuffle } from '../utilites/Shuffle';


const HomeView = () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b47603a (fixed vendor component on home page)
=======
>>>>>>> 9bc3438 (Fixed conflict)
=======
=======
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import DiscoverBar from '../components/home/DiscoverBar';
<<<<<<< HEAD
import {globalStyleSheet} from '../utilites/Theme';
=======
import {globalStyleSheet, colors} from '../utilites/Theme';
import VendorList from '../components/shared/VendorList';
import {useState} from 'react';
>>>>>>> b47603a (fixed vendor component on home page)

import vendorData from '../data/vendorMockData';
import { shuffle } from '../utilites/Shuffle';

const HomeView = () => {
>>>>>>> 54c48e2 (Fixed conflict)
>>>>>>> ea2a4cf (Fixed conflict)

  const vendorDataRandom = shuffle(vendorData);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> b6f9aa8 (Fixed conflict)
>>>>>>> 9bc3438 (Fixed conflict)
=======
=======
>>>>>>> b6f9aa8 (Fixed conflict)
=======
>>>>>>> 54c48e2 (Fixed conflict)
>>>>>>> ea2a4cf (Fixed conflict)
  
  return (
    <ImageBackground source={require('../../assets/Background.png')} resizeMode="cover" style={styles.backgoundImage}>
      
>>>>>>> 45a41de (Put the home page together)
=======
  
  return (
    <ImageBackground source={require('../../assets/Background.png')} resizeMode="cover" style={styles.backgoundImage}>
      
>>>>>>> cbd9915 (Put the home page together)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> df5ffde (Fixed conflict)
=======
      <Text style={styles.title}>Welcome{'\n'}to ISA's{'\n'}mobile app</Text>
      <Text style={styles.headingDiscoverDiscover}>Discover</Text>
      <DiscoverBar/>
      <View style={styles.row}>
        <Text style={styles.headingVendor}>Vendors</Text>
        <Text style={styles.vendorText}>See All</Text>
      </View>
      
      <VendorList
        searchPhrase={searchPhrase}
        data={vendorDataRandom}
        setClicked={setClicked}
=======
=======
>>>>>>> b6f9aa8 (Fixed conflict)
>>>>>>> 9bc3438 (Fixed conflict)
      <Text style={styles.title}>
        Welcome{'\n'}to ISA's{'\n'}mobile app
      </Text>
      <Text style={styles.heading}>Discover</Text>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <DiscoverBar />
=======
=======
      <Text style={styles.title}>Welcome{'\n'}to ISA's{'\n'}mobile app</Text>
      <Text style={styles.headingDiscoverDiscover}>Discover</Text>
>>>>>>> cbeefdb (Fixed conflict)
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
=======
      <DiscoverBar />
>>>>>>> 1fed3a7 (Fixed conflict)
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
=======
      <Text style={styles.title}>Welcome{'\n'}to ISA's{'\n'}mobile app</Text>
      <Text style={styles.headingDiscover}>Discover</Text>
      <DiscoverBar/>
>>>>>>> cbd9915 (Put the home page together)
      <View style={styles.row}>
        <Text style={styles.headingVendor}>Vendors</Text>
        <Text style={styles.vendorText}>See All</Text>
      </View>
      
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
>>>>>>> df5ffde (Fixed conflict)
=======
=======
      <Text style={styles.title}>
        Welcome{'\n'}to ISA's{'\n'}mobile app
      </Text>
      <Text style={styles.heading}>Discover</Text>
      <DiscoverBar />
      <FlatList
        data={vendorData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.vendorList}
        contentContainerStyle={globalStyleSheet.listContentContainer}
>>>>>>> 3b11119 (Fixed merge conflict)
>>>>>>> cbeefdb (Fixed conflict)
      />
<<<<<<< HEAD
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
=======
<<<<<<< HEAD

    </ImageBackground>
=======
    </View>
=======
      <Text style={styles.title}>Welcome{'\n'}to ISA's{'\n'}mobile app</Text>
      <Text style={styles.headingDiscover}>Discover</Text>
      <DiscoverBar/>
      <View style={styles.row}>
        <Text style={styles.headingVendor}>Vendors</Text>
        <Text style={styles.vendorText}>See All</Text>
      </View>
      
<<<<<<< HEAD
>>>>>>> 9bc3438 (Fixed conflict)
      <VendorCard/>
=======
      <VendorList
        searchPhrase={searchPhrase}
        data={vendorDataRandom}
        setClicked={setClicked}
      />
>>>>>>> ea2a4cf (Fixed conflict)

    </ImageBackground>
>>>>>>> 45a41de (Put the home page together)
<<<<<<< HEAD
=======
      <VendorCard/>

    </ImageBackground>
>>>>>>> cbd9915 (Put the home page together)
=======
>>>>>>> b6f9aa8 (Fixed conflict)
>>>>>>> 9bc3438 (Fixed conflict)
  );
};
const styles = StyleSheet.create({
  container: {
    ...globalStyleSheet.container,
  },
  vendorList: {
    paddingHorizontal: 20,
  },
<<<<<<< HEAD
  headingDiscover: {
=======
<<<<<<< HEAD
  headingDiscoverDiscover: {
=======
  headingDiscover: {
>>>>>>> b6f9aa8 (Fixed conflict)
>>>>>>> 9bc3438 (Fixed conflict)
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
    marginLeft: 25,
<<<<<<< HEAD
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
=======
>>>>>>> cbeefdb (Fixed conflict)
  },
  headingVendor: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 25,
    color: colors.darkGray,
  },
<<<<<<< HEAD
  headingVendor: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 25,
    color: colors.darkGray,
  },
=======
>>>>>>> b6f9aa8 (Fixed conflict)
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
=======
>>>>>>> cbd9915 (Put the home page together)
=======
>>>>>>> cbeefdb (Fixed conflict)
=======
>>>>>>> 9bc3438 (Fixed conflict)
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
=======
>>>>>>> cbd9915 (Put the home page together)
=======
=======
    marginLeft: 25,
    marginTop: 5,
>>>>>>> 3b11119 (Fixed merge conflict)
<<<<<<< HEAD
>>>>>>> cbeefdb (Fixed conflict)
=======
=======
    marginLeft: 25,
    marginTop: 5,
=======
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
>>>>>>> 45a41de (Put the home page together)
>>>>>>> b6f9aa8 (Fixed conflict)
>>>>>>> 9bc3438 (Fixed conflict)
  },
});

export default HomeView;
