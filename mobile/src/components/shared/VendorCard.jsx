import React from 'react';
import {View, Text, StyleSheet, Image, Modal, Dimensions} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {colors} from '../../utilites/Theme';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';

const VendorCard = ({vendorName, location, description, vendorImage, contact}) => {
    const [popupOpen, setPopupOpen] = useState(false);
    
    return (
        <View>
            <Modal visible={popupOpen} transparent={true} animationType='slide' onRequestClose={() => setPopupOpen(false)}>
                <Pressable onPress={() => setPopupOpen(false)} style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: '#0000000'
                }}>
                    <Pressable onPress={() => {}} style={popUpStyles.modalView}>
                        <Pressable onPress={() => setPopupOpen(false)}>
                            <Feather name='chevron-down' size={50} color='#DDDADA' />
                        </Pressable>
                        <ScrollView>
                            <View onStartShouldSetResponder={() => true} style={popUpStyles.modalContentContainer}>
                                <Image style={popUpStyles.logo} source={{uri: vendorImage}}></Image>

                                <View style={{flexShrink: 2, paddingHorizontal: 10}}>
                                    <Text style={popUpStyles.title}>
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
                                    Point of contact:{contact}
                                </Text>
                            </View>
                        </ScrollView>

                      </Pressable>
                </Pressable>
            </Modal>

            <Pressable style={styles.cardContainer} onPress={() => setPopupOpen(true)}>
                <Image source={{uri: vendorImage}} style={styles.logoImage}></Image>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        {vendorName}
                    </Text>

                    <Text style={styles.location}>
                        {location}
                    </Text>

                    <Text style={styles.description}>
                        {description}
                    </Text>

                </View>
            </Pressable>
        </View>
    );
};

const win = Dimensions.get('window'); 

const styles = StyleSheet.create({
   cardContainer: {
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 15,
      marginVertical: 12,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: win.width - 50,
      minHeight: win.height/5,
      backgroundColor: 'white',
      shadowColor: '#888888',
      shadowOpacity: 0.7,
      shadowRadius: 2,  
      shadowOffset: {width: 0, height: 5},
      elevation: 1
    },

    textContainer: {
        flexShrink: 1,
        display: 'flex',
        paddingLeft: 10
    },

    logoImage: {
        flexBasis: 100,
        flexShrink: 0,
        aspectRatio: 1.5/1,
        resizeMode: 'contain',
    },

    title: {
        fontWeight: 'bold',
        fontSize: 25,
        color: colors.primary
    },

    location: {
        fontWeight: '300',
        fontSize: 20,
        color: colors.primary
    },

    description: {
        fontWeight: '300',
        fontSize: 15,
        color: colors.darkGray
    }
  })

const popUpStyles = StyleSheet.create({
    modalView: {
        backgroundColor: colors.white,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingBottom: 25,
        paddingTop: 5,
        width: win.width,
        height: win.height/2,
        shadowOpacity: 0.7,
        shadowRadius: 2,  
        shadowOffset: {width: 0, height: -2},
    },

    modalContentContainer: {
        display: 'flex',
        alignItems: 'center',
    },

    title: {
        color: colors.primary,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10
    },

    logo: {
        height: 100,
        flexShrink: 0.5,
        aspectRatio: 1.5/1,
        resizeMode: 'contain'
    },

    location: {
        color: colors.primary,
        fontSize: 16,
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
