<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, {useState, useContext} from 'react';
=======
import React, {useState} from 'react';
>>>>>>> e99e8ed (Fixed conflict)
=======
import React, {useState, useContext} from 'react';
>>>>>>> 995789d (Added submit button functionality)
=======
import React, {useState} from 'react';
>>>>>>> 0fe716f (Fixed conflict)
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import * as ImagePicker from 'expo-image-picker';
import {colors, typography} from '../utilites/Theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {CLIENT_ID, API_ROUTE, API_KEY} from '@env';
import AuthContext from '../context/AuthContext';

const VerificationView = () => {
  const {user, _} = useContext(AuthContext);
  const [data, setData] = useState(null);
  const navigation = useNavigation();
  const [image, setImage] = useState(null);

  const createFormData = uri => {
    const fileName = uri.split('/').pop();
    const fileType = fileName.split('.').pop();
    const formData = new FormData();
    formData.append('image', {
      uri: uri,
      name: fileName,
      type: `image/${fileType}`,
    });
    console.log(formData);
    return formData;
  };
=======
=======
import {CLIENT_ID, API_ROUTE, API_KEY} from '@env';
import AuthContext from '../context/AuthContext';

>>>>>>> 995789d (Added submit button functionality)
const VerificationView = () => {
  const {user, _} = useContext(AuthContext);
  const [data, setData] = useState(null);
  const navigation = useNavigation();
  const [image, setImage] = useState(null);

<<<<<<< HEAD
>>>>>>> e99e8ed (Fixed conflict)
=======
  const createFormData = uri => {
    const fileName = uri.split('/').pop();
    const fileType = fileName.split('.').pop();
    const formData = new FormData();
    formData.append('image', {
      uri: uri,
      name: fileName,
      type: `image/${fileType}`,
    });
    console.log(formData);
    return formData;
  };
>>>>>>> 995789d (Added submit button functionality)
=======
const VerificationView = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);

>>>>>>> 0fe716f (Fixed conflict)
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      setData(createFormData(result.uri));
=======
>>>>>>> e99e8ed (Fixed conflict)
=======
      setData(createFormData(result.uri));
>>>>>>> 995789d (Added submit button functionality)
=======
>>>>>>> 0fe716f (Fixed conflict)
      setImage(result.uri);
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 995789d (Added submit button functionality)
  const submitImage = async data => {
    console.log(data);
    const fetchData = async () => {
      fetch(API_ROUTE + 'api/images/upload', {
        method: 'POST',
        headers: {
          'session-token': user.token,
          'x-api-key': API_KEY,
        },
        body: data,
      })
        .then(result => {
          return result.text();
        })
        .then(data => {
          console.log(data);
          navigation.navigate('My ICard Home');
        });
    };
    await fetchData();
  };

<<<<<<< HEAD
=======
>>>>>>> e99e8ed (Fixed conflict)
=======
>>>>>>> 995789d (Added submit button functionality)
=======
>>>>>>> 0fe716f (Fixed conflict)
  return (
    <ImageBackground
      source={require('../../assets/gradient.png')}
      resizeMode="cover"
      style={styles.imageBackground}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <FontAwesome5
            name="arrow-left"
            onPress={() => navigation.goBack()}
            size={30}
            style={styles.backButton}
          />
          <Text style={styles.title}>Verify Account</Text>
        </View>
        <Text style={styles.prompt}>
          An email from ISA was sent to your University of Alberta email. Please
          upload a screenshot to verify your account.{' '}
          <FontAwesome5 name="question-circle" size={16} />
        </Text>
        <View style={styles.uploadArea}>
          <Pressable onPress={pickImage} style={styles.selectButton}>
            <Text style={{color: 'white', ...typography.subHeader4}}>
              Select Photo
            </Text>
          </Pressable>
          {image && (
            <Image source={{uri: image}} style={{width: 200, height: 200}} />
          )}
        </View>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <Pressable
          onPress={() => {
            submitImage(data);
=======
        <Pressable
          onPress={() => {
            console.log('Submit');
>>>>>>> 1fed3a7 (Fixed conflict)
          }}
          style={[
            styles.submitButton,
            image != null ? styles.activeSubmitButton : '',
          ]}
          disabled={image == null}>
<<<<<<< HEAD
          <Text style={{color: 'white', ...typography.subHeader4}}>Submit</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            console.log('Skip');
          }}
          style={styles.skipButton}>
=======
=======
>>>>>>> 0fe716f (Fixed conflict)
        <Pressable onPress={() => {}} style={styles.submitButton}>
          <Text style={{color: 'white', ...typography.subHeader4}}>Submit</Text>
        </Pressable>
        <Pressable onPress={() => {}} style={styles.skipButton}>
<<<<<<< HEAD
>>>>>>> e99e8ed (Fixed conflict)
=======
>>>>>>> 0fe716f (Fixed conflict)
=======
          <Text style={{color: 'white', ...typography.subHeader4}}>Submit</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            console.log('Skip');
          }}
          style={styles.skipButton}>
>>>>>>> 1fed3a7 (Fixed conflict)
          <Text style={{color: colors.primary, ...typography.body}}>
            Skip for now
          </Text>
        </Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    ...typography.subHeader3,
  },
  backButton: {
    position: 'absolute',
    color: colors.primary,
    left: 0,
  },
  prompt: {
    marginHorizontal: 24,
    ...typography.body,
  },
  uploadArea: {
    margin: 24,
    width: '100%',
    height: 360,
    flexDirection: 'column-reverse',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 24,
    padding: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: colors.primary,
    borderRadius: 24,
  },
  submitButton: {
    margin: 24,
    borderRadius: 24,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    backgroundColor: colors.lightGray,
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  activeSubmitButton: {
    backgroundColor: colors.primary,
  },
=======
>>>>>>> e99e8ed (Fixed conflict)
=======
>>>>>>> 0fe716f (Fixed conflict)
=======
  activeSubmitButton: {
    backgroundColor: colors.primary,
  },
>>>>>>> 1fed3a7 (Fixed conflict)
});

export default VerificationView;
