import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import VendorCard from './VendorCard';
import {colors} from '../utilites/Theme';

const Item = ({itemData}) => (
    <VendorCard
      vendorName={itemData.vendorName}
      location={itemData.location}
      discount={itemData.discount}
      vendorImage={itemData.image}
      description={itemData.description}
      contact={itemData.contact}
    />
  );

const VendorList = ({searchPhrase, setClicked, data}) => {
    const renderItem = ({item}) => {
        if (searchPhrase === '') {
            return (
                <Item itemData={item}/>
            )
        }

        if (item.vendorName.toLowerCase().includes(searchPhrase.toLowerCase().trim())) {
            return (
                <Item itemData={item}/>
            )
        }

        if (item.location.toLowerCase().includes(searchPhrase.toLowerCase().trim())) {
            return (
                <Item itemData={item}/>
            )
        }

        if (item.description.toLowerCase().includes(searchPhrase.toLowerCase().trim())) {
            return (
                <Item itemData={item}/>
            )
        }

        if (item.contact.toLowerCase().includes(searchPhrase.toLowerCase().trim())) {
            return (
                <Item itemData={item}/>
            )
        }
    }

    return (
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.container}
                />
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default VendorList;