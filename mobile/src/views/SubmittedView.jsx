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
import {colors} from '../utilites/Theme';
import {Ionicons} from '@expo/vector-icons';

const SubmittedView = () => {
  return (
    <ImageBackground
      source={require('../../assets/Background.png')}
      resizeMode="cover"
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.header}>
          <Text style={styles.viewTitle}>Verify Account</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.instruction}>
            Your email has been submitted! Please allow 3-5 business days for
            ISA to verify your account.
          </Text>
          <View>
            <Ionicons name="checkmark-circle-outline" style={styles.ionicon} />

            <Text style={{color: colors.darkGray, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Submitted!</Text>
          </View>
          <Pressable
            style={styles.submitButton}
            onPress={() => {
              console.log('press');
            }}>
            <Text style={styles.submitButtonText}>Discover ISAF Deals</Text>
          </Pressable>
        </View>
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
    paddingTop: 16,
  },
  instruction: {
    fontSize: 18,
    color: colors.darkGray,
    letterSpacing: 0.5,
    lineHeight: 23,
  },
  viewTitle: {fontWeight: 'bold', fontSize: 20},
  body: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 40,
    paddingBottom: 32,
    alignItems: 'center',
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
  submitButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  ionicon: {
    fontSize: 150,
    color: colors.primary,
  },
});

export default SubmittedView;
