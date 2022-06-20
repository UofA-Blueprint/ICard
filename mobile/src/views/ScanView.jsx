import React from 'react';
import {View, StyleSheet} from 'react-native';

import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import CustomBottomSheet from '../components/CustomBottomSheet';

const HOC = gestureHandlerRootHOC(() => <CustomBottomSheet />);

const ScanView = () => {
  return (
    <View style={styles.container}>
      <HOC />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScanView;
