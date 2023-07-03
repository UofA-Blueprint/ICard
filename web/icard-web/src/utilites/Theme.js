'use strict';
import {StyleSheet} from 'react-native';

const colors = {
  primary: '#2E6933',
  lightGreen: '#D9FFDC',
  white: '#FFFFFF',
  lightGray: '#CBCBCB',
  darkGray: '#737373',
  black: '#000000',
  red: '#EF6464',
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
    justifyContent: 'center',
    padding: 5,
    shadowColor: "#000000",
    shadowOffset: {
	    width: 4,
	    height: 4,
      },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  tabBarHidden: {display: 'none'},
  tabBarLabel: {
    fontSize: 12,
  },
  listContentContainer: {marginBottom: 20, paddingVertical: 40},
});

export {colors, globalStyleSheet};
