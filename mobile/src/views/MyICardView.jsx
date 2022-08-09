import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Header from '../components/shared/Header';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {colors, globalStyleSheet} from '../utilites/Theme';

const MyICardView = props => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.bodyContainer}>
        <View style={styles.card}>
          <Image
            source={require('../../assets/avatar-unknown.png')}
            style={styles.avatar}
          />
          <Text style={styles.userName}>Name</Text>
          <Text style={styles.baseText}>ISAF Status</Text>
          <Text style={styles.userStatus}>Status</Text>
        </View>
        <Text style={styles.flexText}>Last Updated: 3 years ago</Text>
        <Text style={styles.flexText}>
          Click
          <MaterialCommunityIcons name="refresh" size={24} color="black" />
          for more updated info.
        </Text>
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
    paddingVertical: 64,
    flex: 1,
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
  userName: {
    flex: 2,
    fontWeight: 'bold',
    fontSize: 36,
  },
  userStatus: {flex: 1},
  flexText: {
    flex: 1,
  },
});

export default MyICardView;
