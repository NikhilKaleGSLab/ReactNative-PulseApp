import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import SubTitle from './SubTitle';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import {setDate, setEnds, setTitle} from '../redux/actions/employeeActions';
import PickerItem from './PickerItem';

const RoomBook = ({navigation}) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // text input state

  const text = useSelector(state => state.meetingsData.title);
  const date = useSelector(state => state.meetingsData.starts);
  const selectedTime = useSelector(state => state.meetingsData.ends);

  const findSelected = selectedTime.filter(item => {
    return item.defaultValue === true;
  });

  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');

  const dispatch = useDispatch();

  const [selectedRepeat, setSelectedRepeat] = useState('Never');
  const [selectedRoom, setSelectedRoom] = useState('None');

  const onChangeHandler = (e, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    dispatch(setDate(currentDate));
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <SubTitle title="MEETING TITLE" />
        <View style={styles.inputText}>
          <TextInput
            placeholder="Enter Name"
            value={text}
            onChangeText={value => dispatch(setTitle(value))}
          />
        </View>
        <SubTitle title="WHEN" />
        <View>
          <View style={[styles.regular, styles.firstPart]}>
            <Text>Starts</Text>
            <View style={styles.dateTiemWrapper}>
              <View>
                <Text onPress={() => showDatepicker()}>{`${
                  months[date.getMonth()]
                } ${date.getDate()}, ${date.getFullYear()}`}</Text>
              </View>

              <View>
                <Text onPress={() => showTimepicker()}>
                  {moment(date, ['HH.mm']).format('hh:mm A')}
                </Text>
              </View>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  mode={mode}
                  value={date}
                  display="default"
                  onChange={onChangeHandler}
                  is24Hour={true}
                />
              )}
            </View>
          </View>
        </View>

        <View style={styles.regular}>
          <Text>Ends In</Text>
          <PickerItem
            data={selectedTime}
            styles={styles}
            findSelected={findSelected}
          />
        </View>

        <View style={styles.regular}>
          <Text>Repeat</Text>
          <Picker
            style={styles.picker}
            selectedValue={selectedRepeat}
            onValueChange={itemValue => setSelectedRepeat(itemValue)}>
            <Picker.Item label="Never" value="never" />
            <Picker.Item label="Daily" value="daily" />
            <Picker.Item label="Weekly" value="weekly" />
            <Picker.Item label="Monthly" value="monthly" />
            <Picker.Item label="Yearly" value="yearly" />
          </Picker>
        </View>

        <SubTitle title="WITH WHOM AND WHERE" />
        <View style={[styles.regular, styles.invites]}>
          <Text>Invites</Text>
          <View style={styles.rightPart}>
            <Text>None</Text>
            <Icon
              name="keyboard-arrow-right"
              size={20}
              onPress={() => navigation.navigate('Invitees')}
            />
          </View>
        </View>

        <View style={styles.regular}>
          <Text>Room</Text>
          <Picker
            style={styles.picker}
            selectedValue={selectedRoom}
            onValueChange={itemValue => setSelectedRoom(itemValue)}>
            <Picker.Item label="None" value="none" />
            <Picker.Item label="Chandryaan" value="chandryaan" />
            <Picker.Item label="Pragati With Projector" value="projector" />
          </Picker>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RoomBook;

const styles = StyleSheet.create({
  inputText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  regular: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
  },

  invites: {
    paddingVertical: 10,
  },

  rightPart: {
    width: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingEnd: 10,
    paddingVertical: 5,
  },

  firstPart: {
    paddingVertical: 12,
  },

  dateTiemWrapper: {
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 2,
  },

  picker: {
    width: 160,
  },
});
