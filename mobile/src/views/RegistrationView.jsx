import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

import {colors} from '../utilites/Theme';

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

import AuthContext from '../context/AuthContext';

WebBrowser.maybeCompleteAuthSession();

import {CLIENT_ID, API_ROUTE, API_KEY} from '@env';
import MyICardPage from '../components/shared/ICardPage';
import { storeDate } from '../utilites/StoreDate';
import { storeUser } from '../utilites/StoreUser';
import VerificationView from './VerificationView';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const expoClientId = CLIENT_ID;
const authRoute = API_ROUTE;
const apiKey = API_KEY;

const Stack = createNativeStackNavigator();

const Registration = ({navigation}) => {
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
            storeDate();
            storeUser(data);
          });
      };
      fetchData();
      navigation.navigate('Verification')
    }
  }, [response]);

  /*
  Render a Google Sign In Button
  */

  //status defines button condition
  return (
    <MyICardPage user={null} status={'Unlinked'}>
      <View style={styles.bodyContainer}>
        <TouchableOpacity
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
          style={styles.signInButton}
          activeOpacity={0.5}>
          <FontAwesome5 name="google" size={16} color={colors.primary} />
          <Text style={styles.promptMessage}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
    </MyICardPage>
  );
};


const RegistrationView = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verification"
        component={VerificationView}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    width: '60%',
    justifyContent: 'center',
    marginTop: 5,
    zIndex: 1,
  },
  signInButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.primary,
  },
  promptMessage: {
    color: colors.primary,
  },
});

export default RegistrationView;
