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
        contentContainerStyle={{
          marginBottom: 20,
          backgroundColor: 'blue',
          paddingBottom: 20,
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
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
});

export default HomeView;
