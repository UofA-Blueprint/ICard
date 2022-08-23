import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Header from '../components/shared/Header';
import VendorCard from '../components/shared/VendorCard';
import {globalStyleSheet} from '../utilites/Theme';
import vendorData from '../data/vendorMockData';

const VendorView = () => {
  const renderItem = ({item}) => (
    <VendorCard
      vendorName={item.vendorName}
      location={item.location}
      cardDesc={item.cardDesc}
      discount={item.discount}
      vendorImage={item.image}
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
  },
  vendorList: {
    paddingHorizontal: 20,
  },
});

export default VendorView;
