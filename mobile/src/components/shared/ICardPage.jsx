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
import FancyBox from './FancyBox';

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
        <ImageBackground source = {require('../../../assets/Background.png') } resizeMode="cover" style = {styles.backgroundImage}>
        
        {props.status == 'Unlinked' ? (
            <FancyBox style = {styles.box}>
              <View style = {styles.alertContainer}>
                <View style = {styles.linkIcon}>
                  <MaterialCommunityIcons  name='link-variant' size = {20} color = {colors.white}/>
                </View>
                <View style = {{height: '100%', width:'95%', flexWrap:'wrap', alignItems:'center', justifyContent:'center'}}>  
                  <Text style = {styles.alertText}>Link to your University of Alberta email to gain access to My ICard</Text>
                
                </View>
              </View>
            </FancyBox>
          ):(<></>)}
          {props.status == 'inactive' ? (
            <FancyBox style = {{...styles.box}}>
              <View style = {styles.alertContainer}>
                <View style = {{...styles.linkIcon, backgroundColor: colors.red}}>
                  <MaterialCommunityIcons  name='close-thick' size = {20} color = {colors.white}/>
                </View>  
                <View style = {{height: '100%', width:'95%', flexWrap:'wrap', alignItems:'center', justifyContent:'center'}}>
                  <Text style = {styles.alertText}>Your account is unverified. Please go through the verification process</Text>
                </View>
              </View>
            </FancyBox>
          ) : (<></>)}
          
        
        <Image
            source={
                require('../../../assets/squiggly-lines.png')
            }
            style={{...styles.lines, backgroundColor: props.status == 'active' ? 2 : 1}}
        />

        <View style={{...styles.card, backgroundColor: props.status == 'active' ? colors.primary : colors.white, borderBottomColor: statusColors[props.status], borderTopColor: statusColors[props.status], borderBottomWidth: 8, borderTopWidth: 8 }}>
            <Image source={user != null ? {uri:user.picture } : require('../../../assets/avatar-unknown.png')} style={{...styles.avatar, borderColor: statusColors[props.status]}} />
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
        {props.status == 'inactive' ? (
          <FancyBox style = {{...styles.box, zIndex: 100, width:'60%'}}>
            <TouchableOpacity 
                onPress = {props.verify}
                style={{width: '100%', padding:15, height: '100%', alignItems:'center', justifyContent:'center'}}
                activeOpacity = {0.5} >
              <Text style = {styles.verifyTxt}>Verify Account</Text>
            </TouchableOpacity>
          </FancyBox>
        ):(<></>)}
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
        <Image
        source={require('../../../assets/ISA-logo.png')}
        style={styles.logo}
        />
        </ImageBackground>
        </View>
        
         
    </View>
    );
    };

   


const styles = StyleSheet.create({
  container: {
    ...globalStyleSheet.container,
    flex: 1,
    width: '100%',
  },
  linkIcon: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
    backgroundColor: colors.darkGray,
    
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: "flex-start",
    alignItems: "center",
    
    
  },
  bodyContainer: {
    flex: 1,
    width: '100%',
    ...globalStyleSheet.container,
   
    
  },
  box: {
    marginTop: 10,
    backgroundColor: colors.lightGray,
    
  },
  alertContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15
    
  },
  card: {
    ...globalStyleSheet.container,
    flex: 0,
    height: '50%',
    backgroundColor: colors.white,
    borderLeftColor: 'white',
    borderRightColor: 'white',
    width: '90%', 
    borderRadius: 30,
    paddingTop: 48,
    elevation: 10,
    zIndex: 1,
    marginTop: 60,
  },
  signInButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.primary,
    marginTop: 10,
    zIndex: 15
  },
  promptMessage: {
    color: colors.primary,
  },
  avatar: {
    width: 128,
    height: 128,
    borderWidth: 3,
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
  verifyTxt: {
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    fontSize: 16,
    color: colors.darkGray,
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
    opacity: 0.2
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
    top: 165,
    right: 50,
  },
  ISAFStatus: {
    textTransform: 'uppercase',
    
  },
  statusHeader: {
    color: colors.black,
  },
  alertText: {
    textAlign: 'center',
    color: colors.darkGray,
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
  }
});

export default MyICardPage;