import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from '../components/share/Header';
import {globalStyleSheet} from '../components/share/Theme';

const RegistrationView = () => {
  return (
    <View style={globalStyleSheet.container}>
      <Header />
      <View style={[styles.bodyContainer]}>
        <Text>My ICard</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    justifyContent: 'center',
  },
});

export default RegistrationView;
