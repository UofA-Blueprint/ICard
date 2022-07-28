import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

import Header from '../components/shared/Header';
import {colors, globalStyleSheet} from '../utilites/Theme';

const RegistrationView = () => {
  return (
    <View style={globalStyleSheet.container}>
      <Header />
      <View style={[styles.bodyContainer]}>
        <TouchableOpacity onPress={() => {}} style={styles.signInButton}>
          <FontAwesome5 name="google" size={16} color={colors.primary} />
          <Text style={styles.promptMessage}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    ...globalStyleSheet.fullScreen,
    justifyContent: 'center',
  },
  signInButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.primary,
  },
  promptMessage: {
    color: colors.primary,
  },
});

export default RegistrationView;
