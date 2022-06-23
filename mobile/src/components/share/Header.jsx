import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

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
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 70,
    borderBottomWidth: 1,
    borderColor: '#2E6933',
  },
  logo: {
    width: '10%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Header;
