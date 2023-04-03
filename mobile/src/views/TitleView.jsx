import React, {useContext} from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {globalStyleSheet, colors} from '../utilites/Theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Google from 'expo-auth-session/providers/google';
import {CLIENT_ID, API_ROUTE, API_KEY} from '@env';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VerificationView from './VerificationView';
import { storeDate } from '../utilites/StoreDate';
import { storeUser } from '../utilites/StoreUser';
import AuthContext from '../context/AuthContext';


const expoClientId = CLIENT_ID;
const authRoute = API_ROUTE;
const apiKey = API_KEY;




const Stack = createNativeStackNavigator();


const Title = ({navigation}) => {
    const {_, setUser} = useContext(AuthContext);

    const [request, response, promptAsync] = Google.useAuthRequest({
        responseType: 'id_token',
        expoClientId: expoClientId,
        scopes: ['email', 'profile'],
      });
   
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
                data["verification_image"] == ""  || data["verification_image"] == undefined ? data["verification_image"] = "" : null;
                data["id"] = data["_id"];
                delete data["_id"];
                setUser(data);
                storeDate();
                storeUser(data);
              });
          };
          fetchData();
          navigation.navigate('Verification')
        }
      }, [response]);
   


 
  return (
    <ImageBackground
      source={require('../../assets/Background.png')}
      resizeMode="cover"
      style={styles.backgroundImage}>
      <SafeAreaView style={{flex: 1}} edges={['top']}>


        <Image
        source={require('../../assets/TitleLogo.png')}
        style={styles.image}
        />


        <Text style={styles.textLarge}>Discover more{'\n'}with ISA</Text>
        <Text style={styles.textSmall}>Please use University of Alberta email</Text>


        <TouchableOpacity
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
          style={styles.signInButton}
          activeOpacity={0.5}>
          <Image
            source={require('../../assets/google.png')}
            style={styles.google}/>
          <Text style={styles.promptMessage}>Sign In with Google</Text>
        </TouchableOpacity>


        <Text style={styles.skip} onPress={() => {
            navigation.navigate('Tabs')
        }}>Skip for now</Text>
               
      </SafeAreaView>
    </ImageBackground>
  );
};




const TitleView = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Title Page"
          component={Title}
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
  container: {
    ...globalStyleSheet.container,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    marginTop: 29,
  },
  textLarge: {
    marginTop: 25,
    fontSize: 35,
    color: '#2E6933',
    alignSelf:'center',
    fontWeight: '700',
  },
  textSmall: {
    fontSize: 14,
    color: colors.darkGray,
    alignSelf:'center',
    fontWeight: '300',
  },
  signInButton: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    width: 250,
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 50,
    shadowColor: "#000000",
    shadowOffset: {
    width: 0,
    height: 1,
    },
    shadowOpacity:  0.15,
    shadowRadius: 1.00,
    elevation: 1
    },
    promptMessage: {
    color: colors.darkGray,
    fontSize: 15,
  },
  skip: {
    alignSelf: 'center',
    marginTop: 10,
    color: colors.primary,
    fontSize: 14,
  },
});


export default TitleView;