import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {moderateScale, textScale} from '../Styles/responsiveSize';

import {OpenSansR} from './fonts';
import {Metrics} from '../themes';

const TextInputComponent = ({
  inputstyle = {},
  textstyle = {},
  value,
  onChangeText,
  placeholder,
  RightText = false,
  onPressRightText = () => {},
  placeholderTextColor = '#000',
  textAlignVertical = '',
  RtStyle = {},
  Rightimage = null,
  securetext = false,
  onPressSecure = () => {},
  ...props
}) => {
  return (
    <View style={{...styles.inputstyle, ...inputstyle}}>
      <TextInput
        secureTextEntry={securetext}
        textAlignVertical={textAlignVertical}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={placeholderTextColor}
        {...props}
        style={{...styles.textstyle, ...textstyle}}
      />
      {!!securetext ? (
        <Text onPress={onPressSecure} style={{...styles.textstyle, flex: 0}}>
          {securetext}
        </Text>
      ) : null}

      {!!RightText ? (
        <Text
          onPress={onPressRightText}
          style={{
            ...styles.textstyle,
            flex: 0,
            fontSize: 12,
            fontFamily: OpenSansR,
            ...RtStyle,
          }}>
          {RightText}
        </Text>
      ) : !!Rightimage ? (
        <View>{Rightimage}</View>
      ) : null}
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  inputstyle: {
    height: Metrics.ratio(52),
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: '#F1F6F9',
    marginBottom: 16,
  },
  textstyle: {
    fontSize: 16,
    fontFamily: OpenSansR,
    flex: 1,
    color: '#000',
  },
});
