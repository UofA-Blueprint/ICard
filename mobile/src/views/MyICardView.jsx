import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Header from '../components/shared/Header';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import {colors, globalStyleSheet} from '../utilites/Theme';

const MyICardView = props => {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.bodyContainer}>
        <Image
          source={require('../../assets/squiggly-lines.png')}
          style={styles.lines}
        />
        <MaterialCommunityIcons.Button
          name="refresh"
          backgroundColor="#3b5998"></MaterialCommunityIcons.Button>
        <View style={styles.card}>
          <Image
            source={require('../../assets/avatar-unknown.png')}
            style={styles.avatar}
          />
          <Text style={[styles.userName, styles.subHeader]}>Name</Text>
          <View style={styles.statusView}>
            <Text>ISAF Status</Text>
            <Text style={styles.subHeader}>Status</Text>
          </View>
        </View>
        <View style={styles.flexText}>
          <Text style={styles.baseText}>Last Updated: 3 years ago</Text>
          <Text style={[styles.refreshPrompt, styles.baseText]}>
            Click
            <MaterialCommunityIcons name="refresh" size={24} color="black" />
            for more updated info.
          </Text>
        </View>
      </View>
      <Image
        source={require('../../assets/ISA-logo.png')}
        style={styles.logo}
      />
      <Image
        source={require('../../assets/squiggly-lines.png')}
        style={styles.linesTop}
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
    paddingTop: 96,
  },
  card: {
    ...globalStyleSheet.container,
    borderWidth: 1,
    width: '105%',
    borderRadius: 30,
    flex: 4,
    paddingVertical: 24,
    elevation: 10,
  },
  avatar: {
    width: 128,
    height: 128,
    borderWidth: 1,
    borderColor: colors.darkGray,
    borderRadius: 64,
    position: 'absolute',
    top: -64,
    zIndex: 100,
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
  },
  userName: {
    flex: 1,
    textAlignVertical: 'center',
  },
  logo: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    opacity: 0.2,
  },
  lines: {
    position: 'absolute',
    bottom: 0,
    opacity: 1,
  },
  linesTop: {
    position: 'absolute',
    top: -100,
    left: -20,
    opacity: 1,
  },
});

export default MyICardView;
