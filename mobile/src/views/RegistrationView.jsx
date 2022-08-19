import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

import Header from '../components/shared/Header';
import {colors, globalStyleSheet} from '../utilites/Theme';

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();

const RegistrationView = () => {
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();

  // Google Use Auth Request Hook

  const [request, response, promptAsync] = Google.useAuthRequest({
    responseType: 'id_token',
    expoClientId:
      '71633949714-fdu0efehl8ouvbih6eosrgfla2b2mk0u.apps.googleusercontent.com',
    scopes: ['email', 'profile'],
  });

  // Effect Hook to save the access token and then fetch user data
  React.useEffect(() => {
    if (response?.type === 'success') {
      const fetchData = async () => {
        const {authentication} = response; // storing our authentication data (JSON) into this authentication variable
        console.log(response.params.id_token);
        // setAccessToken(authentication.accessToken);
        // let userData = await fetch(
        //   'https://www.googleapis.com/oauth2/v2/userinfo',
        //   {
        //     headers: {Authorization: 'Bearer ' + authentication.accessToken},
        //   },
        // );
        // let data = await userData.json();
        // setUserInfo(data);
      };
      fetchData();
    }
  }, [response]);

  /*
  Render a Google Sign In Button
  If the access token is granted, render a "Loading" text
  until the app finally fetch the User Info.
  If the user info is obtained, render their name and profile pic.
  */

  return (
    <View style={globalStyleSheet.container}>
      <Header />
      <View style={[styles.bodyContainer]}>
        {accessToken ? (
          userInfo ? (
            <View style={styles.loggedIn}>
              <Text>{userInfo.name}</Text>
              <Image
                source={{uri: userInfo.picture}}
                style={styles.avatar}></Image>
            </View>
          ) : (
            <Text>Loading...</Text>
          )
        ) : (
          <TouchableOpacity
            disabled={!request}
            onPress={() => {
              promptAsync();
            }}
            style={styles.signInButton}>
            <FontAwesome5 name="google" size={16} color={colors.primary} />
            <Text style={styles.promptMessage}>Sign In with Google</Text>
          </TouchableOpacity>
        )}
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
