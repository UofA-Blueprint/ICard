import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, globalStyleSheet} from '../share/Theme';

const VendorCard = ({vendorName, address, description}) => {
  return (
    <View style={styles.container}>
      <Text style={[globalStyleSheet.text, globalStyleSheet.heading]}>
        {vendorName}
      </Text>
      <Text style={[globalStyleSheet.text]}>{address}</Text>
      <Text style={[globalStyleSheet.text, styles.description]}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    marginVertical: 12,
  },
  description: {
    paddingTop: 10,
  },
});

export default VendorCard;
