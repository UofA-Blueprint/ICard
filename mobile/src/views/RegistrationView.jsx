import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

import Header from '../components/shared/Header';
import {colors, globalStyleSheet} from '../utilites/Theme';

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
      <Header />
      <View style={[styles.bodyContainer]}>
        <TouchableOpacity
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
          style={styles.signInButton}>
          <FontAwesome5 name="google" size={16} color={colors.primary} />
          <Text style={styles.promptMessage}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  signInButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.primary,
  },
  promptMessage: {
    color: colors.primary,
  },
  loggedIn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginVertical: 24,
  },
});

export default RegistrationView;
