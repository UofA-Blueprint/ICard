import React, {useContext, useState} from 'react';
import { View,  RefreshControl, StyleSheet,  ScrollView, ActivityIndicator } from 'react-native';
import AuthContext from '../context/AuthContext';
import MyICardPage from '../components/shared/ICardPage';
import VerificationView from './VerificationView'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import * as StudentFunctions from '../../../backend/src/controllers/Students';

let finalStatus = 'inactive';

const Stack = createNativeStackNavigator();

import {API_ROUTE, API_KEY} from '@env';
import { storeUser } from '../utilites/StoreUser';

const authRoute = API_ROUTE;
const apiKey = API_KEY;

const MyICard = ({navigation}) => {
  const {user, setUser} = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);
  //console.log(user);
  const loadUserData = async () => {
    //console.log('Pulled')
    setRefreshing(true);
    fetch(authRoute + `api/students/${user.id}`, {
      method: 'GET',
      headers: {'x-api-key': apiKey, 'jwt-token': user.key},
    })
    .then(result => {
      return result.json();
    })
    .then(data => {
      data["key"] = user.key;
      data["id"] = data["_id"];
      delete data["_id"];
      console.log("Retrived data:")
      console.log(data);
      setRefreshing(false);
      setUser(data);
      storeUser(data);
      
    })
    .catch((error) => {
      console.error(error);
    });
  }

  
  if (user == null) return <></>;
  if (user.verify) finalStatus = 'inactive';
  if (user.isaf_status) finalStatus = 'active';

  if (!user.isaf_status && !user.verify && user.verification_image)
    finalStatus = 'verifying account';

  //verify button below is a todo. Just have a console.log in it for now
  return (
    <View style = {styles.container}>
      <ScrollView refreshControl={<RefreshControl refreshing = {refreshing} onRefresh = {loadUserData}/>} 
        contentContainerStyle={styles.contentContainer}>
        <MyICardPage
          user={user}
          status={finalStatus}
          verify={() => {
            navigation.navigate('Verification');
          }}
        />
      </ScrollView>
    </View>
  );
};

const MyICardView = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My ICard Page"
        component={MyICard}
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
 
  container:{
    flex:1
  },
  contentContainer: {
    flex: 1
  }
})

export default MyICardView;
