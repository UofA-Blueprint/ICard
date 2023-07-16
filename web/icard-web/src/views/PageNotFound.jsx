import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';
import {globalStyleSheet, colors} from '../utilites/Theme';


const PageNotFound = ({navigation}) => {
  
  const navState = navigation.getState();
  const currentRoute = navState.routes[navState.index].name;

  return (
      <ImageBackground
      source={require('../../assets/Background.png')}
      resizeMode="cover"
      style={styles.backgroundImage}>
      <SafeAreaView style={{flex: 1}} edges={['top']}>
      <ScrollView>
      {// TODO: User == null logic and relevant functions missing
      }
      <TouchableOpacity>
      <Image
                source={require('../../assets/Sign-Out.png')}
                style={styles.signOut}
              />
      </TouchableOpacity>
      <Image
        source={require('../../assets/ISA-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>
        The screen "{currentRoute}" is not implemented.
      </Text>
      <Text
        style={styles.linkText}
        onPress={() => navigation.goBack()}>
        Go Back
      </Text>

      </ScrollView>    
      </SafeAreaView>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyleSheet.container,
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
  linkText: {
    color: colors.darkGray,
    marginLeft: 24,
    fontSize: 20,
    textAlign: 'left',
  },
});

export default PageNotFound;
