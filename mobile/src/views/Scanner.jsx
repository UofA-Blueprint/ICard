'use strict';

import React, {Component} from 'react';
import CaptureMarker from '../components/CaptureMarker';
import {Icon} from '@rneui/themed';

import {AppRegistry, Dimensions, View} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

class Scanner extends Component {
  onSuccess = e => {
    console.log(e.data);
  };

  render() {
    return (
      <View style={{flex: 1, position: 'relative'}}>
        <QRCodeScanner
          onRead={this.onSuccess}
          flashMode={RNCamera.Constants.FlashMode.auto}
          showMarker={true}
          customMarker={<CaptureMarker />}
          topContent={
            <Icon name="arrow-back" type="material" color="#517fa4" />
          }
          cameraContainerStyle={{height: Dimensions.get('window').heigth}}
          cameraStyle={{height: '100%'}}></QRCodeScanner>
      </View>
    );
  }
}

AppRegistry.registerComponent('default', () => Scanner);

export default Scanner;
