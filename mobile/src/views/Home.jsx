import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Hello from '../components/Example';

const Home = () => {
  return (
    <View style={styles.container}>
      <Hello style={styles.welcome} />
    </View>
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

export default Home;
