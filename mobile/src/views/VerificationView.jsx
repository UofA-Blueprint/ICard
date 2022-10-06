import React, {useState} from 'react';
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

const VerificationView = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);

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
      setImage(result.uri);
    }
  };

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
        <Pressable
          onPress={() => {
            console.log('Submit');
          }}
          style={[
            styles.submitButton,
            image != null ? styles.activeSubmitButton : '',
          ]}
          disabled={image == null}>
          <Text style={{color: 'white', ...typography.subHeader4}}>Submit</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            console.log('Skip');
          }}
          style={styles.skipButton}>
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
  activeSubmitButton: {
    backgroundColor: colors.primary,
  },
});

export default VerificationView;
