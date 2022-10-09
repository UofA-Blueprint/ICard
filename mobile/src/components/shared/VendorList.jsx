import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import VendorCard from './VendorCard';
import {colors} from '../utilites/Theme';

const Item = ({itemData}) => (
    <VendorCard
      vendorName={itemData.vendorName}
      location={itemData.location}
<<<<<<< HEAD
      discount={itemData.discount}
      vendorImage={itemData.image}
      description={itemData.description}
=======
      cardDesc={itemData.cardDesc}
      discount={itemData.discount}
      vendorImage={itemData.image}
      description={itemData.popupDesc}
>>>>>>> 57731ef (need to fix styling)
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

<<<<<<< HEAD
        if (item.description.toLowerCase().includes(searchPhrase.toLowerCase().trim())) {
=======
        if (item.cardDesc.toLowerCase().includes(searchPhrase.toLowerCase().trim())) {
            return (
                <Item itemData={item}/>
            )
        }

        if (item.discount.toLowerCase().includes(searchPhrase.toLowerCase().trim())) {
            return (
                <Item itemData={item}/>
            )
        }

        if (item.popupDesc.toLowerCase().includes(searchPhrase.toLowerCase().trim())) {
>>>>>>> 57731ef (need to fix styling)
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
<<<<<<< HEAD
=======
        <View sytle={{
            margin: 10,
            height: "85%",
            width: "100%",
        }}>
            <View
            >
>>>>>>> 57731ef (need to fix styling)
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
<<<<<<< HEAD
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

=======
                />

            </View>
        </View>
    )
}

>>>>>>> 57731ef (need to fix styling)
export default VendorList;