import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {Metrics} from '../themes';
import {OpenSansR} from './fonts';

const ButtonComponent = ({
  onpress = () => {},
  text = '',
  style = {},
  RightImage = null,
  textstyle = {},
  leftImage = null,
}) => {
  return (
    <TouchableOpacity
      onPress={onpress}
      style={{...styles.Container, ...style}}
      activeOpacity={0.7}>
      {!!leftImage ? <View>{leftImage}</View> : null}
      <Text style={{...styles.textstyle, ...textstyle}}>{text}</Text>

      {!!RightImage ? <View>{RightImage}</View> : <View />}
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#F1F6F9',
    height: Metrics.ratio(52),
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  textstyle: {
    fontSize: 16,
    color: '#000',
    fontFamily: OpenSansR,
  },
  imagestyle: {
    width: 30,
    height: 30,
  },
});
