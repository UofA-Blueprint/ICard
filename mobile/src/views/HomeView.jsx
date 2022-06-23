import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Header from '../components/share/Header';
import VendorCard from '../components/home/VendorCard';
import {globalStyleSheet} from '../components/share/Theme';

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
        contentContainerStyle={globalStyleSheet.listContentContainer}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...globalStyleSheet.container,
    ...globalStyleSheet.flexibleContainer,
  },
  vendorList: {
    ...globalStyleSheet.flexibleContainer,
    paddingHorizontal: 20,
  },
});

export default HomeView;
