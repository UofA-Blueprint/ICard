import React, {useCallback, useMemo, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import QRCodeScanner from 'react-native-qrcode-scanner';
import CaptureMarker from './CaptureMarker';
import {globalStyleSheet} from '../share/Theme';

const CustomBottomSheet = () => {
  // result Text
  const [result, setResult] = useState('');

  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const scannerRef = useRef(null);
  // callbacks
  const onSuccess = useCallback(e => {
    setResult(e.data);
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);
  const onCloseModal = useCallback(() => {
    scannerRef.current?.reactivate();
  }, []);

  // renders
  return (
    <BottomSheetModalProvider>
      <View style={globalStyleSheet.fullScreen}>
        <QRCodeScanner
          containerStyle={globalStyleSheet.fullScreen}
          cameraContainerStyle={globalStyleSheet.fullScreen}
          cameraStyle={globalStyleSheet.fullScreen}
          ref={scannerRef}
          onRead={onSuccess}
          showMarker
          customMarker={<CaptureMarker />}
        />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onDismiss={onCloseModal}
          onChange={handleSheetChanges}>
          <View style={globalStyleSheet.container}>
            <Text>{result}</Text>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default CustomBottomSheet;
