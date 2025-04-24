import React, {useState, useEffect, Component} from 'react';
import {
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  SafeAreaView,
  ScrollView,
  Switch,
  Pressable,
  Appearance,
  Alert,
  BackHandler,
  Platform,
} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {OpenSansR, TsukimiRoundedB, PoppinsR} from '../components/fonts';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {loginSuccessReq, loginSuccessUpdate} from '../store/action/loginA';
import {FingerSVG} from '../themes/SvgIcons';
import {Metrics} from '../themes';
import ModalComponent from '../components/ModalComponent';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import TextInputComponent from '../components/TextInputComponent';

const Log = ({navigation}) => {
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [valueE, setValueEmail] = useState();
  const [valueP, setValuePass] = useState();
  const [isPassShow, setIsPassShow] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isBool, setBool] = useState(false);
  const [Theme, setTheme] = useState('');
  const [Aut, setAut] = useState();
  const isDark = useSelector(state => state?.darkModa?.data);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  const disptach = useDispatch();

  const onSubmit = () => {
    if (!valueE && !valueP) return alert('Enter Email and Password !');
    // if (!isBool) return alert('Please Select !');
    const payload = {
      email: valueE,
      pass: valueP,
    };
    navigation.navigate('Home');
    // disptach(loginSuccessUpdate(payload));
  };

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  useEffect(() => {
    // const colorScheme = Appearance.getColorScheme();
    const listener = Appearance.addChangeListener(colorTheme => {
      console.log(colorTheme);
      if (colorTheme.colorScheme === 'dark') {
        setTheme('LIGHT');
      } else {
        setTheme('DARK');
      }
      return () => {
        listener;
      };
    });
  }, []);

  // const rnBiometrics = new ReactNativeBiometrics();

  // useEffect(() => {
  //   async () => {
  //     const {available, biometryType} = await rnBiometrics.isSensorAvailable();

  //     if (Platform.OS === 'android') {
  //       available && biometryType === BiometryTypes.Biometrics;
  //       if (available && biometryType === BiometryTypes.Biometrics) {
  //         navigation.navigate('Home');
  //         alert('Biometric Done!!');
  //       } else {
  //         alert('Biometric Not Found');
  //       }
  //     } else {
  //       if (Platform.OS === 'ios') {
  //         available && biometryType === BiometryTypes.FaceID;
  //         if (available && biometryType === BiometryTypes.FaceID) {
  //           navigation.navigate('Home');
  //         } else {
  //           alert('FaceID Not Found');
  //         }
  //       }
  //     }
  //   };
  // }, []);
  // const Authenticate = () => {
  //   rnBiometrics.createKeys().then(resultObject => {
  //     const {publicKey} = resultObject;
  //     console.log(publicKey);
  //     sendPublicKeyToServer(publicKey);
  //   });
  //   let epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
  //   let payload = epochTimeSeconds + 'some data';
  //   rnBiometrics
  //     .createSignature({
  //       promptMessage: 'Sign in',
  //       payload: payload,
  //     })
  //     .then(resultObject => {
  //       const {success, signature} = resultObject;

  //       if (success) {
  //         console.log(signature);
  //         verifySignatureWithServer(signature, payload);
  //       }
  //     });
  // };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: isDark ? '#000' : '#fff'}}>
      <Header text={'Need Help?'} navigation={navigation} />
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              fontFamily: TsukimiRoundedB,
              // fontWeight: 'bold',
              height: 50,
              color: isDark ? '#AFB4BB' : '#17181A',
              margin: 20,
              // fontStyle: 'italic',
              // margin: 20,
            }}>
            Login
          </Text>

          <Text
            style={{
              marginTop: height * 0.02,
              color: isDark ? '#AFB4BB' : '#5D6166',
              paddingHorizontal: 20,
              fontSize: 13,
              fontFamily: OpenSansR,
              paddingVertical: 10,
            }}>
            Email
          </Text>

          <TextInputComponent
            placeholder={'Email'}
            placeholderTextColor="#8B9199"
            onChangeText={setValueEmail}
            value={valueE}
            // value={valueE}
            inputstyle={{
              // height: Metrics.ratio(52),
              // borderRadius: 12,
              marginBottom: 0,
            }}
          />

          <Text
            style={{
              marginTop: height * 0.01,
              color: isDark ? '#AFB4BB' : '#5D6166',
              paddingHorizontal: 20,
              fontSize: 13,
              fontFamily: OpenSansR,
              paddingVertical: 10,
            }}>
            Password
          </Text>

          <TextInputComponent
            placeholderTextColor="#8B9199"
            placeholder={'Password'}
            inputstyle={{height: Metrics.ratio(52), borderRadius: 12}}
            onChangeText={setValuePass}
            value={valueP}
            securetext={isPassShow ? 'Show' : 'Hide'}
            secureTextEntry={isPassShow}
            onPressSecure={() => {
              setIsPassShow(!isPassShow);
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 20,
              padding: 10,
              width: '95%',
            }}
            onPress={() => {
              setBool(!isBool);
            }}>
            <Icon
              name={'check-circle'}
              size={25}
              color={isDark ? '#fff' : '#000'}
            />
            <Text
              style={{
                fontSize: 12,
                color: isDark ? '#AFB4BB' : '#5D6166',
                fontFamily: OpenSansR,
                paddingLeft: 10,
              }}>
              Must be more than 8 characters and contain at least one capital
              letter, one number and one special character
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 10,
              // alignSelf: 'center',
            }}>
            <Text></Text>
            <Switch
              trackColor={{
                false: isDark ? '#AFB4BB ' : '#FFD6D6',
                true: '#6A1717',
              }}
              thumbColor={
                isEnabled ? (isDark ? '#AFB4BB ' : '#ED5858') : '#FFD6D6'
              }
              ios_backgroundColor={isDark ? '#AFB4BB ' : '#3e3e3e'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text
              style={{
                fontSize: 14,
                color: isDark ? '#AFB4BB' : '#5D6166',
                fontFamily: OpenSansR,
                paddingLeft: 10,
              }}>
              Biometrics Authentication
            </Text>
          </View>

          <Text
            style={{
              fontSize: 14,
              color: '#8B9199',
              fontFamily: OpenSansR,

              // alignSelf: 'center',
            }}>
            Allow authentication with device biometrics.
          </Text>
          <TouchableOpacity
            style={{
              marginHorizontal: widht * 0.22,
              marginVertical: 40,
            }}
            onPress={() => {
              onSubmit();
            }}>
            <LinearGradient
              colors={['#ED5858', '#6A1717']}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 15,
                borderRadius: 16,
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
                  fontSize: 18,
                  color: '#fff',
                  fontFamily: OpenSansR,
                }}>
                Login
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              fontFamily: PoppinsR,
              color: isDark ? '#AFB4BB' : '#5D6166',
              marginBottom: 10,
            }}>
            Create an account?
            <Text
              style={{color: '#b22222', fontFamily: PoppinsR}}
              onPress={() => {
                navigation.navigate('Sign');
              }}>
              Signup
            </Text>
          </Text>
          <ModalComponent
            isVisible={isEnabled}
            onBackdropPress={() => {
              setIsEnabled(false);
            }}
            style={{justifyContent: 'flex-end', margin: 0}}>
            <View
              style={{
                width: widht * 0.9,
                alignSelf: 'center',
                height: height * 0.3,
                elevation: 5,
                backgroundColor: isDark ? '#17181A' : '#fff',
                position: 'absolute',
                bottom: 20,
                borderRadius: 20,
                justifyContent: 'space-around',
                flexDirection: 'column',
              }}>
              <TouchableOpacity
                onPress={() => {
                  Authenticate();
                }}
                style={{
                  width: Metrics.ratio(75),
                  height: Metrics.ratio(75),
                  alignSelf: 'center',
                }}>
                <FingerSVG
                  widht={Metrics.ratio(75)}
                  height={Metrics.ratio(75)}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  textAlign: 'center',
                  color: isDark ? '#AFB4BB' : '#5D6166',
                  // marginTop: height * 0.05,
                  fontFamily: PoppinsR,
                }}>
                Touch the Finger Print Sensor
              </Text>
              <TouchableOpacity
                onPress={() => setIsEnabled(false)}
                style={{
                  // marginHorizontal: 100,
                  // margin: 20,
                  padding: 10,
                  // borderRadius: 10,
                  width: 70,
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    color: '#E44848',
                    fontFamily: OpenSansR,
                    fontSize: 14,
                    textAlign: 'center',
                    // marginTop: height * 0.04,
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </ModalComponent>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Log;
