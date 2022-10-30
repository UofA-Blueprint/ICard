import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import DiscoverBar from '../components/home/DiscoverBar';
import {globalStyleSheet} from '../utilites/Theme';

import AuthContext from '../context/AuthContext';
import MyICardPage from '../components/shared/ICardPage';

let finalStatus = 'pending';

const MyICardView = () => {
  const {user, _} = useContext(AuthContext);

  if (user == null) return <></>;

  if (user.verify) finalStatus = 'inactive';
  if (user.isaf_status) finalStatus = 'active';

  //verify button below is a todo. Just have a console.log in it for now
  return (
    <ImageBackground
      source={require('../../assets/Background.png')}
      resizeMode="cover"
      style={styles.backgoundImage}>
      <Image
        source={require('../../assets/Sign-Out.png')}
        style={styles.signOut}
      />
      <Image
        source={require('../../assets/ISA-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>
        Welcome{'\n'}to ISA's{'\n'}mobile app
      </Text>
      <Text style={styles.headingDiscoverDiscover}>Discover</Text>
      <DiscoverBar />
      <View style={styles.row}>
        <Text style={styles.headingVendor}>Vendors</Text>
        <Text style={styles.vendorText}>See All</Text>
      </View>

      <VendorList
        searchPhrase={searchPhrase}
        data={vendorDataRandom}
        setClicked={setClicked}
      />
      <Text style={styles.heading}>Discover</Text>

      <DiscoverBar />
      <FlatList
        data={vendorData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.vendorList}
        contentContainerStyle={globalStyleSheet.listContentContainer}
      />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    ...globalStyleSheet.container,
  },
  vendorList: {
    paddingHorizontal: 20,
  },
  headingDiscoverDiscover: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
    marginLeft: 25,
  },
  headingVendor: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 25,
    color: colors.darkGray,
  },
  headingVendor: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 25,
    color: colors.darkGray,
  },
  title: {
    marginLeft: 25,
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 11,
  },
  logo: {
    width: 100,
    height: 83,
    resizeMode: 'stretch',
    marginLeft: 25,
    marginTop: 7,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  signOut: {
    width: 24,
    height: 24,
    resizeMode: 'stretch',
    marginRight: 25,
    marginTop: 24,
    alignSelf: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'space-between',
  },
  vendorText: {
    color: colors.darkGray,
    marginRight: 24,
    fontSize: 14,
    textAlign: 'right',
    marginLeft: 25,
    marginTop: 5,
  },
});

export default MyICardView;
