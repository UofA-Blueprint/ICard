import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {colors, globalStyleSheet} from '../../utilites/Theme';

const VendorCard = ({vendorName, location, description, vendorImage, cardDesc, discount}) => {
  return (
    <View style={styles.container}>
    	<Image style={styles.logo} source={{uri: vendorImage}}></Image>

      	<View style={{flexShrink: 2}}>

			<Text style={styles.title}>
			{vendorName}
			</Text>

			<View style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center'
			}}>
				<Text style={styles.discount}>
					{discount}
				</Text>

				<Text style={styles.cardDesc}>
					{cardDesc}
				</Text>
			</View>

        </View>
    </View>
  );
};

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  title: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
	paddingHorizontal: 5
  },
  discount: {
    color: colors.black,
    fontSize: 30,
    fontWeight: 'bold',
	paddingHorizontal: 5
  },
  cardDesc: {
    color: colors.black,
    fontSize: 10,
	paddingHorizontal: 5,
	flexShrink: 1
  },
  logo: {
    flexBasis: 75,
    flexShrink: 0,
    aspectRatio: 1,
    resizeMode: 'contain'
  },
  textContainer: {
    flexShrink: 2,
	paddingHorizontal: 5
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 20,
    width: 0.8*win.width
  },
  description: {
    paddingTop: 10,
  },
});

export default VendorCard;
