import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
import {useDispatch} from 'react-redux';
import {setEnds} from '../redux/actions/employeeActions';

const PickerItem = ({data, styles, findSelected}) => {
  console.log(findSelected);
  const [defaultEnds, setDefaultEnds] = useState('');

  useEffect(() => {
    setDefaultEnds(findSelected[0].label);
  }, [findSelected]);

  const dispatch = useDispatch();

  console.log('picker', defaultEnds);

  const renderPicker = data.map((item, index) => {
    return <Picker.Item key={index} label={item.label} value={item.value} />;
  });
  return (
    <>
      <Picker
        style={styles.picker}
        selectedValue={defaultEnds}
        onValueChange={itemValue => {
          dispatch(setEnds(itemValue));
        }}>
        {renderPicker}
      </Picker>
    </>
  );
};

export default PickerItem;
