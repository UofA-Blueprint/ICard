import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import VendorCard from './VendorCard';
import {colors} from '../utilites/Theme';

const Item = ({itemData}) => (
    <VendorCard
      vendorName={itemData.vendorName}
      location={itemData.location}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 75c0bec (Fixed conflict)
      discount={itemData.discount}
      vendorImage={itemData.image}
      description={itemData.description}
=======
      cardDesc={itemData.cardDesc}
      discount={itemData.discount}
      vendorImage={itemData.image}
      description={itemData.popupDesc}
<<<<<<< HEAD
>>>>>>> 57731ef (need to fix styling)
=======
      discount={itemData.discount}
      vendorImage={itemData.image}
      description={itemData.description}
>>>>>>> b95fceb (matched styling with figma)
=======
>>>>>>> 7fd9c6c (Fixed conflict)
>>>>>>> 75c0bec (Fixed conflict)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 75c0bec (Fixed conflict)
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
<<<<<<< HEAD
>>>>>>> 57731ef (need to fix styling)
=======
        if (item.description.toLowerCase().includes(searchPhrase.toLowerCase().trim())) {
>>>>>>> b95fceb (matched styling with figma)
=======
>>>>>>> 7fd9c6c (Fixed conflict)
>>>>>>> 75c0bec (Fixed conflict)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 75c0bec (Fixed conflict)
=======
        <View sytle={{
            margin: 10,
            height: "85%",
            width: "100%",
        }}>
            <View
            >
<<<<<<< HEAD
>>>>>>> 57731ef (need to fix styling)
=======
>>>>>>> b95fceb (matched styling with figma)
=======
>>>>>>> 7fd9c6c (Fixed conflict)
>>>>>>> 75c0bec (Fixed conflict)
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 75c0bec (Fixed conflict)
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
<<<<<<< HEAD
=======
                    contentContainerStyle={styles.container}
>>>>>>> b95fceb (matched styling with figma)
                />
    )
}

<<<<<<< HEAD
>>>>>>> 57731ef (need to fix styling)
=======
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

>>>>>>> b95fceb (matched styling with figma)
=======
                />

            </View>
        </View>
    )
}

>>>>>>> 7fd9c6c (Fixed conflict)
>>>>>>> 75c0bec (Fixed conflict)
export default VendorList;