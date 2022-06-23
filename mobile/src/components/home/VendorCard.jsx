import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const VendorCard = ({vendorName, address, description}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.vendorName]}>{vendorName}</Text>
      <Text style={[styles.text]}>{address}</Text>
      <Text style={[styles.text, styles.description]}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#2E6933',
    borderRadius: 10,
    marginVertical: 12,
  },
  text: {color: 'black'},
  vendorName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    paddingTop: 10,
  },
});

export default VendorCard;
