import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import VendorCard from './VendorCard';
import {colors} from '../utilites/Theme';

const Item = ({itemData}) => (
  <VendorCard
    vendorName={itemData.vendorName}
    location={itemData.location}
    cardDesc={itemData.cardDesc}
    discount={itemData.discount}
    vendorImage={itemData.image}
    description={itemData.popupDesc}
    contact={itemData.contact}
  />
);

const VendorList = ({searchPhrase, setClicked, data}) => {
  const renderItem = ({item}) => {
    if (searchPhrase === '') {
      return <Item itemData={item} />;
    }

    if (
      item.vendorName.toLowerCase().includes(searchPhrase.toLowerCase().trim())
    ) {
      return <Item itemData={item} />;
    }

    if (
      item.location.toLowerCase().includes(searchPhrase.toLowerCase().trim())
    ) {
      return <Item itemData={item} />;
    }

    if (
      item.cardDesc.toLowerCase().includes(searchPhrase.toLowerCase().trim())
    ) {
      return <Item itemData={item} />;
    }

    if (
      item.discount.toLowerCase().includes(searchPhrase.toLowerCase().trim())
    ) {
      return <Item itemData={item} />;
    }

    if (
      item.popupDesc.toLowerCase().includes(searchPhrase.toLowerCase().trim())
    ) {
      return <Item itemData={item} />;
    }

    if (
      item.contact.toLowerCase().includes(searchPhrase.toLowerCase().trim())
    ) {
      return <Item itemData={item} />;
    }
  };

  return (
    <View
      sytle={{
        margin: 10,
        height: '85%',
        width: '100%',
      }}>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default VendorList;
