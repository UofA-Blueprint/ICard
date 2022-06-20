import React from 'react';

import {Dimensions, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CaptureMarker = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <Icon.Button
          name="arrow-left"
          backgroundColor="transparent"
          onPress={() => console.log('Back')}
          size={30}
          iconStyle={styles.backButton}
          style={styles.iconContainer}></Icon.Button>
      </View>
      <Icon
        name="expand"
        size={Dimensions.get('window').width * 0.6}
        color="#2E6933"></Icon>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
    width: '90%',
  },
  backButton: {
    textAlign: 'center',
    position: 'absolute',
    marginRight: 10,
    padding: 0,
    color: '#2E6933',
  },
  backButtonContainer: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    position: 'absolute',
    width: 30,
    height: 30,
    top: 0,
  },
  iconContainer: {
    width: '100%',
    height: '100%',
  },
  instruction: {
    position: 'absolute',
    backgroundColor: '#2E6933',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 40,
    color: 'white',
    top: 40,
  },
});

export default CaptureMarker;
