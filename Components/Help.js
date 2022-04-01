import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';

const Help = () => {
  return (
    <View>
      <View style={styles.card}>
        <Image
          source={require('../images/logo.png')}
          style={styles.image}></Image>
        <View style={styles.creator}>
          <Text style={styles.helpTitle}>Pulse calender sharing</Text>
          <Text style={styles.helpMessage}>
            This video demonstrates the step to share the calender
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../images/logo.png')}
          style={styles.image}></Image>
        <View style={styles.creator}>
          <Text style={styles.helpTitle}>Send brodcast message</Text>
          <Text style={styles.helpMessage}>
            This video demonstrates the step to send a brodcast message
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../images/logo.png')}
          style={styles.image}></Image>
        <View style={styles.creator}>
          <Text style={styles.helpTitle}>Problem recieving notification</Text>
          <Text style={styles.helpMessage}>
            Explanation for how to solve push notification problem
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../images/logo.png')}
          style={styles.image}></Image>
        <View style={styles.creator}>
          <Text style={styles.helpTitle}>How to book lunch</Text>
          <Text style={styles.helpMessage}>
            This video demonstrates how to Book/Update/Cancel meal
          </Text>
        </View>
      </View>
      <View style={styles.btncontainer}>
        <Button title="Contact Us" />
      </View>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.6,
  },

  creator: {
    marginLeft: 6,
  },

  helpTitle: {
    fontWeight: 'bold',
    color: '#556067',
  },

  helpMessage: {
    fontSize: 12,
    color: '#787c7d',
  },

  image: {
    width: 40,
    height: 40,
  },

  btncontainer: {
    height: '64%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
