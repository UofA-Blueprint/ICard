import React from 'react';
import {View, StyleSheet, Text, Image, ImageBackground,} from 'react-native';

const Step = (props) => {
  return (
    <View>
    <ImageBackground source={require('../../../assets/phone.png')} style={styles.background}>
    <View flexDirection='row'>
        <View>
        <Text style={styles.step}>{props.step}</Text>
        <Text style={styles.body}>{props.text}</Text>
        </View>
        <Image source={props.screen} style={styles.image}></Image>
    </View>
    </ImageBackground>
    <Image source={props.bubbles} style={styles.bubble}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
    background: {
        width: 288,
        height: 328,
        marginTop: 32,
        marginLeft: 3,
    },
    image: {
        width: 108,
        height: 224,
        marginTop: 53,
        position: 'absolute',
        marginLeft: 161,
    },
    step: {
        marginLeft: 16,
        marginTop: 16,
        fontSize: 18,
        fontWeight: '600',
    },
    body: {
        marginLeft: 16,
        marginTop: 16,
        fontSize: 15,
        fontWeight: '400',
        width: 120,
    },
    bubble: {
        width: 67,
        height: 10,
        marginLeft: 115,
        marginTop: 77,
    },
});

export default Step;