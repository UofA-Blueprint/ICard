import React from 'react';
import {StyleSheet, View, FlatList, Text, Image, ImageBackground} from 'react-native';
import VendorCard from '../components/shared/VendorCard';
import DiscoverBar from '../components/home/DiscoverBar';
import {globalStyleSheet, colors} from '../utilites/Theme';

import vendorData from '../data/vendorMockData';



const HomeView = () => {
  
  return (
    <ImageBackground source={require('../../assets/Background.png')} resizeMode="cover" style={styles.backgoundImage}>
      
      <Image
        source={require('../../assets/Sign-Out.png')}
        style={styles.signOut}
      />
      <Image
        source={require('../../assets/ISA-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome{'\n'}to ISA's{'\n'}mobile app</Text>
      <Text style={styles.headingDiscover}>Discover</Text>
      <DiscoverBar/>
      <View style={styles.row}>
        <Text style={styles.headingVendor}>Vendors</Text>
        <Text style={styles.vendorText}>See All</Text>
      </View>
      
      <VendorCard/>

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
  headingDiscover: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
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
  },
});

export default HomeView;
