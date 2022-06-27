import React from 'react';

import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

import CustomScanIcon from './CustomScanIcon';
import {globalStyleSheet, colors} from '../shared/Theme';

const CaptureMarker = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <Icon.Button
          name="arrow-left"
          backgroundColor="transparent"
          onPress={() => navigation.goBack()}
          size={30}
          iconStyle={styles.backButton}
          style={globalStyleSheet.fullScreen}></Icon.Button>
      </View>
      <Text style={styles.instruction}>Scan an ICard barcode</Text>
      <CustomScanIcon styles={styles.marker} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyleSheet.container,
    backgroundColor: 'transparent',
    height: '90%',
    width: '90%',
  },
  backButton: {
    textAlign: 'center',
    position: 'absolute',
    marginRight: 10,
    padding: 0,
    color: colors.primary,
  },
  backButtonContainer: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    position: 'absolute',
    width: 30,
    height: 30,
    top: 0,
  },
  instruction: {
    position: 'absolute',
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 40,
    color: colors.white,
    top: 40,
  },
});

export default CaptureMarker;
