/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ScanView from './src/views/ScanView';

const App = () => {
  return (
    <SafeAreaProvider>
      <ScanView></ScanView>
    </SafeAreaProvider>
  );
};

export default App;
