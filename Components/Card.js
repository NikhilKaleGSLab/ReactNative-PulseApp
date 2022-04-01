import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Card = ({title, iconName}) => {
  return (
    <View style={[styles.card, styles.boxWithShadow]}>
      <View style={styles.wrapper}>
        <View>
          <Icon name={iconName} size={50} style={styles.iconColor} />
        </View>
        <View style={styles.titleText}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: '#FFF',
    margin: 10,
    marginVertical: 8,
    width: 170,
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  boxWithShadow: {
    elevation: 8,
  },

  wrapper: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '75%',
    width: '90%',
  },

  iconColor: {
    color: '#bec7ca',
    fontWeight: '300',
  },

  titleText: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 18,
    color: '#95a4a9',
    marginTop: 10,
  },
});
