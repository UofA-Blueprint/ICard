import React, {useContext} from 'react';

import AuthContext from '../context/AuthContext';
import MyICardPage from '../components/shared/ICardPage';

let finalStatus = 'pending';




const MyICardView = () => {
  const {user, _} = useContext(AuthContext);
  

  if (user == null) return <></>;

  if (user.verify) finalStatus = 'inactive';
  if (user.isaf_status) finalStatus = 'active';

  return (
    <MyICardPage user = {user} status = {finalStatus} verify = {() => {console.log('verify')}}/>
  );
};



export default MyICardView;
