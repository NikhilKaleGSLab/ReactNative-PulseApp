import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
const logo = require('../images/gslab.jpg');

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.img} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Pulse by GSLab</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: 225,
    height: 225,
  },

  textContainer: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 18,
  },
});
