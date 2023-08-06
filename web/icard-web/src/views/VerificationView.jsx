import React, {useState, useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  View,
  StyleSheet,
  Pressable,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
// import * as ImagePicker from 'expo-image-picker';
import {colors} from '../utilites/Theme';
// import * as Progress from 'react-native-progress';
// import {_, API_ROUTE, API_KEY} from '@env';
import AuthContext from '../context/AuthContext';
import Step from '../components/shared/Step';

const VerifcationView = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [filename, setFilename] = useState(null);
  const {user, setUser} = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [Progress, setProgress] = useState(0);

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
      let address = result.uri.split('/');
      setImage({
        uri: result.uri,
        type: result.type,
        name: address[address.length - 1],
      });
      setFilename(address[address.length - 1]);
    }
  };

  const submitImage = async () => {
    let formData = new FormData();
    formData.append('image', image);
    fetch(API_ROUTE + 'api/images/upload', {
      method: 'post',
      headers: {
        'jwt-token': user['key'],
        'x-api-key': API_KEY,
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        fetch(API_ROUTE + 'api/students/' + user.id, {
          method: 'get',
          headers: {
            'jwt-token': user['key'],
            'x-api-key': API_KEY,
            'Content-Type': 'multipart/form-data',
          },
        })
          .then(result => result.json())
          .then(data => {
            setUser(data);
          })
          .catch(console.error);
      });
    navigation.navigate('Submitted');
  };

  return (
    <ImageBackground
      source={require('../../assets/Background.png')}
      resizeMode="cover"
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.header}>
          <View style={styles.backButton}>
            <FontAwesome5.Button
              name="arrow-left"
              size={24}
              color={colors.primary}
              backgroundColor="transparent"
              onPress={() => {
                navigation.navigate('My ICard');
              }}></FontAwesome5.Button>
          </View>
          <Text style={styles.viewTitle}>Verify Account</Text>
        </View>
        <ScrollView style={styles.body}>
          <Text style={styles.instruction}>
            An email from ISA was sent to your University of Alberta email.
            Please upload a screenshot to verify your account.{' '}
            <FontAwesome5
              name="question-circle"
              size={20}
              color={colors.primary}
              backgroundColor="transparent"
              onPress={() => setModalVisible(true)}></FontAwesome5>
          </Text>

          <Modal transparent={true} visible={modalVisible}>
            <View
              style={{
                backgroundColor: '#000000aa',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={styles.popup}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Image
                    source={require('../../assets/x2.png')}
                    style={styles.notificationPic}
                  />
                </TouchableOpacity>
                <Text style={styles.title}>How to upload your email?</Text>

                <ScrollView
                  pagingEnabled={true}
                  decelerationRate="fast"
                  onMomentumScrollEnd={() => setModalVisible(true)}
                  horizontal>
                  <Step
                    text="Open your UAlberta Gmail account."
                    step="Step: 1"
                    screen={require('../../assets/step1.png')}
                    bubbles={require('../../assets/Bubbles1.png')}
                  />
                  <Step
                    text="Search “The Wait is Over! Pick-up Your Free I-Card Now!” in the search bar and find the email sent by “isa.communication s@ualberta.ca”."
                    step="Step: 2"
                    screen={require('../../assets/step2.png')}
                    bubbles={require('../../assets/Bubbles2.png')}
                  />
                  <Step
                    text="Take a screenshot of the email including the recipient’s email address."
                    step="Step: 3"
                    screen={require('../../assets/step3.png')}
                    bubbles={require('../../assets/Bubbles3.png')}
                  />
                  <Step
                    text="Submit the screenshot into the ISA mobile application."
                    step="Step: 4"
                    screen={require('../../assets/step4.png')}
                    bubbles={require('../../assets/Bubbles4.png')}
                  />
                </ScrollView>
              </View>
            </View>
          </Modal>

          <Text style={styles.example}>Example</Text>
          <View style={styles.exampleImage}>
            <Image
              source={require('../../assets/example.png')}
              resizeMode="contain"></Image>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={image ? styles.uploaded : styles.uploadSection}>
              {image ? (
                <FontAwesome5
                  name="file-alt"
                  size={64}
                  color={colors.primary}
                  backgroundColor="transparent"></FontAwesome5>
              ) : (
                <FontAwesome5
                  name="image"
                  size={64}
                  color={colors.primary}
                  backgroundColor="transparent"></FontAwesome5>
              )}
              {image ? (
                <Text style={styles.filename}>{filename}</Text>
              ) : (
                <Pressable onPress={pickImage} style={styles.uploadButton}>
                  <Text style={styles.uploadButtonText}>Upload Photo</Text>
                </Pressable>
              )}
              {image && (
                <View style={styles.cancelButton}>
                  <FontAwesome5.Button
                    name="times"
                    backgroundColor="transparent"
                    color={colors.primary}
                    onPress={() => {
                      setImage(null);
                    }}
                  />
                </View>
              )}
            </View>
            <Pressable
              style={image ? styles.submitButton : styles.inactiveSubmitButton}
              onPress={image ? submitImage : () => {}}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('My ICard');
              }}>
              <Text style={styles.skipButtonText}>Skip for now</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {flex: 1, paddingHorizontal: 36},
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 16,
    padding: 16,
  },
  backButton: {
    position: 'absolute',
    left: -20,
  },
  instruction: {
    fontSize: 18,
    color: colors.darkGray,
    letterSpacing: 0.5,
    lineHeight: 23,
    textAlign: 'center',
  },
  example: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 16,
  },
  exampleImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  viewTitle: {fontWeight: 'bold', fontSize: 20},
  body: {flex: 1},
  uploadSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 16,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: colors.primary,
    width: '100%',
    padding: 6,
    marginBottom: 5,
  },
  uploadButton: {
    backgroundColor: colors.primary,
    padding: 12,
    flex: 2,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '60%',
    // height: '30%'
  },
  uploadButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  filename: {
    fontWeight: 'bold',
    color: colors.primary,
    width: '60%',
  },
  uploaded: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.primary,
    width: '100%',
    padding: 16,
    backgroundColor: colors.white,
  },
  cancelButton: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  submitButton: {
    borderRadius: 20,
    backgroundColor: colors.primary,
    padding: 16,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  inactiveSubmitButton: {
    borderRadius: 20,
    backgroundColor: colors.mediumGray,
    padding: 16,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  submitButtonText: {color: colors.white, fontWeight: 'bold', fontSize: 16},
  skipButtonText: {color: colors.primary, fontSize: 16},
  popup: {
    borderRadius: 10,
    backgroundColor: '#ffffff',
    width: 294,
    maxHeight: 536,
    flex: 1,
  },
  notificationPic: {
    width: 15,
    height: 15,
    marginTop: 13,
    marginLeft: 266,
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 21,
    fontWeight: '700',
  },
  background: {
    width: 288,
    height: 328,
    marginTop: 32,
    marginLeft: 3,
  },
});

export default VerifcationView;
