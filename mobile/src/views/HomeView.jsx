import React from 'react';
import {StyleSheet, View, FlatList, Text, Image} from 'react-native';
import Header from '../components/shared/Header';
import VendorCard from '../components/home/VendorCard';
import DiscoverBar from '../components/home/DiscoverBar';
import {globalStyleSheet, colors} from '../utilites/Theme';

import vendorData from '../data/vendorMockData';


const HomeView = () => {
  const renderItem = ({item}) => (
    <VendorCard
      vendorName={item.vendorName}
      address={item.address}
      description={item.description}
    />
  );
  return (
    <View>
      <Header />
      <Image
        source={require('../../assets/ISA-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome{'\n'}to ISA's{'\n'}mobile app</Text>
      <Text style={styles.heading}>Discover</Text>
      <DiscoverBar/>
      <FlatList
        data={vendorData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.vendorList}
        contentContainerStyle={globalStyleSheet.listContentContainer}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...globalStyleSheet.container,
  },
  vendorList: {
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
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
    marginTop: 5,
  },
});

export default HomeView;
