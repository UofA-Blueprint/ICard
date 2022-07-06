import React, {useCallback, useMemo, useRef, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {BarCodeScanner} from 'expo-barcode-scanner';
import CaptureMarker from './CaptureMarker';

import {globalStyleSheet} from '../../utilites/Theme';

const CustomBottomSheet = () => {
  // Bottom Sheet Ref
  const bottomSheetModalRef = useRef(null);

  // Snapping Points for Bottom Sheet
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // Scan Result
  const [result, setResult] = useState('');

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({type, data}) => {
    setScanned(true);
    setResult(data);
    bottomSheetModalRef.current?.present();
  };

  // Dismiss Bottom Sheet
  const onCloseModal = useCallback(() => {
    setScanned(false);
  }, []);

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
        <CaptureMarker style={styles.marker} />
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
  marker: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default CustomBottomSheet;
