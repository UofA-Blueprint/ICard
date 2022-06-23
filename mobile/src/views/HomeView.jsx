import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Header from '../components/share/Header';
import VendorCard from '../components/home/VendorCard';

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
    <View style={styles.container}>
      <Header />
      <FlatList
        data={vendorData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.vendorList}
        contentContainerStyle={{
          marginBottom: 20,
          paddingVertical: 40,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  vendorList: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default HomeView;
