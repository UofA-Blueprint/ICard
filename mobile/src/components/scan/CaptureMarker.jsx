import React from 'react';

import {StyleSheet, View, Text} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

import CustomScanIcon from './CustomScanIcon';
import {colors} from '../../utilites/Theme';

const CaptureMarker = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <FontAwesome5.Button
          name="arrow-left"
          backgroundColor="transparent"
          onPress={() => navigation.goBack()}
          size={30}
          iconStyle={styles.backButton}></FontAwesome5.Button>
      </View>
      <Text style={styles.instruction}>Scan an ICard barcode</Text>
      <CustomScanIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    textAlign: 'center',
    color: colors.primary,
  },
  backButtonContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    top: 40,
  },
  instruction: {
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    color: colors.white,
  },
});

export default CaptureMarker;
