import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
=======
<<<<<<< HEAD
=======
>>>>>>> 41c6b75 (Fixed conflict)
import {View, Text, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';
>>>>>>> 567cc26 (Fixed conflict)
import {colors, globalStyleSheet} from '../../utilites/Theme';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

const DiscoverBar = () => {
  return (
    <View style={styles.DiscoverRow}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => Linking.openURL('https://isa.ualberta.ca/')}>
        <Image
          source={require('../../../assets/Website.png')}
          style={styles.image}
        />
=======
=======
>>>>>>> cbd9915 (Put the home page together)
import Svg, { Path } from "react-native-svg"
=======
import Events from "../../../assets/Events"
import Website from "../../../assets/Website"
>>>>>>> 4e85c96 (Moved svg to seperate files)
=======
import Events from "../../../assets/Events"
import Website from "../../../assets/Website"
=======
import Events from "../../../assets/Events"
import Website from "../../../assets/Website"
>>>>>>> cbeefdb (Fixed conflict)
=======

<<<<<<< HEAD

=======
>>>>>>> b25ec7e (created discover bar and welcome title)
>>>>>>> 3b11119 (Fixed merge conflict)
<<<<<<< HEAD
>>>>>>> df5ffde (Fixed conflict)
=======
import Svg, { Path } from "react-native-svg"
>>>>>>> 45a41de (Put the home page together)
=======
import Svg, { Path } from "react-native-svg"
>>>>>>> cbd9915 (Put the home page together)
=======
import Events from "../../../assets/Events"
import Website from "../../../assets/Website"
>>>>>>> 4e85c96 (Moved svg to seperate files)
=======
>>>>>>> cbeefdb (Fixed conflict)
const DiscoverBar = () => {
  return (
    <View style={styles.DiscoverRow}>

      <TouchableOpacity style={styles.container} onPress={() => Linking.openURL('https://isa.ualberta.ca/')}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cbeefdb (Fixed conflict)
      
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <Svg marginTop={6}
=======
        <Svg
>>>>>>> cbd9915 (Put the home page together)
=======
      
<<<<<<< HEAD
        <Svg
>>>>>>> 45a41de (Put the home page together)
=======
        <Svg marginTop={6}
>>>>>>> b47603a (fixed vendor component on home page)
=======
      
        <Svg
>>>>>>> cbd9915 (Put the home page together)
          width={48}
          height={45}
          xmlns="http://www.w3.org/2000/svg">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.911 10c-.57 0-1.116.263-1.518.732-.403.47-.629 1.105-.629 1.768v20c0 .663.226 1.299.629 1.768.402.469.949.732 1.518.732h8.588c.57 0 1.115-.263 1.518-.732.403-.47.629-1.105.629-1.768v-20c0-.663-.226-1.299-.629-1.768-.403-.469-.949-.732-1.518-.732h-8.588Zm6.441 5h-4.294v15h4.294V15Z"
            fill="#2E6933"/>
          <Path
            d="M10.735 10c-.57 0-1.116.263-1.518.732-.403.47-.629 1.105-.629 1.768s.226 1.299.629 1.768c.402.469.949.732 1.518.732h8.588c.57 0 1.116-.263 1.518-.732.403-.47.629-1.105.629-1.768s-.226-1.299-.629-1.768c-.402-.469-.949-.732-1.518-.732h-8.588Zm0 10c-.57 0-1.116.263-1.518.732-.403.47-.629 1.105-.629 1.768s.226 1.299.629 1.768c.402.469.949.732 1.518.732h8.588c.57 0 1.116-.263 1.518-.732.403-.47.629-1.105.629-1.768s-.226-1.299-.629-1.768c-.402-.469-.949-.732-1.518-.732h-8.588ZM8.588 32.5c0-.663.226-1.299.629-1.768.402-.469.949-.732 1.518-.732h8.588c.57 0 1.116.263 1.518.732.403.47.629 1.105.629 1.768s-.226 1.299-.629 1.768c-.402.469-.949.732-1.518.732h-8.588c-.57 0-1.116-.263-1.518-.732-.403-.47-.629-1.105-.629-1.768Z"
            fill="#2E6933"/>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.441 0C4.733 0 3.094.79 1.887 2.197.679 3.603 0 5.51 0 7.5v30c0 1.99.679 3.897 1.887 5.303C3.094 44.21 4.733 45 6.44 45h34.352c1.708 0 3.347-.79 4.554-2.197 1.208-1.406 1.887-3.314 1.887-5.303v-30c0-1.99-.679-3.897-1.887-5.303C44.14.79 42.501 0 40.793 0H6.441Zm34.352 5H6.441c-.57 0-1.116.263-1.518.732-.403.47-.629 1.105-.629 1.768v30c0 .663.226 1.299.629 1.768.402.469.949.732 1.518.732h34.352c.57 0 1.116-.263 1.518-.732.403-.47.629-1.105.629-1.768v-30c0-.663-.226-1.299-.629-1.768C41.91 5.263 41.362 5 40.793 5Z"
            fill="#2E6933"/>
        </Svg>
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <Website/>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4e85c96 (Moved svg to seperate files)
=======
=======
>>>>>>> cbeefdb (Fixed conflict)
=======
<<<<<<< HEAD
      <Image
            source={require('../../../assets/Website.png')}
            style={styles.image}
          />
>>>>>>> 3b11119 (Fixed merge conflict)
<<<<<<< HEAD
>>>>>>> df5ffde (Fixed conflict)
=======
>>>>>>> 45a41de (Put the home page together)
=======
>>>>>>> cbd9915 (Put the home page together)
=======
        <Website/>
>>>>>>> 4e85c96 (Moved svg to seperate files)
=======
>>>>>>> cbeefdb (Fixed conflict)

>>>>>>> 45a41de (Put the home page together)
        <View style={styles.row}>
          <Text style={[globalStyleSheet.text, styles.label]}>
<<<<<<< HEAD
            ISA's Website
=======
          ISA Website
=======
        <Image
          source={require('../../../assets/Website.png')}
          style={styles.image}
        />
        <View style={styles.row}>
          <Text style={[globalStyleSheet.text, styles.label]}>
          ISA's Website
>>>>>>> b25ec7e (created discover bar and welcome title)
<<<<<<< HEAD
>>>>>>> df5ffde (Fixed conflict)
=======
>>>>>>> cbeefdb (Fixed conflict)
          </Text>

          <Image
            source={require('../../../assets/Arrow.png')}
            style={styles.image}
          />

  
        </View>
      </TouchableOpacity>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <TouchableOpacity
        style={styles.container}
        onPress={() => Linking.openURL('https://isa.ualberta.ca/events')}>
        <Image
          source={require('../../../assets/Events.png')}
          style={styles.image}
        />
=======
      <TouchableOpacity style={styles.container} onPress={() => Linking.openURL('https://isa.ualberta.ca/events')}>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <Svg marginTop={6}
=======
      <TouchableOpacity style={styles.container} onPress={() => Linking.openURL('https://isa.ualberta.ca/events')}>

<<<<<<< HEAD
        <Svg
>>>>>>> cbd9915 (Put the home page together)
=======
        <Svg
>>>>>>> 45a41de (Put the home page together)
=======
        <Svg marginTop={6}
>>>>>>> b47603a (fixed vendor component on home page)
=======
      <TouchableOpacity style={styles.container} onPress={() => Linking.openURL('https://isa.ualberta.ca/events')}>

        <Svg
>>>>>>> cbd9915 (Put the home page together)
          width={48}
          height={45}
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M36.738 20.25H10.496v4.5h26.242v-4.5ZM41.986 4.5h-2.624V0h-5.248v4.5H13.12V0H7.872v4.5H5.248C2.335 4.5.026 6.525.026 9L0 40.5c0 1.194.553 2.338 1.537 3.182.984.844 2.32 1.318 3.711 1.318h36.738c2.886 0 5.248-2.025 5.248-4.5V9c0-2.475-2.362-4.5-5.248-4.5Zm0 36H5.248V15.75h36.738V40.5Zm-13.12-11.25h-18.37v4.5h18.37v-4.5Z"
            fill="#2E6933"/>
        </Svg>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 45a41de (Put the home page together)
=======
>>>>>>> cbd9915 (Put the home page together)
=======
        <Events/>
>>>>>>> 4e85c96 (Moved svg to seperate files)
=======
>>>>>>> cbd9915 (Put the home page together)
=======
        <Events/>
>>>>>>> 4e85c96 (Moved svg to seperate files)

        <View style={styles.row}>
<<<<<<< HEAD
          <Text style={[globalStyleSheet.text, styles.label]}>Events</Text>
=======
          <Text style={[globalStyleSheet.text, styles.label]}>
          Events
=======
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {colors, globalStyleSheet} from '../../utilites/Theme';
<<<<<<< HEAD

const DiscoverBar = () => {
  return (
    <View style={styles.DiscoverRow}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => Linking.openURL('https://isa.ualberta.ca/')}>
        <Image
          source={require('../../../assets/Website.png')}
          style={styles.image}
        />
=======
import Svg, { Path } from "react-native-svg"
const DiscoverBar = () => {
  return (
    <View style={styles.DiscoverRow}>

      <TouchableOpacity style={styles.container} onPress={() => Linking.openURL('https://isa.ualberta.ca/')}>
      
        <Svg
          width={48}
          height={45}
          xmlns="http://www.w3.org/2000/svg">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.911 10c-.57 0-1.116.263-1.518.732-.403.47-.629 1.105-.629 1.768v20c0 .663.226 1.299.629 1.768.402.469.949.732 1.518.732h8.588c.57 0 1.115-.263 1.518-.732.403-.47.629-1.105.629-1.768v-20c0-.663-.226-1.299-.629-1.768-.403-.469-.949-.732-1.518-.732h-8.588Zm6.441 5h-4.294v15h4.294V15Z"
            fill="#2E6933"/>
          <Path
            d="M10.735 10c-.57 0-1.116.263-1.518.732-.403.47-.629 1.105-.629 1.768s.226 1.299.629 1.768c.402.469.949.732 1.518.732h8.588c.57 0 1.116-.263 1.518-.732.403-.47.629-1.105.629-1.768s-.226-1.299-.629-1.768c-.402-.469-.949-.732-1.518-.732h-8.588Zm0 10c-.57 0-1.116.263-1.518.732-.403.47-.629 1.105-.629 1.768s.226 1.299.629 1.768c.402.469.949.732 1.518.732h8.588c.57 0 1.116-.263 1.518-.732.403-.47.629-1.105.629-1.768s-.226-1.299-.629-1.768c-.402-.469-.949-.732-1.518-.732h-8.588ZM8.588 32.5c0-.663.226-1.299.629-1.768.402-.469.949-.732 1.518-.732h8.588c.57 0 1.116.263 1.518.732.403.47.629 1.105.629 1.768s-.226 1.299-.629 1.768c-.402.469-.949.732-1.518.732h-8.588c-.57 0-1.116-.263-1.518-.732-.403-.47-.629-1.105-.629-1.768Z"
            fill="#2E6933"/>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.441 0C4.733 0 3.094.79 1.887 2.197.679 3.603 0 5.51 0 7.5v30c0 1.99.679 3.897 1.887 5.303C3.094 44.21 4.733 45 6.44 45h34.352c1.708 0 3.347-.79 4.554-2.197 1.208-1.406 1.887-3.314 1.887-5.303v-30c0-1.99-.679-3.897-1.887-5.303C44.14.79 42.501 0 40.793 0H6.441Zm34.352 5H6.441c-.57 0-1.116.263-1.518.732-.403.47-.629 1.105-.629 1.768v30c0 .663.226 1.299.629 1.768.402.469.949.732 1.518.732h34.352c.57 0 1.116-.263 1.518-.732.403-.47.629-1.105.629-1.768v-30c0-.663-.226-1.299-.629-1.768C41.91 5.263 41.362 5 40.793 5Z"
            fill="#2E6933"/>
        </Svg>

>>>>>>> 45a41de (Put the home page together)
        <View style={styles.row}>
          <Text style={[globalStyleSheet.text, styles.label]}>
            ISA's Website
>>>>>>> 3ff578c (Added discovery bar)
          </Text>

>>>>>>> 567cc26 (Fixed conflict)
          <Image
            source={require('../../../assets/Arrow.png')}
            style={styles.image}
          />

  
        </View>
      </TouchableOpacity>
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
      <TouchableOpacity
        style={styles.container}
        onPress={() => Linking.openURL('https://isa.ualberta.ca/events')}>
        <Image
          source={require('../../../assets/Events.png')}
          style={styles.image}
        />
=======
>>>>>>> 45a41de (Put the home page together)

        <View style={styles.row}>
          <Text style={[globalStyleSheet.text, styles.label]}>Events</Text>

          <Image
            source={require('../../../assets/Arrow.png')}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
<<<<<<< HEAD
>>>>>>> 3ff578c (Added discovery bar)
>>>>>>> 567cc26 (Fixed conflict)
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> b6f9aa8 (Fixed conflict)
      <TouchableOpacity
        style={styles.container}
        onPress={() => Linking.openURL('https://isa.ualberta.ca/events')}>
        <Image
          source={require('../../../assets/Events.png')}
          style={styles.image}
        />
=======
      <TouchableOpacity style={styles.container} onPress={() => Linking.openURL('https://isa.ualberta.ca/events')}>

        <Svg
          width={48}
          height={45}
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M36.738 20.25H10.496v4.5h26.242v-4.5ZM41.986 4.5h-2.624V0h-5.248v4.5H13.12V0H7.872v4.5H5.248C2.335 4.5.026 6.525.026 9L0 40.5c0 1.194.553 2.338 1.537 3.182.984.844 2.32 1.318 3.711 1.318h36.738c2.886 0 5.248-2.025 5.248-4.5V9c0-2.475-2.362-4.5-5.248-4.5Zm0 36H5.248V15.75h36.738V40.5Zm-13.12-11.25h-18.37v4.5h18.37v-4.5Z"
            fill="#2E6933"/>
        </Svg>
>>>>>>> 45a41de (Put the home page together)

        <View style={styles.row}>
          <Text style={[globalStyleSheet.text, styles.label]}>Events</Text>

          <Image
            source={require('../../../assets/Arrow.png')}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
>>>>>>> 3ff578c (Added discovery bar)
>>>>>>> 41c6b75 (Fixed conflict)
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
<<<<<<< HEAD
    backgroundColor: colors.lightGray,
    borderRadius: 15,
<<<<<<< HEAD
<<<<<<< HEAD
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
=======
=======
>>>>>>> 41c6b75 (Fixed conflict)
=======
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3ff578c (Added discovery bar)
<<<<<<< HEAD
>>>>>>> 567cc26 (Fixed conflict)
=======
=======
>>>>>>> b25ec7e (created discover bar and welcome title)
>>>>>>> 3b11119 (Fixed merge conflict)
>>>>>>> df5ffde (Fixed conflict)
=======
>>>>>>> 3ff578c (Added discovery bar)
>>>>>>> 41c6b75 (Fixed conflict)
=======
>>>>>>> 3ff578c (Added discovery bar)
=======
>>>>>>> b25ec7e (created discover bar and welcome title)
>>>>>>> 3b11119 (Fixed merge conflict)
>>>>>>> cbeefdb (Fixed conflict)
    marginTop: 8,
    marginRight: 16,
    flexGrow: 1,
    alignItems: 'center',
    flex: 1,
<<<<<<< HEAD
<<<<<<< HEAD
    shadowColor: '#000',
=======
<<<<<<< HEAD
=======
>>>>>>> 41c6b75 (Fixed conflict)
    shadowColor: "#000",
>>>>>>> 567cc26 (Fixed conflict)
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    elevation: 5,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> b25ec7e (created discover bar and welcome title)
>>>>>>> df5ffde (Fixed conflict)
=======
=======
>>>>>>> b25ec7e (created discover bar and welcome title)
>>>>>>> cbeefdb (Fixed conflict)

=======
>>>>>>> 3ff578c (Added discovery bar)
<<<<<<< HEAD
>>>>>>> 567cc26 (Fixed conflict)
=======
>>>>>>> 41c6b75 (Fixed conflict)
  },
  label: {
    fontSize: 16,
    color: colors.darkGray,
  },
  DiscoverRow: {
    flexDirection: 'row',
    marginLeft: 24,
    marginRight: 8,
    justifyContent: 'space-between',
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    
=======
>>>>>>> 3ff578c (Added discovery bar)
>>>>>>> 567cc26 (Fixed conflict)
=======
    
=======
>>>>>>> 3ff578c (Added discovery bar)
>>>>>>> 41c6b75 (Fixed conflict)
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    
=======
>>>>>>> 3ff578c (Added discovery bar)
>>>>>>> 567cc26 (Fixed conflict)
=======
    
=======
>>>>>>> 3ff578c (Added discovery bar)
>>>>>>> 41c6b75 (Fixed conflict)
  },
  image: {
    marginTop: 7,
    marginLeft: 4.2,
  },
});

<<<<<<< HEAD
export default DiscoverBar;
=======
<<<<<<< HEAD
<<<<<<< HEAD
export default DiscoverBar;
=======
export default DiscoverBar;
>>>>>>> 3ff578c (Added discovery bar)
>>>>>>> 567cc26 (Fixed conflict)
=======
export default DiscoverBar;
>>>>>>> 3ff578c (Added discovery bar)
>>>>>>> 41c6b75 (Fixed conflict)
