import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
         Text, 
         View, 
         ImageBackground,
         Image,
         ScrollView,
         TouchableOpacity,
         SafeAreaView } from 'react-native';
import {globalStyleSheet, colors} from './src/utilites/Theme';
import DiscoverBar from './src/components/home/DiscoverBar';



export default function App() {
  return (
      <ImageBackground
      source={require('./assets/Background.png')}
      resizeMode="cover"
      style={styles.backgroundImage}>
      <SafeAreaView style={{flex: 1}} edges={['top']}>
      <ScrollView>
      {// TODO: User == null logic and relevant functions missing
      }
      <TouchableOpacity>
      <Image
                source={require('./assets/Sign-Out.png')}
                style={styles.signOut}
              />
      </TouchableOpacity>
      <Image
        source={require('./assets/ISA-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>
        Welcome{'\n'}to ISA's{'\n'}mobile app
      </Text>
      <Text style={styles.headingDiscoverDiscover}>Discover</Text>
      <DiscoverBar />
      <View style={styles.row}>
            <Text style={styles.headingVendor}>Vendors</Text>

            {/* TODO: Restore navigation functionality */}
            <Text
              style={styles.vendorText}
              >
              See All
            </Text>
          </View>
      </ScrollView>    
      </SafeAreaView>
      </ImageBackground>
  );
}

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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    justifyContent: 'space-between',
  },
  vendorText: {
    color: colors.darkGray,
    marginRight: 24,
    fontSize: 14,
    textAlign: 'right',
  },
});
