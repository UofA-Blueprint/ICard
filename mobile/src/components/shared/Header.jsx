import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {colors, globalStyleSheet} from '../../utilites/Theme';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/ISA-logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyleSheet.container,
    width: '100%',
    height: 70,
    borderBottomWidth: 1,
    borderColor: colors.primary,
  },
  logo: {
    width: '10%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Header;