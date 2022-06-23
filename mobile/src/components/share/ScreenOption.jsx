'use strict';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, globalStyleSheet} from './Theme';

const ScreenOption = ({route}) => ({
  headerShown: false,
  tabBarStyle: globalStyleSheet.tabBar,
  tabBarIcon: ({focused, color, size}) => {
    let iconName;
    if (route.name === 'Home') {
      iconName = focused ? 'home-variant' : 'home-variant-outline';
    } else if (route.name === 'Scan') {
      iconName = focused ? 'camera' : 'camera-outline';
    } else if (route.name === 'My ICard') {
      iconName = focused ? 'credit-card' : 'credit-card-outline';
    }
    // You can return any component that you like here!
    return <Icon name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.gray,
});

export default ScreenOption;
