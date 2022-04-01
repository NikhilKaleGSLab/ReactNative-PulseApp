import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ContactCard from './ContactCard';
import {useSelector, useDispatch} from 'react-redux';
import {
  setEmployees,
  setFilterEmployees,
} from '../redux/actions/employeeActions';

const ContactDetails = ({navigation}) => {
  const employees = useSelector(state => state.allEmployees.employees);
  const filterData = useSelector(state => state.allEmployees.filterEmployees);
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const response = await axios
      .get('http://10.0.2.2:3000/employee')
      .catch(err => console.log(err));

    if (response && response.data) {
      dispatch(setEmployees(response.data));
    }
  };

  const handleChange = value => {
    setText(value);

    if (text !== '') {
      const newEmployee = employees.filter(emp => {
        return emp.name.toLowerCase().includes(value);
      });
      dispatch(setFilterEmployees(newEmployee));
    } else {
      dispatch(setFilterEmployees(employees));
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.searchSection}>
          <Icon name="search" style={styles.searchIcon} size={20} />
          <TextInput
            placeholder="Search"
            style={styles.searchbar}
            onChangeText={handleChange}
            value={text}
          />
        </View>

        <View style={styles.contactList}>
          <FlatList
            data={text.length < 1 ? employees : filterData}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.push('Profile', item)}>
                <ContactCard
                  name={item.name}
                  role={item.field}
                  img={item.image}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactDetails;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 10,
  },

  searchSection: {
    marginHorizontal: 10,
    position: 'relative',
  },

  searchIcon: {
    position: 'absolute',
    zIndex: 1,
    top: 14,
    left: 14,
  },
  searchbar: {
    backgroundColor: '#d9dcde',
    borderRadius: 50,
    paddingLeft: 40,
  },

  contactList: {
    marginTop: 30,
    flex: 1,
  },
});
