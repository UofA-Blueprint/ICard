/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.welcome}>Home Page</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  welcome: {
    color: 'aquamarine',
  },
});

export default App;
