import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
<<<<<<< HEAD
import Header from '../components/Header';
import VendorCard from '../components/VendorCard';

import vendorData from '../helpers/vendorMockData';
=======
import Header from '../components/share/Header';
import VendorCard from '../components/home/VendorCard';

import vendorData from '../data/vendorMockData';
>>>>>>> develop

const HomeView = () => {
  const renderItem = ({item}) => (
    <VendorCard
      vendorName={item.vendorName}
      address={item.address}
      description={item.description}
    />
  );
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={vendorData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.vendorList}
<<<<<<< HEAD
        contentContainerStyle={{
          marginBottom: 20,
          backgroundColor: 'blue',
          paddingBottom: 20,
        }}
=======
>>>>>>> develop
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  vendorList: {
    flex: 1,
=======
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  vendorList: {
>>>>>>> develop
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
});

export default HomeView;
