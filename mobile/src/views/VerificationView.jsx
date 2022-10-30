import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, StyleSheet, Pressable, Text, Image} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import * as ImagePicker from 'expo-image-picker';
import {colors} from '../utilites/Theme';
import * as Progress from 'react-native-progress';

const VerifcationView = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [filename, setFilename] = useState(null);

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
      setImage(result.uri);
      setFilename(address[address.length - 1]);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backButton}>
          <FontAwesome5.Button
            name="arrow-left"
            size={32}
            color={colors.primary}
            backgroundColor="transparent"
            onPress={() => {
              navigation.navigate('My ICard View');
            }}></FontAwesome5.Button>
        </View>
        <Text style={styles.viewTitle}>Verify Account</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.instruction}>
          An email from ISA was sent to your University of Alberta email. Please
          upload a screenshot to verify your account.
          <FontAwesome5
            name="question-circle"
            size={12}
            color={colors.primary}
            backgroundColor="transparent"></FontAwesome5>
        </Text>
        <Text style={styles.example}>Example</Text>
        <View style={styles.exampleImage}>
          <Image source={require('../../assets/example.png')}></Image>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
            {image ? (
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
            ) : (
              <></>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 16,
    padding: 16,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  instruction: {
    padding: 16,
    fontSize: 16,
  },
  example: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 16,
  },
  exampleImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTitle: {fontWeight: 'bold'},
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
    padding: 16,
  },
  uploadButton: {
    backgroundColor: colors.primary,
    padding: 16,
    flex: 2,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '60%',
  },
  uploadButtonText: {
    color: colors.white,
    fontWeight: 'bold',
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
});

export default VerifcationView;
