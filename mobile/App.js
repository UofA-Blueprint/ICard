/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Intro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hello Mom!</Text>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView>
      <Intro />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  welcome: {
    color: 'violet',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export default App;
