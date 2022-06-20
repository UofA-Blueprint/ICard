/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Scan from './src/views/Scan.jsx';

const App = () => {
  return (
    <SafeAreaProvider>
      <Scan />
    </SafeAreaProvider>
  );
};

export default App;
