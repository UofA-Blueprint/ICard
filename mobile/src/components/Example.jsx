import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Hello = () => {
  return <Text style={styles.text}>Hello Mom!</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'violet',
  },
});

export default Hello;
