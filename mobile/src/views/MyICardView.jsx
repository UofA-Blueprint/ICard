import {View, Image, StyleSheet} from 'react-native';
import Header from '../components/shared/Header';

import {colors, globalStyleSheet} from '../utilites/Theme';

const MyICardView = props => {
  return (
    <View styles={globalStyleSheet.container}>
      <Header />
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={require('../../assets/avatar-unknown.png')} />
          <Text>Name</Text>
          <Text>ISAF Status</Text>
          <Text>Status</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  card: {},
  avatar: {},
  userName: {},
  userStatus: {},
});

export default MyICardView;
