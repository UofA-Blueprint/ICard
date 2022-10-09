import React, {useContext} from 'react';
var {Platform} = React;

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import Header from '../components/shared/Header';
import {colors, globalStyleSheet, typography} from '../utilites/Theme';

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

import AuthContext from '../context/AuthContext';

WebBrowser.maybeCompleteAuthSession();

import {CLIENT_ID, API_ROUTE, API_KEY} from '@env';

const expoClientId = CLIENT_ID;
const authRoute = API_ROUTE;
const apiKey = API_KEY;

const RegistrationView = () => {
  const {_, setUser} = useContext(AuthContext);

  console.table(CLIENT_ID, API_ROUTE, API_KEY);

  // Google Use Auth Request Hook

  const [request, response, promptAsync] = Google.useAuthRequest({
    responseType: 'id_token',
    expoClientId: expoClientId,
    scopes: ['email', 'profile'],
  });

  // Effect Hook to save the access token and then fetch user data
  React.useEffect(() => {
    if (response?.type === 'success') {
      const token = response.params.id_token;
      const fetchData = async () => {
        fetch(authRoute + 'api/auth/login', {
          method: 'POST',
          headers: {'session-token': token, 'x-api-key': apiKey},
        })
          .then(result => {
            return result.json();
          })
          .then(data => {
            console.log(data);
            data['token'] = token;
            setUser(data);
          });
      };
      fetchData();
    }
  }, [response]);

  /*
  Render a Google Sign In Button
  */

  return (
    <View style={globalStyleSheet.container}>
      <View style={[styles.bodyContainer]}>
        <ImageBackground
          source={require('../../assets/gradient.png')}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.title}>
            <Image
              source={require('../../assets/ISA-plate.png')}
              style={Platform.OS == 'android' ? styles.logo : {}}></Image>
            <Text style={[typography.header, styles.header]}>
              Discover more with ISA
            </Text>
            <Text style={{...typography.detail}}>
              Please use University of Alberta email
            </Text>
          </View>
          <View style={styles.groupOfButtons}>
            <TouchableOpacity
              disabled={!request}
              onPress={() => {
                promptAsync();
              }}
              style={styles.signInButton}>
              <Image
                style={styles.tinyLogo}
                source={require('../../assets/google-logo.png')}></Image>
              <Text style={styles.promptMessage}>Sign In with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skipButton}>
              <Text style={[typography.body, {color: colors.primary}]}>
                Skip for now
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 245,
    height: 280,
    resizeMode: 'stretch',
  },
  signInButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    borderRadius: 50,
    paddingHorizontal: 24,
    paddingVertical: 12,
    shadowColor: colors.black,
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  header: {
    paddingHorizontal: 36,
    marginTop: 12,
    color: colors.primary,
  },

  promptMessage: {
    fontWeight: 'bold',
    color: colors.darkGray,
    fontSize: Platform.OS === 'ios' ? 20 : 18,
  },
  tinyLogo: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  skipButton: {
    marginTop: 12,
  },
  title: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupOfButtons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegistrationView;
