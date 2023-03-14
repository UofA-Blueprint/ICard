import React, {useContext, useEffect, useState, } from 'react';
import { View,  RefreshControl, StyleSheet,  ScrollView, ActivityIndicator } from 'react-native';
import AuthContext from '../context/AuthContext';
import MyICardPage from '../components/shared/ICardPage';
import VerificationView from './VerificationView'
import SubmittedView from './SubmittedView';
import VendorView from './VendorView';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VerifcationView from './VerificationView';


let finalStatus;
let message;

const Stack = createNativeStackNavigator();

import {API_ROUTE, API_KEY} from '@env';
import { storeUser } from '../utilites/StoreUser';

const authRoute = API_ROUTE;
const apiKey = API_KEY;

const MyICard = ({navigation}) => {
  const {user, setUser} = useContext(AuthContext);
  const [checkStatus, setCheckStatus] = useState(true);
  const [refreshing, setRefreshing] = useState(false);


  const loadUserData = async () => {

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
      //data["verification_image"] == ""  || data["verification_image"] == undefined ? data["verification_image"] = "" : null;
      delete data["_id"];
      setRefreshing(false);
      setUser(data);
      storeUser(data);
      console.log(data);
      setCheckStatus(true);
    })
    .catch((error) => {
      console.error(error);
    });
}

if (user == null) return <></>;


const statusCheck = () => {
  if (user == null) return <></>;
  if (user.verify) finalStatus = 'inactive';
  if (user.isaf_status) finalStatus = 'active';
  if (!user.isaf_status && user.verify_status) finalStatus = 'inactive, reverify';  //reverify

  if (!user.isaf_status && !user.verify_status && !user.verification_image) finalStatus = 'inactive, verify'; //verify
  if (!user.isaf_status && !user.verify && user.verification_image)

    finalStatus = 'verifying account';
    message = 'Verification in progress, may take up to 1-3 business days';
  }


  


 
useEffect(() => {
  if (checkStatus){
    statusCheck();
    setCheckStatus(false);
  }
}, [checkStatus])    


  //verify button below is a todo. Just have a console.log in it for now
  return (
    <View style = {styles.container}>
      <ScrollView data-testid = {'refreshControl'} refreshControl={<RefreshControl refreshing = {refreshing} onRefresh = {loadUserData}/>} 
        contentContainerStyle={styles.contentContainer}>
        <MyICardPage
          user={user}
          status={finalStatus}
          msg = {message}
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
        name="My ICard"
        component={MyICard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verification"
        component={VerifcationView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Submitted"
        component={SubmittedView}
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
