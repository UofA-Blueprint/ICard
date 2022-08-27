import React from 'react';
import { render } from 'react-dom';
import {View, Text, StyleSheet, Image, Dimensions, Modal, Button} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {colors, globalStyleSheet} from '../../utilites/Theme';
import { useState } from 'react';

const VendorCard = ({vendorName, location, description, vendorImage, cardDesc, discount, contact}) => {
    const [popupOpen, setPopupOpen] = useState(false);
    
    return (
        <View>
            <Modal visible={popupOpen} transparent={true} animationType='slide' onRequestClose={() => setPopupOpen(false)}>
                <Pressable onPress={() => setPopupOpen(false)} style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#00000000'
                }}>
                    <Pressable onPress={() => {}} style={styles.modalView}>
                        <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingHorizontal: 10,
                                paddingVertical: 5
                        }}>
                            <View style={{flexShrink: 2, paddingHorizontal: 10}}>
                                <Text style={styles.title}>
                                {vendorName}
                                </Text>
                            </View>

                            <Image style={styles.logo} source={{uri: vendorImage}}></Image>
                            
                        </View>

                        <Text style={{
                            textAlign:'center',
                            fontWeight: 'bold',
                            fontSize: 12,
                            width: 250,
                            marginBottom: 10
                        }}>
                            {description}
                        </Text>

                        <Text style={styles.text}>
                            Location: {location}
                        </Text>

                        <Text style={styles.text}>
                            Contact: {contact}
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

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    title: {
        color: colors.primary,
        fontSize: 20,
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
        width: 0.8*win.width
    },

    description: {
        paddingTop: 10,
    },

    modalView: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.primary,
        borderRadius: 20,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 5
    }
});

export default VendorCard;
