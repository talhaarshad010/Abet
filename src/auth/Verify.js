import React, {useEffect, useRef, useState} from 'react';
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
import {
  OpenSansR,
  PoppinsB,
  PoppinsR,
  PoppinsSB,
  TsukimiRoundedB,
} from '../components/fonts';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

const Sccer = ({navigation}) => {
  const isDark = useSelector(state => state?.darkModa?.data);
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const [timerCount, setTimer] = useState(60);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, []);

  const [otp, setOTP] = useState(['', '', '', '', '', '']);
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
    <SafeAreaView style={{flex: 1, backgroundColor: isDark ? '#000' : '#fff'}}>
      <Header text={'Login'} navigation={navigation} />
      <View>
        <Text
          style={{
            fontFamily: PoppinsSB,
            fontSize: 24,
            color: isDark ? '#fff' : '#17181A',
            paddingHorizontal: 20,
          }}>
          Verify your Email
        </Text>
        <Text
          style={{
            fontFamily: PoppinsR,
            color: '#8B9199',
            // left: widht * 0.05,
            // top: height * 0.02,
            fontSize: 14,
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
            marginTop: height * 0.03,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={{
                width: widht * 0.13,
                height: height * 0.11,
                borderRadius: 12,
                textAlign: 'center',
                fontSize: 30,
                fontFamily: OpenSansR,
                flexWrap: 'nowrap',
                backgroundColor: '#F1F6F9',
                color: isDark ? '#000' : '#fff',
              }}
              placeholderTextColor={'#8B9199'}
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
            marginTop: widht * 0.1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          Resend code in
          <Text
            style={{
              fontFamily: PoppinsR,
              fontSize: 14,
              // fontWeight: 600,
              color: '#ED5858',
            }}>
            {timerCount} secs
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
          style={
            {
              // backgroundColor:'#FFF2F2'
            }
          }
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};
export default Sccer;
