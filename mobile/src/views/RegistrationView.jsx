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

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      '274455879293-j240h2dtj0n2n90f8l8hsdngnct4iqk5.apps.googleusercontent.com',
  });

  async function getUserData() {
    let userData = await fetch(
      'https://www.googleapis.com/oauth2/v2/userinfo',
      {
        headers: {Authorization: 'Bearer ' + accessToken},
      },
    );
    userData.json().then(data => setUserInfo(data));
  }

  React.useEffect(() => {
    if (response?.type === 'success') {
      const {authentication} = response; // storing our authentication data (JSON) into this authentication variable
      setAccessToken(authentication.accessToken);
      getUserData();
    }
  }, [response]);

  return (
    <View style={globalStyleSheet.container}>
      <Header />
      <View style={[styles.bodyContainer]}>
        {userInfo ? (
          <View style={styles.loggedIn}>
            <Text>Logged In</Text>
            <Image
              source={{uri: userInfo['picture']}}
              style={styles.avatar}></Image>
          </View>
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
    ...globalStyleSheet.fullScreen,
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
  },
});

export default RegistrationView;
