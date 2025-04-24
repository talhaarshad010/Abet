import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {OpenSansR, PoppinsSB} from './fonts';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {Icons} from '../themes';

const Header3 = ({text, navigation, istwo, three}) => {
  const isDark = useSelector(state => state?.darkModa?.data);
  return (
    <View style={{}}>
      <TouchableOpacity
        style={{margin: 10, width: 20}}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icons.AntDesign name="left" size={30} color={'gray'} />
      </TouchableOpacity>
    </View>
  );
};

export default Header3;
