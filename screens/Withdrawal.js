import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Withdrawal = () => {
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
          flexDirection: 'column',
          marginTop: 20,
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 14, fontWeight: '500', color: '#767E80'}}>
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
      <View
        style={{
          width: '100%',
          height: 78,
          backgroundColor: '#E5F4F3',
          marginTop: 20,
          borderRadius: 7
        }}>
        <View style={{display: 'flex', flexDirection: 'column', paddingLeft: 13}}>
          <Text style={{color: '#616165', fontSize: 18, fontWeight: '500'}}>
            Ajalla Ugo
          </Text>
          <Text style={{color: '#616165', fontSize: 12, fontWeight: '400'}}>9102356712</Text>
        </View>
      </View>
    </View>
  );
};

export default Withdrawal;

const styles = StyleSheet.create({});
