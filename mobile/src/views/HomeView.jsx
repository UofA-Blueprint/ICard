import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Header from '../components/Header';
import VendorCard from '../components/VendorCard';

import vendorData from '../helpers/vendorMockData';

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
      />
    </View>
  );
};
const styles = StyleSheet.create({
  welcome: {
    color: 'violet',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  vendorList: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
});

export default HomeView;
