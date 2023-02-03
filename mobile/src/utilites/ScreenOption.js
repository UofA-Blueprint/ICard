'use strict';
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {colors, globalStyleSheet} from './Theme';

const ScreenOption = ({route}) => ({
  headerShown: false,
  // https://medium.com/@mspviraj/hide-bottom-tab-bar-on-a-specific-screen-in-react-navigation-6-0-26d31625d339
  tabBarStyle: (route => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? '';
    if (routeName === 'Verification') {
      return {display: 'none'};
    } else {
      return {display: globalStyleSheet.tabBar};
    }
  })(route),
  tabBarLabelStyle: globalStyleSheet.tabBarLabel,
  tabBarIcon: ({focused, color, size}) => {
    let iconName;
    if (route.name === 'Home') {
      iconName = focused ? 'home-variant' : 'home-variant-outline';
    } else if (route.name === 'My ICard') {
      iconName = focused ? 'credit-card' : 'credit-card-outline';
    } else if (route.name === 'Vendors') {
      iconName = focused ? 'store' : 'store-outline';
    }

    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.gray,
});

export default ScreenOption;
