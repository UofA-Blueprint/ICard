import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';
import {colors, globalStyleSheet} from '../../utilites/Theme';

<<<<<<< HEAD

=======
>>>>>>> b25ec7e (created discover bar and welcome title)
const DiscoverBar = () => {
  return (
    <View style={styles.DiscoverRow}>

      <TouchableOpacity style={styles.container} onPress={() => Linking.openURL('https://isa.ualberta.ca/')}>
<<<<<<< HEAD
      <Image
            source={require('../../../assets/Website.png')}
            style={styles.image}
          />

        <View style={styles.row}>
          <Text style={[globalStyleSheet.text, styles.label]}>
          ISA Website
=======
        <Image
          source={require('../../../assets/Website.png')}
          style={styles.image}
        />
        <View style={styles.row}>
          <Text style={[globalStyleSheet.text, styles.label]}>
          ISA's Website
>>>>>>> b25ec7e (created discover bar and welcome title)
          </Text>

          <Image
            source={require('../../../assets/Arrow.png')}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => Linking.openURL('https://isa.ualberta.ca/events')}>
        <Image
          source={require('../../../assets/Events.png')}
          style={styles.image}
        />

        <View style={styles.row}>
          <Text style={[globalStyleSheet.text, styles.label]}>
          Events
          </Text>

          <Image
            source={require('../../../assets/Arrow.png')}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
<<<<<<< HEAD
    backgroundColor: colors.lightGray,
    borderRadius: 15,
=======
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
>>>>>>> b25ec7e (created discover bar and welcome title)
    marginTop: 8,
    marginRight: 16,
    flexGrow: 1,
    alignItems: 'center',
    flex: 1,
<<<<<<< HEAD
    shadowColor: "#000",
    shadowOffset: {
	    width: 4,
	    height: 4,
      },
    shadowOpacity: 0.25,
    elevation: 5,
=======
>>>>>>> b25ec7e (created discover bar and welcome title)

  },
  label: {
    fontSize: 16,
    color: colors.darkGray,
  },
  DiscoverRow: {
    flexDirection: 'row',
    marginLeft: 24,
    marginRight: 8,
    justifyContent: 'space-between',
    
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
    
  },
  image: {
    marginTop: 7,
    marginLeft: 4.2,
  },
});

export default DiscoverBar;