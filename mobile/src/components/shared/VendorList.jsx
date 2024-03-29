import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import VendorCard from './VendorCard';
import {colors} from '../utilites/Theme';

const Item = ({itemData}) => (
    <VendorCard
        key={itemData.id}
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
        console.log("ITEM", item)
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
          showsVerticalScrollIndicator={true}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
                contentContainerStyle={styles.contentContainer}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
})

export default VendorList;