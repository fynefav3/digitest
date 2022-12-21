import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const AddBank = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Access', value: 'Access'},
    {label: 'Keystone', value: 'Keystone'},
   
  ]);
  return (
    <View style={{display: 'flex', flexDirection: 'column', padding: 20}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: '500',
          marginBottom: 10,
        }}>
        Add New Bank
      </Text>
      <View style={{display: 'flex', flexDirection: 'colum'}}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            marginBottom: 10,
            color: '#616165',
          }}>
          Account Number
        </Text>
      </View>
      <TextInput
        style={{
          height: 40,
          marginBottom: 20,
          borderWidth: 1,
          borderRadius: 7,
          borderColor: '#767E80',
        }}
        // onChangeText={onChangeText}
        // value={text}
      />
      <Text
        style={{
          fontSize: 14,
          fontWeight: '500',
          marginBottom: 10,
          color: '#616165',
        }}>
        Bank Name
      </Text>
      <View
        style={{display: 'flex', flexDirection: 'row', width: 350, height: 40}}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
      <View
        style={{
          height: 43,
          width: '100%',
          backgroundColor: '#1293A9',
          borderRadius: 7,
          marginTop: 100,
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: '#1293A9',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            color: '#ffffff',
            textAlign: 'center',
          }}>
          Add Bank
        </Text>
      </View>
      <View
        style={{
          height: 43,
          width: '100%',
          backgroundColor: '#cccccc',
          borderRadius: 7,
          marginTop: 20,
          justifyContent: 'center',
         
       
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            color: '#ffffff',
            textAlign: 'center',
          }}>
        Cancel
        </Text>
      </View>
    </View>
  );
};

export default AddBank;

const styles = StyleSheet.create({});
