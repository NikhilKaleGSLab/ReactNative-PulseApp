import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SubTitle from './SubTitle';

const IncidentReport = () => {
  return (
    <View>
      <SubTitle title="INCIDENT TYPE" />
      <Picker>
        <Picker.Item label="Select incident type" value="type" />
        <Picker.Item label="Security breach" value="breach" />
        <Picker.Item label="Facility" value="facility" />
        <Picker.Item label="Posh" value="posh" />
        <Picker.Item label="Accident/Emergency" value="accident" />
      </Picker>
    </View>
  );
};

export default IncidentReport;

const styles = StyleSheet.create({});
