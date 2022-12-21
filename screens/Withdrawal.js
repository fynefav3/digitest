import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useRef} from 'react';

import RBSheet from 'react-native-raw-bottom-sheet';
import Review from './Review';

const Withdrawal = () => {
  const refRBSheet = useRef();

  const [selected, selectOption] = useState(1);
  const beneficiaries = [
    {
      name: 'Ajalla Ugo',
      number: '9102356712',
      value: 1,
      bank: ' Access bank',
    },
    {
      name: 'Ajalla Ugo',
      number: '9102356712',
      value: 2,
      bank: ' Access bank',
    },
  ];

  const cards = [];

  for (let index = 0; index < beneficiaries.length; index++) {
    const element = beneficiaries[index];

    const myStyle = {
      height: 15,
      width: 15,
      backgroundColor: selected === element.value ? '#1293A9' : 'white',
      borderRadius: 15,
    };

    const parentStyle = {
      height: 78,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      backgroundColor: selected === element.value ? '#E5F4F3' : '#f2f2f2',
      borderRadius: 8,
      paddingHorizontal: 20,
    };

    cards.push(
      <TouchableOpacity
        key={element.value}
        onPress={() => selectOption(element.value)}>
        <View style={parentStyle}>
          <View
            style={{
              height: 15,
              width: 15,
              borderRadius: 12,
              borderWidth: 2,
              padding: 10,
              borderColor: '#D3D0D9',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={myStyle} />
          </View>
          <View
            style={{
              width: 10,
            }}
          />
          <View
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 2,
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: '#616165',
                }}>
                {element.name}
              </Text>
              <View
                style={{
                  height: 3,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: '#656262',
                }}>
                {element.number}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Text>Bank</Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: '#65656A',
                }}>
                {element.bank}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>,
    );
  }

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 80,
        paddingRight: 20,
        paddingLeft: 20,
      }}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
          }}>
          <Image
            source={require('../assets/user.png')}
            style={{height: 49, width: 49}}
          />
          <Text
            style={{
              color: '#616165',
              fontSize: 18,
              fontWeight: '500',
              paddingLeft: 4,
            }}>
            Ajalla Ugo
          </Text>
        </View>

        <Image
          source={require('../assets/notify.png')}
          style={{height: 43, width: 44}}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 44,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: '500', color: '#4F4E52'}}>
          Your Balance
        </Text>
        <Text style={{color: '#3F3D56', paddingLeft: 100}}>N</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
          <Text style={{fontSize: 32, fontWeight: '400', color: '#4F4E52'}}>
            120,000
          </Text>
        </View>
      </View>
      <View style={{display: 'flex', flexDirection: 'column', marginTop: 20}}>
        <Text style={{fontSize: 28, fontWeight: '700', color: '#1293A9'}}>
          Withdraw
        </Text>
        <Text style={{fontSize: 18, fontWeight: '500', color: '#767E80'}}>
          Amount
        </Text>
      </View>
      <View
        style={{
          height: 43,
          width: '100%',
          backgroundColor: '#E5F4F3',
          borderRadius: 7,
          marginTop: 20,
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: '#1293A9',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            color: '#3F3D56',
            textAlign: 'center',
          }}>
          20,000
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'center',
        }}>
        <Text
          style={{fontSize: 14, fontWeight: '500', color: '#767E80', flex: 1}}>
          Select Bank
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Image
            source={require('../assets/add.png')}
            style={{height: 14, width: 14}}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#767E80',
              paddingLeft: 10,
            }}>
            Add New Bank
          </Text>
        </View>
      </View>
      {cards}
      <TouchableOpacity onPress={() => refRBSheet.current.open()}>
        <View
          style={{
            height: 43,
            width: '100%',
            backgroundColor: '#1293A9',
            borderRadius: 7,
            marginTop: 20,
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
            Withdraw
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          height: 43,
          width: '100%',
          backgroundColor: '#CCCCCC',
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
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={550}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000000',
          },
          container: {
            borderRadius: 26,
          },
        }}>
        <Review />
      </RBSheet>
    </View>
  );
};

export default Withdrawal;

const styles = StyleSheet.create({});
