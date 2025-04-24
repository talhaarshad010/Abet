import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {OpenSansR} from './fonts';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {splashBool} from '../store/action/splashBool';
import {darkModaA} from '../store/action/darkMode';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Metrics} from '../themes';

const Header = ({text, navigation}) => {
  const dispatch1 = useDispatch();
  const isDark = useSelector(state => state?.darkModa?.data);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={
            isDark
              ? require('../asset/AbetWhite.png')
              : require('../asset/Asset.png')
          }
          style={{width: Metrics.ratio(70), height: Metrics.ratio(70)}}
          resizeMode="contain"
        />

        <TouchableOpacity
          onPress={() => {
            if (isDark) {
              dispatch1(darkModaA(false));
            } else {
              dispatch1(darkModaA(true));
            }
          }}
          style={{paddingLeft: 20}}>
          {isDark ? (
            <Feather name={'sun'} size={30} color={'#fff'} />
          ) : (
            <Icon name={'moon'} size={30} color={'#000'} />
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          if (text === 'Skip') {
            dispatch1(splashBool({isBool: true}));
          }
          navigation.navigate('Login');
        }}
        style={{right: text === 'Need Help?' ? null : 52, zIndex: 99}}>
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
      {text === 'Need Help?' ? null : (
        <View style={{position: 'absolute', top: 0, right: 0}}>
          <Image
            source={require('../asset/top.png')}
            style={{}}
            resizeMode="contain"
          />
        </View>
      )}
    </View>
  );
};

export default Header;
