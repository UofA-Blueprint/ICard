import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import VendorCard from './VendorCard';
import {colors} from '../utilites/Theme';

const Item = ({itemData}) => (
    <VendorCard
      vendorName={itemData.name}
      location={itemData.address}
      discount={itemData.discount}
      vendorImage={itemData.image}
      description={itemData.description}
      contact={itemData.phone_number}
    />
  );

const VendorList = ({searchPhrase, setClicked, data}) => {
    const renderItem = ({item}) => {
        
        if (searchPhrase === '') {
            return (
                <Item itemData={item}/>
            )
        }
        
        if (item.name.toLowerCase().includes(searchPhrase.toLowerCase().trim())) {
            return (
                <Item itemData={item}/>
            )
        }

        if (item.address.toLowerCase().includes(searchPhrase.toLowerCase().trim())) {
            return (
                <Item itemData={item}/>
            )
        }

        if (item.description.toLowerCase().includes(searchPhrase.toLowerCase().trim())) {
            return (
                <Item itemData={item}/>
            )
        }

        if (item.phone_number.toLowerCase().includes(searchPhrase.toLowerCase().trim())) {
            return (
                <Item itemData={item}/>
            )
        } 
    }

    return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.container}
                />
            </View>
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