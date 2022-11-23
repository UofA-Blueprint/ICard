import React, {useContext} from 'react';

import AuthContext from '../context/AuthContext';
import MyICardPage from '../components/shared/ICardPage';
import VerificationView from './VerificationView'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

let finalStatus = 'inactive';

const Stack = createNativeStackNavigator();

const MyICard = ({navigation}) => {
  const {user, _} = useContext(AuthContext);

  if (user == null) return <></>;
  if (user.verify) finalStatus = 'inactive';
  if (user.isaf_status) finalStatus = 'active';

  if (!user.isaf_status && !user.verify && user.verification_image)
    finalStatus = 'verifying account';

  //verify button below is a todo. Just have a console.log in it for now
  return (
    <MyICardPage
      user={user}
      status={finalStatus}
      verify={() => {
        navigation.navigate('Verification');
      }}
    />
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

export default MyICardView;
