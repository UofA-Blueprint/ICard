import React from 'react';
import {View} from 'react-native';

import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import CustomBottomSheet from '../components/scan/CustomBottomSheet';

import {globalStyleSheet} from '../components/shared/Theme';

const HOC = gestureHandlerRootHOC(() => <CustomBottomSheet />);

const ScanView = () => {
  return (
    <View style={{...globalStyleSheet.fullScreen}}>
      <HOC />
    </View>
  );
};

export default ScanView;
