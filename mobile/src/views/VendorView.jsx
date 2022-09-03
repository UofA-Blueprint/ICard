import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import Header from '../components/shared/Header';
import VendorCard from '../components/shared/VendorCard';
import {globalStyleSheet} from '../utilites/Theme';
import vendorData from '../data/vendorMockData';
import {colors} from '../utilites/Theme'

const VendorView = () => {
  const renderItem = ({item}) => (
    <VendorCard
      vendorName={item.vendorName}
      location={item.location}
      cardDesc={item.cardDesc}
      discount={item.discount}
      vendorImage={item.image}
      description={item.popupDesc}
      contact={item.contact}
    />
  );

  return (
    <View style={[styles.container, {backgroundColor: '#D9FFDC44'}]}>
      <Header />

      <Text style={{
        color: colors.primary,
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: 20,
        alignSelf: 'flex-start'
      }}>
        Vendors
      </Text>

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
