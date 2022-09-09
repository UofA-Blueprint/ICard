'use strict';
import {StyleSheet} from 'react-native';
import React from 'react';
var {Platform} = React;

const colors = {
  primary: '#2E6933',
  lightGreen: '#D9FFDC',
  white: '#FFFFFF',
  lightGray: '#F8F8F8',
  darkGray: '#737373',
  black: '#000000',
  red: '#AF0000',
  yellow: '#C4C81E',
};

const globalStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
    height: Platform.OS === 'ios' ? 100 : 60,
    padding: 8,
  },
  tabBarHidden: {display: 'none'},
  tabBarLabel: {
    fontSize: 8,
    padding: 8,
  },
  listContentContainer: {marginBottom: 20, paddingVertical: 40},
});

const typography = StyleSheet.create({
  header: {
    fontFamily: 'Poppins_700Bold',
    fontSize: Platform.OS === 'ios' ? 35 : 32,
  },
  subHeader1: {
    fontFamily: 'Poppins_700Bold',
    fontSize: Platform.OS === 'ios' ? 26 : 24,
  },
  subHeader2: {
    fontFamily: 'Poppins_700Bold',
    fontSize: Platform.OS === 'ios' ? 20 : 18,
  },
  subHeader3: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: Platform.OS === 'ios' ? 18 : 16,
  },
  subHeader4: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: Platform.OS === 'ios' ? 16 : 12,
  },
  body: {
    fontFamily: 'Poppins_400Regular',
    fontSize: Platform.OS === 'ios' ? 16 : 14,
  },
  detail: {
    fontFamily: 'Poppins_400Regular',
    fontSize: Platform.OS === 'ios' ? 14 : 12,
    color: colors.darkGray,
  },
  smallest: {
    fontFamily: 'Poppins_400Regular',
    fontSize: Platform.OS === 'ios' ? 12 : 8,
  },
});

module.exports = {colors, globalStyleSheet, typography};
