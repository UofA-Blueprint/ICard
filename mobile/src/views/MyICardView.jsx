import React, {useContext} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity, ImageBackground} from 'react-native';

import Header from '../components/shared/Header';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import {colors, globalStyleSheet} from '../utilites/Theme';

import AuthContext from '../context/AuthContext';

let finalStatus = 'pending';

const statusColors = {
  active: colors.lightGreen,
  inactive: colors.red,
  stale: colors.darkGray,
  pending: colors.yellow,
};

const MyICardView = () => {
  const {user, _} = useContext(AuthContext);
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  if (user == null) return <></>;

  if (user.verify) finalStatus = 'inactive';
  if (user.isaf_status) finalStatus = 'active';

  return (
    <View style={styles.container}>
      <Image
        source={
          finalStatus == 'active'
            ? require('../../assets/squiggly-lines-light.png')
            : require('../../assets/squiggly-lines.png')
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
            user.status == 'active'
              ? require('../../assets/squiggly-lines-light.png')
              : require('../../assets/squiggly-lines.png')
          }
          style={styles.lines}
        />

        <View style={styles.card}>
          <Image source={{uri: user.picture}} style={styles.avatar} />
          <Text style={[styles.userName, styles.subHeader]}>{user.name}</Text>
          <View style={styles.statusView}>
            <Text style={styles.statusHeader}>ISAF Status</Text>
            <Text style={[styles.subHeader, styles.ISAFStatus]}>
              {finalStatus}
            </Text>
          </View>
        </View>
        {finalStatus != 'active' && finalStatus != 'inactive' ? (
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
        source={require('../../assets/ISA-logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyleSheet.container,
    flex: 1,
    width: '100%',
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
    backgroundColor: finalStatus == 'active' ? colors.primary : colors.white,
    borderWidth: 1,
    width: '105%',
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
    backgroundColor: finalStatus == 'active' ? colors.primary : colors.white,
    zIndex: 10,
  },
  userName: {
    flex: 1,
    textAlignVertical: 'center',
    color: finalStatus == 'active' ? colors.lightGreen : colors.black,
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
    zIndex: finalStatus == 'active' ? 2 : 1,
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
    color: statusColors[finalStatus],
  },
  statusHeader: {
    color: finalStatus == 'active' ? colors.lightGray : colors.black,
  },
});

export default MyICardView;
