import React, {useRef, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../components/Header';
import {OpenSansR, PoppinsR, TsukimiRoundedB} from '../components/fonts';
import LinearGradient from 'react-native-linear-gradient';

const Roor = ({navigation}) => {
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const [otp, setOTP] = useState(['3', '1', '3', '2', '0', '0']);
  const otpInputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const handleOTPChange = (index, value) => {
    if (value.length === 1 && index < 5) {
      otpInputRefs[index + 1].current.focus();
    }

    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Header text={'Login'} navigation={navigation} />
      <View>
        <Text
          style={{
            fontFamily: PoppinsR,
            fontSize: 24,
            color: '#17181A',
            // left: widht * 0.05,
            paddingHorizontal: 20,
          }}>
          Verify your Phone Number
        </Text>
        <Text
          style={{
            fontFamily: PoppinsR,
            color: '#8B9199',
            paddingHorizontal: 20,
            marginTop: height * 0.02,
          }}>
          A 6 digit OTP code has been sent to +2348065650633 and
          usmanndako@gmail.com enter the code to continue.
        </Text>
        <Text
          style={{
            fontFamily: PoppinsR,
            fontSize: 14,
            color: '#5D6166',
            paddingHorizontal: 20,
            marginTop: height * 0.05,
          }}>
          Enter OTP
        </Text>

        <View
          style={{
            alignItems: 'center',
            // marginTop: height * 0.03,
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20,
          }}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={{
                width: widht * 0.13,
                height: height * 0.11,
                borderColor: 'gray',
                borderRadius: 12,
                textAlign: 'center',
                fontSize: 32,
                fontFamily: OpenSansR,
                color: '#5D6166',
                fontWeight: '600',
                flexWrap: 'nowrap',
                backgroundColor: '#F1F6F9',
              }}
              placeholderTextColor={'#5D6166'}
              maxLength={1}
              onChangeText={value => handleOTPChange(index, value)}
              value={digit}
              ref={otpInputRefs[index]}
              keyboardType="numeric"
            />
          ))}
        </View>

        <Text
          style={{
            fontFamily: PoppinsR,
            fontSize: 14,
            color: '#BAC2CC',
            textAlign: 'center',
            marginTop: height * 0.03,
          }}>
          Resend code in
          <Text
            style={{
              fontFamily: PoppinsR,
              fontSize: 14,
              fontWeight: 600,
              color: '#ED5858',
            }}>
            60 secs
          </Text>
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Verify3');
          }}>
          <LinearGradient
            colors={['#ED5858', '#6A1717']}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: widht * 0.22,
              padding: 15,
              borderRadius: 16,
              marginTop: height * 0.05,
              // marginBottom: 25,
            }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            locations={[0.084, 0.9669]}
            onTouchEnd={() => {
              // navigation.navigate('Login');
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: '#fff',
                fontFamily: OpenSansR,
              }}>
              Verify
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={{position: 'absolute', bottom: 0, left: 0}}>
        <Image
          source={require('../asset/bottom.png')}
          style={{}}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};
export default Roor;
