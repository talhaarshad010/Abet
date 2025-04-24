import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header2 from '../components/Header2';
import {
  OpenSansR,
  PoppinsB,
  PoppinsM,
  PoppinsR,
  PoppinsSB,
} from '../components/fonts';

import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {Deposit1} from '../Dammy/Dammy';
import {Metrics} from '../themes';
import {Check} from '../themes/SvgIcons';
const Paymentmethod = ({navigation}) => {
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const isDark = useSelector(state => state?.darkModa?.data);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: isDark ? '#000' : '#fff'}}>
      <Header2 text={'Cancel'} navigation={navigation} istwo />
      <View style={{paddingHorizontal: 20}}>
        <Text
          style={{
            color: '#000',
            fontFamily: PoppinsSB,
            fontSize: 24,
          }}>
          Payment Method
        </Text>
        <Text
          style={{
            color: '#5D6166',
            fontSize: 14,
            fontFamily: PoppinsR,
            marginTop: 40,
          }}>
          Add Payment method
        </Text>
        <View
          style={{
            borderRadius: 16,
            padding: 12,
            borderWidth: 1,
            marginVertical: 20,

            borderColor: '#FFCDCD',
            height: Metrics.ratio(81),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: Metrics.ratio(26),
                  height: Metrics.ratio(26),
                  borderRadius: 20,
                  backgroundColor: '#DD4F03',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: PoppinsM,
                    color: '#000',
                    paddingVertical: 2,
                  }}>
                  P
                </Text>
              </View>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 14,
                  fontFamily: PoppinsM,
                  color: '#000000',
                  marginHorizontal: 10,
                  width: 140,
                }}>
                Perfect Money
              </Text>
            </View>

            <LinearGradient
              colors={['#ED5858', '#6A1717']}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: Metrics.ratio(20),
                height: Metrics.ratio(20),
                borderRadius: 15,
                padding: 15,
              }}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              locations={[0.084, 0.9669]}>
              <View style={{width: 11, height: 11}}>
                <Check widht={Metrics.ratio(11)} height={Metrics.ratio(11)} />
              </View>
            </LinearGradient>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 8,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: PoppinsR,
                color: '#5D6166',
              }}>
              Min: 10,000
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: PoppinsR,
                color: '#5D6166',
              }}>
              Max: 10,000,00
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          marginVertical: 10,
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
        }}
        onPress={() => {
          navigation.navigate('WithdrawalSetting');
        }}>
        <LinearGradient
          colors={['#ED5858', '#6A1717']}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
            borderRadius: 16,
            paddingHorizontal: 40,
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          locations={[0.084, 0.9669]}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: '#fff',
              fontFamily: OpenSansR,
            }}>
            Add Withdrawal Detail
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Paymentmethod;
