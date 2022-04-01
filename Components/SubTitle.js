import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SubTitle = ({title}) => {
  return (
    <View style={styles.design}>
      <Text>{title}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  design: {
    backgroundColor: '#dfe9eb',
    padding: 14,
  },
});
