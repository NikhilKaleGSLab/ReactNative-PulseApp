import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const CovidUpdates = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText1}>COVID-19</Text>
          <Text style={styles.titleText2}>Updates</Text>
        </View>

        <View style={styles.mainSection}>
          <Text style={styles.subPoints}>
            Coronavirus disease (COVID-19) is an infectious disease caused by a
            newly discovered coronavirus. Most people infected with the COVID-19
            virus will experience mild to moderate respiratory illness and
            recover without requiring special treatment. Older people, and those
            with underlying medical problems like cardiovascular disease,
            diabetes, chronic respiratory disease, and cancer are more likely to
            develop serious illness.
          </Text>
          <Text style={styles.subPoints}>
            The best way to prevent and slow down transmission is to be well
            informed about the COVID-19 virus, the disease it causes and how it
            spreads. Protect yourself and others from infection by washing your
            hands or using an alcohol based rub frequently and not touching your
            face
          </Text>
          <Text style={styles.subPoints}>
            The COVID-19 virus spreads primarily through droplets of saliva or
            discharge from the nose when an infected person coughs or sneezes,
            so it’s important that you also practice respiratory etiquette (for
            example, by coughing into a flexed elbow).
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CovidUpdates;

const styles = StyleSheet.create({
  titleWrapper: {
    paddingVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#575551',
  },

  titleText1: {
    fontSize: 40,
    color: '#FFF',
    letterSpacing: 3,
    fontWeight: '300',
  },

  titleText2: {
    fontSize: 35,
    color: '#FFF',
    letterSpacing: 3,
    fontWeight: '300',
  },

  mainSection: {
    flex: 1,
    padding: 30,
  },

  subPoints: {
    fontSize: 18,
    marginBottom: 15,
  },
});
