import React from 'react';
import {View, ImageBackground, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Header from '../shared/Header';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import {colors, globalStyleSheet} from '../../utilites/Theme';

const statusColors = {
    active: colors.lightGreen,
    inactive: colors.red,
    stale: colors.darkGray,
    pending: colors.yellow,
    Unlinked: colors.darkGray
  };


const MyICardPage = (props) => {

    let [fontsLoaded] = useFonts({
        Poppins_600SemiBold,
        Poppins_700Bold,
      });
      if (!fontsLoaded) {
        return <Text>Loading...</Text>;
      }

    const {user} = props;

    return (
    <View style={styles.container}>
        <ImageBackground source = {require('../../../assets/Background.png') } resizeMode="cover" style = {styles.backgroundImage}>

        <Image
        source={
            require('../../../assets/squiggly-lines.png')
        }
        style={styles.linesTop}
        />
        <TouchableOpacity
        style={styles.refreshButton}
        onPress={() => {
            console.log('Pressed!');
        }}>
        <MaterialCommunityIcons
            name="refresh"
            size={36}
            color={colors.darkGray}
        />
        </TouchableOpacity>
        <Header />
        <View style={styles.bodyContainer}>
        <Image
            source={
                require('../../../assets/squiggly-lines.png')
            }
            style={{...styles.lines, backgroundColor: props.status == 'active' ? 2 : 1}}
        />

        <View style={{...styles.card, backgroundColor: props.status == 'active' ? colors.primary : colors.white}}>
            <Image source={user != null ? {uri:user.picture } : require('../../../assets/avatar-unknown.png')} style={styles.avatar} />
            <Text style={[{...styles.userName, color: props.status == 'active' ? colors.lightGreen : colors.black}, styles.subHeader]}>{user != null ? user.name : 'N/A'}</Text>
            <View style={{...styles.statusView, backgroundColor: props.status == 'active' ? colors.primary : colors.white }}>
            <Text style={{...styles.statusHeader, color: props.status == 'active' ? colors.lightGray : colors.black}}>ISAF Status</Text>
            <Text style={[styles.subHeader, {...styles.ISAFStatus, color: statusColors[props.status]}]}>
                {props.status}
            </Text>
            </View>
        </View>
        {props.status == 'Unlinked' ? (
            props.children
        ): (
            <></>
        )}
        {props.status != 'active' && props.status != 'inactive' ? (
            <View style={styles.flexText}>
            <Text style={styles.baseText}>Last Updated: 3 years ago</Text>
            <Text style={styles.baseText}>
                Click
                <MaterialCommunityIcons name="refresh" size={24} color="black" />
                for more updated info.
            </Text>
            </View>
        ) : (
            <></>
        )}
        </View>
        <Image
        source={require('../../../assets/ISA-logo.png')}
        style={styles.logo}
        />
        </ImageBackground> 
    </View>
    );
    };

   


const styles = StyleSheet.create({
  container: {
    ...globalStyleSheet.container,
    flex: 1,
    width: '100%',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    
  },
  bodyContainer: {
    flex: 1,
    width: '100%',
    ...globalStyleSheet.container,
    justifyContent: 'flex-start',
    paddingTop: 96,
  },
  card: {
    ...globalStyleSheet.container,
    flex: 0,
    height: '50%',
    backgroundColor: colors.white,//finalStatus == 'active' ? colors.primary : colors.white,
    borderWidth: 1,
    width: '90%', 
    borderRadius: 30,
    paddingTop: 48,
    elevation: 10,
    zIndex: 1,
  },
  avatar: {
    width: 128,
    height: 128,
    borderWidth: 1,
    borderColor: colors.darkGray,
    borderRadius: 64,
    position: 'absolute',
    top: -64,
  },
  subHeader: {
    fontSize: 26,
    fontFamily: 'Poppins_700Bold',
  },
  flexText: {
    flex: 3,
    paddingVertical: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  baseText: {
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
  },
  statusView: {
    ...globalStyleSheet.container,
    backgroundColor: colors.white,
    zIndex: 10,
  },
  userName: {
    flex: 1,
    textAlignVertical: 'center',
    color: 'black',
  },
  logo: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    opacity: 0.2,
  },
  lines: {
    position: 'absolute',
    bottom: -64,
    opacity: 1,
    zIndex: 1,
  },
  linesTop: {
    position: 'absolute',
    top: -100,
    left: -20,
    zIndex: 1,
  },
  refreshButton: {
    padding: 4,
    backgroundColor: colors.lightGray,
    borderWidth: 1,
    borderColor: colors.darkGray,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 36,
    zIndex: 15,
    position: 'absolute',
    top: 100,
    right: 50,
  },
  ISAFStatus: {
    textTransform: 'uppercase',
    
  },
  statusHeader: {
    color: colors.black,
  },
});

export default MyICardPage;