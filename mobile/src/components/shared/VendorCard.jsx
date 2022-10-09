import React from 'react';
import {View, Text, StyleSheet, Image, Modal} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {colors} from '../../utilites/Theme';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons'; 

const VendorCard = ({vendorName, location, description, vendorImage, cardDesc, discount, contact}) => {
    const [popupOpen, setPopupOpen] = useState(false);
    
    return (
        <View>
            <Modal visible={popupOpen} transparent={true} animationType='slide' onRequestClose={() => setPopupOpen(false)}>
                <Pressable onPress={() => setPopupOpen(false)} style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: '#00000000'
                }}>
                    <Pressable onPress={() => {}} style={styles.modalView}>
                        <Pressable onPress={() => setPopupOpen(false)}>
                            <Feather name='chevron-down' size={50} color='#88888888' />
                        </Pressable>

                        <Image style={styles.popupLogo} source={{uri: vendorImage}}></Image>

                        <View style={{flexShrink: 2, paddingHorizontal: 10}}>
                            <Text style={styles.popUpTitle}>
                            {vendorName}
                            </Text>
                        </View>

                        <Text style={popUpStyles.location}>
                            {location}
                        </Text>
                            

                        <Text style={popUpStyles.description}>
                            {description}
                        </Text>

                        <Text style={popUpStyles.contact}>
                            Point of contact: {contact}
                        </Text>

                      </Pressable>
                </Pressable>
            </Modal>

            <Pressable style={styles.container} onPress={() => setPopupOpen(true)}>
                <Image style={styles.logo} source={{uri: vendorImage}}></Image>

                <View style={{flexShrink: 2}}>

                    <Text style={styles.title}>
                    {vendorName}
                    </Text>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={styles.discount}>
                            {discount}
                        </Text>

                        <Text style={styles.text}>
                            {cardDesc}
                        </Text>
                    </View>

                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10
    },

    popUpTitle: {
        color: colors.primary,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10
    },

    discount: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: colors.black,
        fontWeight: 'bold',
        paddingHorizontal: 5,
        fontSize: 20,
        width: 100,
        flexShrink: 1,
    },

    text: {
        color: colors.black,
        fontSize: 10,
        paddingHorizontal: 5,
        flexShrink: 1
    },

    logo: {
        flexBasis: 75,
        flexShrink: 0.5,
        aspectRatio: 1.5/1,
        resizeMode: 'contain'
    },

    popupLogo: {
        flexBasis: 100,
        flexShrink: 0.5,
        aspectRatio: 1.5/1,
        resizeMode: 'contain'
    },

    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 10,
        marginVertical: 12,
        marginHorizontal: 20,
        width: "100%"
    },

    description: {
        paddingTop: 10,
    },

    modalView: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderColor: colors.primary,
        borderRadius: 20,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingBottom: 25,
        paddingTop: 5,
        width: '100%',
        height: '50%'
    }
});

const popUpStyles = StyleSheet.create({
    popUpTitle: {
        color: colors.primary,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10
    },

    popupLogo: {
        flexBasis: 100,
        flexShrink: 0.5,
        aspectRatio: 1.5/1,
        resizeMode: 'contain'
    },

    location: {
        color: colors.primary,
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10
    },

    description: {
        textAlign:'center',
        fontWeight: '300',
        fontSize: 20,
        width: 250,
        marginBottom: 10
    },

    contact: {
        textAlign:'center',
        fontWeight: '300',
        fontSize: 15,
        width: 250,
        marginBottom: 10
    }

})

export default VendorCard;
