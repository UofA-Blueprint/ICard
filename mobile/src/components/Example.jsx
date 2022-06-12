import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Hello = () => {
  return <Text style={styles.text}>Tôi đang code!</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'violet',
  },
});

export default Hello;
