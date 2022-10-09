import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import {View, Text, StyleSheet, Image, Modal, Dimensions} from 'react-native';
=======
import {View, Text, StyleSheet, Image, Modal} from 'react-native';
>>>>>>> 57731ef (need to fix styling)
=======
import {View, Text, StyleSheet, Image, Modal, Dimensions} from 'react-native';
>>>>>>> b95fceb (matched styling with figma)
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {colors} from '../../utilites/Theme';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons'; 
<<<<<<< HEAD
<<<<<<< HEAD
import { ScrollView } from 'react-native-gesture-handler';
=======
>>>>>>> 57731ef (need to fix styling)
=======
import { ScrollView } from 'react-native-gesture-handler';
>>>>>>> b95fceb (matched styling with figma)

const VendorCard = ({vendorName, location, description, vendorImage, contact}) => {
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
<<<<<<< HEAD
<<<<<<< HEAD
                    <Pressable onPress={() => {}} style={popUpStyles.modalView}>
                        <Pressable onPress={() => setPopupOpen(false)}>
                            <Feather name='chevron-down' size={50} color='#88888888' />
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
                                    Point of contact: {contact}
                                </Text>
                            </View>
                        </ScrollView>
=======
                    <Pressable onPress={() => {}} style={styles.modalView}>
=======
                    <Pressable onPress={() => {}} style={popUpStyles.modalView}>
>>>>>>> b95fceb (matched styling with figma)
                        <Pressable onPress={() => setPopupOpen(false)}>
                            <Feather name='chevron-down' size={50} color='#88888888' />
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

<<<<<<< HEAD
                        <Text style={popUpStyles.location}>
                            {location}
                        </Text>
                            

                        <Text style={popUpStyles.description}>
                            {description}
                        </Text>

                        <Text style={popUpStyles.contact}>
                            Point of contact: {contact}
                        </Text>
>>>>>>> 57731ef (need to fix styling)
=======
                                <Text style={popUpStyles.contact}>
                                    Point of contact: {contact}
                                </Text>
                            </View>
                        </ScrollView>
>>>>>>> b95fceb (matched styling with figma)

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

<<<<<<< HEAD
<<<<<<< HEAD
const win = Dimensions.get('window'); 

=======
>>>>>>> 57731ef (need to fix styling)
=======
const win = Dimensions.get('window'); 

>>>>>>> b95fceb (matched styling with figma)
const styles = StyleSheet.create({
   cardContainer: {
      paddingVertical: 10,
      paddingHorizontal: 16,
<<<<<<< HEAD
=======
      borderWidth: 1,
      borderColor: colors.primary,
>>>>>>> b95fceb (matched styling with figma)
      borderRadius: 10,
      marginVertical: 12,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: win.width - 40,
      minHeight: win.height/5,
<<<<<<< HEAD
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
    }
  })

const popUpStyles = StyleSheet.create({
    modalView: {
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 20,
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

<<<<<<< HEAD
=======
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

>>>>>>> 57731ef (need to fix styling)
    logo: {
        height: 100,
        flexShrink: 0.5,
        aspectRatio: 1.5/1,
        resizeMode: 'contain'
    },

<<<<<<< HEAD
    location: {
        color: colors.primary,
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10
=======
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
>>>>>>> 57731ef (need to fix styling)
    },

    description: {
        textAlign:'center',
        fontWeight: '300',
        fontSize: 20,
        width: 250,
        marginBottom: 10
    },

<<<<<<< HEAD
    contact: {
        textAlign:'center',
        fontWeight: '300',
        fontSize: 15,
        width: 250,
        marginBottom: 10
=======
=======
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
    }
  })

const popUpStyles = StyleSheet.create({
>>>>>>> b95fceb (matched styling with figma)
    modalView: {
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        borderColor: colors.primary,
        borderRadius: 20,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingBottom: 25,
        paddingTop: 5,
<<<<<<< HEAD
        width: '100%',
        height: '50%'
>>>>>>> 57731ef (need to fix styling)
    }
})
=======
        width: win.width,
        height: win.height/2
    },
>>>>>>> b95fceb (matched styling with figma)

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
