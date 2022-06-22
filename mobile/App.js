/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeView from './src/views/HomeView';

const App = () => {
  return (
    <SafeAreaProvider>
      <HomeView></HomeView>
    </SafeAreaProvider>
  );
};

export default App;
