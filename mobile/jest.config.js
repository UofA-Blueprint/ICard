module.exports = {
  preset: 'jest-expo',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native' +
      '|react-native' +
      '|react-navigation-tabs' +
      '|react-native-splash-screen' +
      '|react-native-screens' +
      '|react-native-reanimated' +
      '|react-native-gesture-handler' +
      '|react-native-redash' +
      '|react-native-permissions' +
      '|react-native-camera' +
      '|react-native-vector-icons' +
      '|react-native-vision-camera' +
      '|@react-navigation' +
      '|expo-barcode-scanner' +
      '|@expo' +
      '|expo' +
      '|expo-modules-core' +
      '|expo-font' +
      '|jest-runtime' +
      '|expo-asset' +
      '|expo-constants' +
      ')/)',
  ],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  setupFiles: [
    './jest-setup.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
};
