'use strict';
import {StyleSheet} from 'react-native';

const colors = {
  primary: '#2E6933',
  lightGreen: '#D9FFDC',
  white: '#FFFFFF',
  lightGray: '#F8F8F8',
  darkGray: '#737373',
  black: '#000000',
  red: '#AF0000',
  yellow: '#FAD233',
  mediumGray: '#CBCBCB',
};

const globalStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullScreen: {
    height: '100%',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: colors.black,
  },
  tabBar: {
    borderTopWidth: 1,
    borderTopColor: colors.primary,
    justifyContent: 'center',
    padding: 8,
  },
  tabBarHidden: {display: 'none'},
  tabBarLabel: {
    fontSize: 8,
  },
  listContentContainer: {marginBottom: 20, paddingVertical: 40},
});

module.exports = {colors, globalStyleSheet};
