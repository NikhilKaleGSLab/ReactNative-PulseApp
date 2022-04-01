import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  FlatList,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import {
  setEmployees,
  setFilterEmployees,
} from '../redux/actions/employeeActions';

const Invitees = () => {
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
        return emp.email.toLowerCase().includes(value);
      });
      dispatch(setFilterEmployees(newEmployee));
    } else {
      dispatch(setFilterEmployees(employees));
    }
  };

  const onChecked = id => {
    const data = [...employees];

    const findEmpIndex = data.findIndex(emp => emp.id === id);

    data[findEmpIndex].checked = !data[findEmpIndex].checked;

    console.log(data);
    setEmployees(data);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.searchSection}>
          <Icon name="search" style={styles.searchIcon} size={30} />
          <TextInput
            placeholder="Tap to add recipents"
            style={styles.searchbar}
            onChangeText={handleChange}
            value={text}
          />
        </View>

        <View style={styles.emailList}>
          <FlatList
            data={text.length < 1 ? employees : filterData}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <TouchableOpacity
                key={item.id}
                onLongPress={() => onChecked(item.id)}>
                <View style={styles.emailItem}>
                  <Text>{item.email}</Text>
                  <CheckBox
                    value={item.checked}
                    onValueChange={() => onChecked(item.id)}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Invitees;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },

  searchSection: {
    position: 'relative',
    backgroundColor: '#d9dcde',
  },

  searchIcon: {
    position: 'absolute',
    zIndex: 1,
    top: 20,
    left: 16,
  },
  searchbar: {
    backgroundColor: '#d9dcde',
    borderRadius: 50,
    paddingHorizontal: 60,
    paddingVertical: 20,
    fontSize: 18,
  },

  emailList: {
    flex: 1,
  },

  emailItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
