import React, {useContext} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity, ImageBackground} from 'react-native';
import FancyBox from './FancyBox';
 
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
 
import {colors} from '../../utilites/Theme';
 
 
 
 
 
const statusColors = {
  active: colors.primary,
  inactive: colors.red,
  stale: colors.darkGray,
  'verifying account': colors.yellow,
  Unlinked: colors.lightGray,
  'inactive, verify': colors.red,
  'inactive, reverify': colors.red
};
 
const MyICardPage = (props) => {
  const {user} = props;
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const VerificationButton = ({status, onPress}) => {
    let content1 = null;
    {
      content1 = (
        <View>
          <TouchableOpacity style={styles.verificationbutton} onPress={onPress}>
            <Text style={styles.buttonText}>
              {status === 'inactive, verify' ? 'Verify Account' : 'Reverify account'}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
    return content1;
  };


  const Card = ({status, msg}) => {
    let content
    let color = props.status
 
    if (status == 'inactive') {
      content = (
        <View style={styles.notification}>
          <Image source={require('../../../assets/x.png')} style={styles.notificationPic} />
          <View justifyContent={'center'}>
            <Text style={styles.notificationText}>{msg}</Text>
          </View>
        </View>
      )}
    else if (status == 'stale') {
      content = (
        <View style={styles.notification}>
          <Image source={require('../../../assets/Refresh.png')} style={styles.notificationPic} />
          <View justifyContent={'center'}>
            <Text style={styles.notificationText}>Refresh page to update status</Text>
          </View>
        </View>
      )}
      else if (status == 'Unlinked') {
        content = (
          <View style={styles.notification}>
            <Image source={require('../../../assets/Link.png')} style={styles.notificationPic} />
            <View justifyContent={'center'}>
              <Text style={styles.notificationText}>Link to your University of Alberta{'\n'}email to gain access to My ICard</Text>
            </View>
          </View>
        )}
      else if (status == 'verifying account') {
        content = (
          <View style={styles.notification}>
            <Image source={require('../../../assets/Link.png')} style={styles.notificationPic} />
            <View justifyContent={'center'}>
              <Text style={styles.notificationText}>{msg}</Text>
            </View>
          </View>
        )}

      else if (status == 'inactive, verify') {
        content = (
            <View style={styles.notification}>
            <Image source={require('../../../assets/x.png')} style={styles.notificationPic} />
            <View justifyContent={'center'}>
              <Text style={styles.notificationText}>Your account is unverified. Please{'\n'}go through the verification process</Text>
            </View>
          </View> 
        )}
      
        else if (status == 'inactive, reverify') {
          content = (
              <View style={styles.notification}>
              <Image source={require('../../../assets/x.png')} style={styles.notificationPic} />
              <View justifyContent={'center'}>
                <Text style={styles.notificationText}>Something went wrong, please{'\n'}reverify account or contact ISA at{'\n'}isa.general@ualberta.ca </Text>
              </View>
            </View> 
          )}
    return <View>{content}</View>
  }

  const marginTopValue = props.status == 'inactive' || props.status == 'stale' 
        || props.status == 'Unlinked'||props.status =='inactive, verify' 
        || props.status == 'inactive, reverify' || props.status == 'verifying account'
        ? 109 : 235;
 
  return (
    <ImageBackground source={require('../../../assets/Background.png')} resizeMode="cover" style={styles.backgroundImage}>
 
     
      <Card status={props.status} msg = {props.msg} />
     
 
      <View style={styles.container} backgroundColor={statusColors[props.status]} marginTop={marginTopValue}>
        <View style={styles.containerInside}>
          <Image source={user != null ? {uri:user.picture } : require('../../../assets/account.png')} style={styles.avatar} borderColor={statusColors[props.status]} />
          <Text style={styles.userName} >{user != null ? user.name : 'N/A'}</Text>
          <Text style={styles.statusHeader}>ISAF status</Text>
          <Text style={[{...styles.ISAFStatus, color: statusColors[props.status]}]} >
              {props.status === 'inactive, reverify' || props.status === 'inactive, verify' ? 
              <Text>Inactive</Text> :
              <Text>{props.status}</Text>}
          </Text>
        </View>
      </View>
      {props.status == 'inactive, verify' || props.status == 'inactive, reverify'  ? (
          <VerificationButton onPress={props.verify} status={props.status}/>
      ): (  <></>

      )}

      {props.status == 'Unlinked' ? (
           props.children
       ): (
           <></>
       )}
       

    </ImageBackground>
  );
};
 
const styles = StyleSheet.create({
  containerInside: {
    width: 312,
    height: 234,
    backgroundColor: colors.white,
    position: 'absolute',
    marginTop: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  container: {
   
    borderRadius: 15,
    marginTop: 235,
    flexGrow: 1,
    alignItems: 'center',
    flex: 1,
    width: 312,
    maxHeight: 266,
 
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
      },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 128,
    height: 128,
    borderWidth: 3,
    borderRadius: 64,
    position: 'absolute',
    top: -80,
    backgroundColor: colors.white,
  },
  userName: {
    marginTop: 72,
    fontSize: 26,
    fontWeight: '700',
  },
  statusHeader: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: '600',
  },
  ISAFStatus: {
    textTransform: 'capitalize',
    marginTop: 4,
    fontSize: 26,
    fontWeight: '700',
  },
  notification: {
    flexDirection: 'row',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 66,
    backgroundColor: colors.white,
    marginTop: 60,
    shadowOffset: {
      width: 4,
      height: 4,
      },
    shadowOpacity: 0.25,
    elevation: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  notificationPic: {
    width: 34,
    height: 34,
    
  },
  notificationText: {
    marginTop: 76,
    marginLeft: 5,
    height: '100%',
    textAlignVertical: 'center',
    fontSize: 10,
    fontWeight: '400',
    flexWrap: 'wrap'
  },
  verificationbutton: {
    backgroundColor: colors.white,
    padding: 16,
    alignSelf: 'center',
    width: 312, 
    height: 54,
    borderRadius: 50,
    marginTop: 25,
    shadowColor: "#000",
    shadowOffset: {
	    width: 4,
	    height: 4,
      },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 23,
    color: colors.darkGray,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
export default MyICardPage;

