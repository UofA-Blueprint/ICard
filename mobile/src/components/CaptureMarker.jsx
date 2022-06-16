import React from 'react';

import {StyleSheet, View} from 'react-native';

const CaptureMarker = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.borderCorner, styles.topLeftEdge]}></View>
      <View style={[styles.borderCorner, styles.topRightEdge]}></View>
      <View style={[styles.borderCorner, styles.bottomLeftEdge]}></View>
      <View style={[styles.borderCorner, styles.bottomRightEdge]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  borderCorner: {
    position: 'absolute',
    height: 50,
    width: 50,
    borderColor: '#2E6933',
  },
  topLeftEdge: {
    top: -100,
    left: -100,
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderTopLeftRadius: 10,
  },
  bottomLeftEdge: {
    top: 50,
    left: -100,
    borderLeftWidth: 3,
    borderBottomWidth: 3,
    borderBottomLeftRadius: 10,
  },
  topRightEdge: {
    top: -100,
    left: 50,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderTopRightRadius: 10,
  },
  bottomRightEdge: {
    top: 50,
    left: 50,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderBottomRightRadius: 10,
  },
});

export default CaptureMarker;
