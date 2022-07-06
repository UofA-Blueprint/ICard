import React from 'react';

import {StyleSheet, View} from 'react-native';

import {colors} from '../../utilites/Theme';

const CustomScanIcon = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.borderBox, styles.topLeft]}></View>
      <View style={[styles.borderBox, styles.topRight]}></View>
      <View style={[styles.borderBox, styles.bottomLeft]}></View>
      <View style={[styles.borderBox, styles.bottomRight]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
  },
  borderBox: {
    position: 'absolute',
    borderColor: colors.primary,
    width: 40,
    height: 40,
  },
  topLeft: {
    borderTopWidth: 3,
    borderLeftWidth: 3,
    top: 0,
    left: 0,
  },
  topRight: {
    borderTopWidth: 3,
    borderRightWidth: 3,
    top: 0,
    right: 0,
  },
  bottomLeft: {
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    bottom: 0,
    left: 0,
  },
  bottomRight: {
    borderBottomWidth: 3,
    borderRightWidth: 3,
    bottom: 0,
    right: 0,
  },
});

export default CustomScanIcon;
