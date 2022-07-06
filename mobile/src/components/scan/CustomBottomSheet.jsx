import React, {useCallback, useMemo, useRef, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {BarCodeScanner} from 'expo-barcode-scanner';
import CaptureMarker from './ScannerForeground';

import {globalStyleSheet} from '../../utilites/Theme';

const CustomBottomSheet = () => {
  /*
  Create an Bottom Sheet that encompass a Bar Code Scanner View.
  The Bottom Sheet wraps around a Camera View, a Custom Marker that 
  is absolutely positioned, and a Modal which display the result of the scan.
  */

  // Declare a Bottom Sheet Ref
  const bottomSheetModalRef = useRef(null);

  // Snapping Points for Bottom Sheet
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // Scan Result
  const [result, setResult] = useState('');

  // Permission to use Camera
  const [hasPermission, setHasPermission] = useState(null);

  // State of the scan
  const [scanned, setScanned] = useState(false);

  // Ask for permission
  useEffect(() => {
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // On successful scan
  const handleBarCodeScanned = ({type, data}) => {
    setScanned(true);
    setResult(data);
    bottomSheetModalRef.current?.present();
  };

  // Dismiss Bottom Sheet
  const onCloseModal = useCallback(() => {
    setScanned(false);
  }, []);

  // If no permission is given, display a blank screen

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // renders
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        <CaptureMarker />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onDismiss={onCloseModal}
          onChange={() => {}}>
          <View style={globalStyleSheet.container}>
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
  },
});

export default CustomBottomSheet;
