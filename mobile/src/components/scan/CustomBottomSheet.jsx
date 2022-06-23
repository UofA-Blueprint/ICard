import React, {useCallback, useMemo, useRef, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import QRCodeScanner from 'react-native-qrcode-scanner';
import CaptureMarker from '../components/CaptureMarker';

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
      <View style={styles.container}>
        <QRCodeScanner
          containerStyle={styles.scannerContainer}
          cameraContainerStyle={styles.cameraContainer}
          cameraStyle={styles.camera}
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
          <View style={styles.contentContainer}>
            <Text>{result}</Text>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  scannerContainer: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
  },
  cameraContainer: {
    height: '100%',
  },
  camera: {
    height: '100%',
  },
});

export default CustomBottomSheet;
