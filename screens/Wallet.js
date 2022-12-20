import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Wallet = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 50,
        backgroundColor: '#ffffff',
        height: '100%',
        width: '100%',
      }}>
      <View
        style={{
          paddingLeft: 20,
          paddingRight: 20,
        }}>
        {/* app bar starts */}
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
              style={{height: 40, width: 40}}
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
        {/* app bar stops */}
        {/* card view starts */}
        <View style={{height: 159, width: '100%'}}>
          <Image
            source={require('../assets/card.png')}
            style={{marginTop: 24, height: 160, width: '100%'}}
          />
          {/* view ontop of card */}
          <View
            style={{
              position: 'absolute',
              height: 165,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              top: 22,
              padding: 20,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}>
              <Text style={{color: '#FFFFFF'}}>N</Text>
              <View style={{display: 'flex', flexDirection: 'column', flex: 1}}>
                <Text
                  style={{color: '#ffffff', fontSize: 32, fontWeight: '400'}}>
                  120,000
                </Text>
                <Text
                  style={{color: '#ffffff', fontSize: 13, fontWeight: '400'}}>
                  Balance
                </Text>
              </View>
              <Image
                source={require('../assets/frame.png')}
                style={{height: 35, width: 35}}
              />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}>
              <View style={{display: 'flex', flexDirection: 'column', flex: 2}}>
                <Text
                  style={{color: '#ffffff', fontSize: 9, fontWeight: '400'}}>
                  Account Number
                </Text>
                <Text
                  style={{color: '#ffffff', fontSize: 14, fontWeight: '400'}}>
                  9102356712
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                }}>
                <Text
                  style={{
                    color: '#ffffff',
                    fontSize: 9,
                    fontWeight: '400',
                  }}>
                  Bank
                </Text>
                <Text
                  style={{color: '#ffffff', fontSize: 14, fontWeight: '400'}}>
                  Access Bank
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{height: 60}} />
        {/* two buttons */}
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              height: 43,
              width: 135,
              backgroundColor: '#E5F4F3',
              borderRadius: 7,
              padding: 10,
              flex: 1,
            }}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Image
                source={require('../assets/add.png')}
                style={{height: 19, width: 19}}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  color: '#656262',
                  paddingLeft: 5,
                }}>
                Top Up Wallet
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 30,
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              height: 43,
              width: 135,
              backgroundColor: '#E5F4F3',
              borderRadius: 7,
              flex: 1,
              padding: 10,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Withdrawal')}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Image
                  source={require('../assets/withdraw.png')}
                  style={{height: 19, width: 19}}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#656262',
                  }}>
                  Withdraw Funds
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height: 20}} />
      </View>
      <ScrollView
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          flex: 1,
          backgroundColor: '#f2f2f2',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          padding: 20,
        }}>
        <View
          syle={{
            width: '100%',
            height: 4,
            // alignItems: 'center',
            // justifyContent: 'center',
          }}>
          <View
            style={{
              height: 4,
              backgroundColor: '#C4C4C4',
              width: 40,
            }}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 14, fontWeight: '500', color: '#676464'}}>
            Last Transactions
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', color: '#1293A9'}}>
            See All
          </Text>
        </View>
        <View style={{height: 20}} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
          }}>
          <Image
            source={require('../assets/signIn.png')}
            style={{height: 38, width: 38}}
          />
          <View
            style={{
              width: 10,
            }}
          />
          <View style={{display: 'flex', flexDirection: 'column', flex: 1}}>
            <Text style={{fontSize: 15, fontWeight: '500', color: '#5F5B5B'}}>
              Account Top Up
            </Text>
            <Text style={{fontSize: 10, fontWeight: '400', color: '#9B9999'}}>
              24 Oct. 2020 8:45pm
            </Text>
          </View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: '#5F5B5B',
              marginLeft: 110,
            }}>
            50,000
          </Text>
        </View>
        <View style={{height: 20}} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
          }}>
          <Image
            source={require('../assets/signOut.png')}
            style={{height: 38, width: 38}}
          />
          <View
            style={{
              width: 10,
            }}
          />
          <View style={{display: 'flex', flexDirection: 'column', flex: 1}}>
            <Text style={{fontSize: 15, fontWeight: '500', color: '#5F5B5B'}}>
              Rent Payment
            </Text>
            <Text style={{fontSize: 10, fontWeight: '400', color: '#9B9999'}}>
              24 Oct. 2020 8:45pm
            </Text>
          </View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: '#5F5B5B',
              marginLeft: 110,
            }}>
            -50,000
          </Text>
        </View>
        <View style={{height: 20}} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
          }}>
          <Image
            source={require('../assets/signIn.png')}
            style={{height: 38, width: 38}}
          />
          <View
            style={{
              width: 10,
            }}
          />
          <View style={{display: 'flex', flexDirection: 'column', flex: 1}}>
            <Text style={{fontSize: 15, fontWeight: '500', color: '#5F5B5B'}}>
              Account Top Up
            </Text>
            <Text style={{fontSize: 10, fontWeight: '400', color: '#9B9999'}}>
              24 Oct. 2020 8:45pm
            </Text>
          </View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: '#5F5B5B',
              marginLeft: 110,
            }}>
            50,000
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
