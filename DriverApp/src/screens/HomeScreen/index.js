import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, Pressable } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import styles from './styles.js'
// import MapViewDirections from 'react-native-maps-directions';
import Entypo from "react-native-vector-icons/Entypo";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import styles from './styles.js'
// import NewOrderPopup from "../../components/NewOrderPopup";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = 'AIzaSyA5VWIifqHFf9PuEpxXUUr72KgJa7lbQek';


const HomeScreen = () => {
  const [isOnline, setIsOnline] = useState(false);
  const onGoPress = () => {
    setIsOnline(!isOnline);
  }
    return (
    <View>
     <MapView

        style={{width: '100%', height: Dimensions.get('window').height - 120}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        // onUserLocationChange={onUserLocationChange}
        initialRegion={{
          latitude: 28.450627,    
          longitude: -16.263045,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}
      >
        {/* {order && ( */}
          <MapViewDirections
            origin={origin}
            // onReady={onDirectionFound}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor="black"
          />
        {/* ) */}
        {/* } */}
      </MapView>

      <Pressable
        onPress={() => console.warn('Balance')}
        style={styles.balanceButton}>
        <Text style={styles.balanceText}>
          <Text style={{ color: 'green' }}>$</Text>
          {' '}
          0.00
        </Text>
      </Pressable>

      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, {top: 10, left: 10}]}>
        <Entypo name={"menu"} size={24} color="#4a4a4a"/>
      </Pressable>

      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, {top: 10, right: 10}]}>
        <Entypo name={"menu"} size={24} color="#4a4a4a"/>
      </Pressable>

      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, {bottom: 110, left: 10}]}>
        <Entypo name={"menu"} size={24} color="#4a4a4a"/>
      </Pressable>

      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, {bottom: 110, right: 10}]}>
        <Entypo name={"menu"} size={24} color="#4a4a4a"/>
      </Pressable>

      <Pressable
        onPress={onGoPress}
        style={styles.goButton}>
        <Text style={styles.goText}>
          {isOnline ? 'END' : 'GO'}
        </Text>
      </Pressable>

      <View style={styles.bottomContainer}>
        <Entypo name="menu" size={24} color="#4a4a4a"/>
        {
          isOnline ?  <Text style={styles.bottomText}>You are online </Text> :
          <Text style={styles.bottomText}>You are offline </Text>
        }
        {/* <Text style={styles.bottomText}>You are offline </Text> */}
        <Entypo name="menu" size={24} color="#4a4a4a"/>
      </View>
    </View>
  );
};

export default HomeScreen;
