import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ContactCard = ({name, role, img}) => {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <Image source={{uri: img}} style={styles.image}></Image>
        <View style={styles.creator}>
          <Text style={styles.empName}>{name}</Text>
          <Text style={styles.empRole}>{role}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Icon name="keyboard-arrow-right" size={30} />
      </View>
    </View>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    marginBottom: 5,
    padding: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.6,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  creator: {
    marginLeft: 4,
  },

  empName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
  },

  empRole: {
    fontSize: 14,
    letterSpacing: 0.5,
  },

  image: {
    width: 55,
    height: 55,
    marginBottom: 1,
  },
});
