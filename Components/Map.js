import React from 'react';
import MapView, {Callout, Marker} from 'react-native-maps';
import {StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Map = ({lat, long, image, location}) => {
  return (
    <MapView
      style={styles.maps}
      initialRegion={{
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <Marker
        coordinate={{
          latitude: lat,
          longitude: long,
        }}
        image={require('../images/marker.png')}>
        <Callout tooltip>
          <View style={styles.bubble}>
            <Text style={styles.name}>Location</Text>
            <Text style={{marginBottom: 5, fontSize: 16}}>{location}</Text>
            {/* <Icon name="user-circle" size={40} /> */}
            <Text
              style={{
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 0,
              }}>
              <Image source={{uri: image}} style={styles.img} />
            </Text>
            {/* <Image
              source={require('../images/marker.png')}
              style={styles.img}
            /> */}
          </View>
          <View style={styles.arrowBorder}></View>
          <View style={styles.arrow}></View>
        </Callout>
      </Marker>
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  maps: {
    width: '100%',
    height: '40%',
  },

  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 10,
    width: 150,
  },

  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },

  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },

  name: {
    fontSize: 18,
    marginBottom: 4,
  },

  img: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
});
