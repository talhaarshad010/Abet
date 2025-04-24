import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {OpenSansR} from './fonts';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

const Header2 = ({text, navigation, istwo, three}) => {
  const isDark = useSelector(state => state?.darkModa?.data);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        margin: 20,
      }}>
      <View style={{}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../asset/left.png')}
            style={{}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontFamily: OpenSansR,
          fontSize: 16,
          color: '#BAC2CC',
        }}>
        {istwo ? '2 ' : three ? '3 ' : '1 '}
        <Text
          style={{
            fontFamily: OpenSansR,
            fontSize: 16,
            color: isDark ? '#5D6166' : '#040101',
          }}>
          of 3
        </Text>
      </Text>
      <TouchableOpacity
        onPress={() => {
          //   navigation.navigate('Login');
        }}
        style={{right: text === 'Cancel' ? null : 52, zIndex: 99}}>
        <Text
          style={{
            color: '#ED5858',
            fontSize: 16,
            fontFamily: OpenSansR,
            // fontWeight: '600',
          }}>
          {text}
        </Text>
      </TouchableOpacity>
      {/* {text === 'Cancel' ? null : (
        <View style={{position: 'absolute', top: 0, right: 0}}>
          <Image
            source={require('../asset/top.png')}
            style={{}}
            resizeMode="contain"
          />
        </View>
      )} */}
    </View>
  );
};

export default Header2;
