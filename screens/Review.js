import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import AddBank from './AddBank';

const Review = () => {
  const refRBSheet = useRef();

  return (
    <View style={{display: 'flex', flexDirection: 'column', padding: 20}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '700',
          color: '#4F4E52',
          textAlign: 'center',
        }}>
        Transaction Summary
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontWeight: '500',
          color: '#65656A',
          textAlign: 'center',
        }}>
        Please review the details of your transaction
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <Text style={{color: '#616165', fontSize: 14, fontWeight: '500'}}>
          Transaction Type
        </Text>
        <Text style={{color: '#5E5E5F', fontSize: 16, fontWeight: '700'}}>
          {' '}
          Wallet Withdrawal
        </Text>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: '#C4C4C4',
          width: '100%',
          marginLeft: 20,
          marginRight: 20,
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <Text style={{color: '#616165', fontSize: 14, fontWeight: '500'}}>
          Amount
        </Text>
        <Text style={{color: '#5E5E5F', fontSize: 16, fontWeight: '700'}}>
          {' '}
          50,000
        </Text>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: '#C4C4C4',
          width: '100%',
          marginLeft: 20,
          marginRight: 20,
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <Text style={{color: '#616165', fontSize: 14, fontWeight: '500'}}>
          Fee
        </Text>
        <Text style={{color: '#5E5E5F', fontSize: 16, fontWeight: '700'}}>
          {' '}
          25
        </Text>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: '#C4C4C4',
          width: '100%',
          marginLeft: 20,
          marginRight: 20,
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          padding: 20,
        }}>
        <Text
          style={{
            color: '#5E5E5F',
            fontSize: 16,
            fontWeight: '700',
          }}>
          50,025
        </Text>
      </View>
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
            Continue
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          height: 43,
          width: '100%',
          backgroundColor: '#CCCCCC',
          borderRadius: 7,
          marginTop: 40,
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
            backgroundColor: '#F2F2F2',
          },
          container: {
            borderRadius: 26,
          },
        }}>
        <AddBank />
      </RBSheet>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({});
