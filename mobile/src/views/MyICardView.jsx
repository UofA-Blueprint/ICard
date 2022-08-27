import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Header from '../components/shared/Header';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import {colors, globalStyleSheet} from '../utilites/Theme';

import user from '../data/userMockData';

const statusColors = {
  active: colors.lightGreen,
  inactive: colors.red,
  stale: colors.darkGray,
  pending: colors.yellow,
};

const MyICardView = () => {
  let count = 0;
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Image
        source={
          user.status == 'active'
            ? require('../../assets/squiggly-lines-light.png')
            : require('../../assets/squiggly-lines.png')
        }
        style={styles.linesTop}
      />
      <TouchableOpacity
        style={styles.refreshButton}
        onPress={() => {
          count = count + 1;
          console.log('Pressed Lmao!', count);
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
          <Image source={{uri: user.profilePic}} style={styles.avatar} />
          <Text style={[styles.userName, styles.subHeader]}>{user.name}</Text>
          <View style={styles.statusView}>
            <Text style={styles.statusHeader}>ISAF Status</Text>
            <Text style={[styles.subHeader, styles.ISAFStatus]}>
              {user.status}
            </Text>
          </View>
        </View>
        {user.status != 'active' && user.status != 'inactive' ? (
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
    backgroundColor: user.status == 'active' ? colors.primary : colors.white,
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
    backgroundColor: user.status == 'active' ? colors.primary : colors.white,
    zIndex: 10,
  },
  userName: {
    flex: 1,
    textAlignVertical: 'center',
    color: user.status == 'active' ? colors.lightGreen : colors.black,
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
    zIndex: user.status == 'active' ? 2 : 1,
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
    color: statusColors[user.status],
  },
  statusHeader: {
    color: user.status == 'active' ? colors.lightGray : colors.black,
  },
});

export default MyICardView;
