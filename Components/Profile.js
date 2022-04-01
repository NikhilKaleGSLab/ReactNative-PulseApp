import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import Map from './Map';

const Profile = ({route}) => {
  const {image, name, id, location, phone, lat, long} = route.params;

  return (
    <View>
      <View style={styles.infoContainer}>
        <Image style={styles.image} source={{uri: image}} />
        <Text style={styles.empName}>{name}</Text>
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.lightText}>Id</Text>
          <Text style={styles.mainText}>{id}</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.lightText}>Location</Text>
          <Text style={styles.mainText}>{location}</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.lightText}>Phone</Text>
          <Text style={styles.mainText}>{phone}</Text>
        </View>
      </View>

      <Map lat={lat} long={long} image={image} location={location} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  infoContainer: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#d1d1d1',
  },

  image: {
    width: 120,
    height: 120,
  },

  empName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: 'bold',
  },

  wrapper: {
    paddingHorizontal: 18,
    paddingVertical: 7,
    borderBottomWidth: 1.5,
    borderBottomColor: '#d1d1d1',
  },

  lightText: {
    fontWeight: '300',
    fontSize: 16,
  },

  mainText: {
    fontSize: 21,
    fontWeight: '400',
  },
});
