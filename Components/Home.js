import React, {useState} from 'react';
import {FlatList, StyleSheet, View, TouchableHighlight} from 'react-native';

import Card from './Card';

const Home = ({navigation}) => {
  const [data, setData] = useState([
    {
      id: 1,
      iconName: 'coronavirus',
      title: 'Covid-19 Updates',
      pageName: 'Covid19 Updates',
    },
    {
      id: 2,
      iconName: 'lunch-dining',
      title: 'Snacks/Lunch Booking',
    },
    {
      id: 3,
      iconName: 'person-search',
      title: 'Employee Contact Details',
      pageName: 'Employee List',
    },
    {
      id: 4,
      iconName: 'calendar-today',
      title: 'Conference Room Booking',
      pageName: 'Book Room',
    },
    {
      id: 5,
      iconName: 'report',
      title: 'Report An Incident',
      pageName: 'Incident Report',
    },
    {
      id: 6,
      iconName: 'help-outline',
      title: 'Help',
      pageName: 'Help',
    },
    {
      id: 7,
      iconName: 'settings',
      title: 'Helpdesk Ticket',
    },
  ]);

  return (
    <View style={styles.cardList}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableHighlight
            activeOpacity={0.7}
            underlayColor="#fff"
            onPress={() => navigation.navigate(item.pageName)}>
            <Card title={item.title} iconName={item.iconName} />
          </TouchableHighlight>
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  cardList: {
    width: '100%',
    padding: 10,
    backgroundColor: '#f4fafa',
    height: '100%',
  },
});
