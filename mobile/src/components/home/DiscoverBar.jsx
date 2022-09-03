import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';
import {colors, globalStyleSheet} from '../../utilites/Theme';

const DiscoverBar = () => {
  return (
    <View style={styles.DiscoverRow}>

      <TouchableOpacity style={styles.container} onPress={() => Linking.openURL('https://isa.ualberta.ca/')}>
        <Image
          source={require('../../../assets/Website.png')}
          style={styles.image}
        />
        <View style={styles.row}>
          <Text style={[globalStyleSheet.text, styles.label]}>
          ISA's Website
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
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    marginTop: 8,
    marginRight: 16,
    flexGrow: 1,
    alignItems: 'center',
    flex: 1,

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