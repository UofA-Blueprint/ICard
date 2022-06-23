import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from '../components/share/Header';

const RegistrationView = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.bodyContainer}>
        <Text>My ICard</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'white',
  },
  bodyContainer: {
    justifyContent: 'center',
  },
});

export default RegistrationView;
