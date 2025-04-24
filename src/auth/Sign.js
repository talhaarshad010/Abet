import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Modal,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Listdata} from '../screen/Dummy';
import Header from '../components/Header';
import {
  OpenSansR,
  TsukimiRoundedB,
  PoppinsB,
  PoppinsR,
  PoppinsSB,
  PoppinsEB,
  PoppinsM,
  TsukimiRoundedM,
} from '../components/fonts';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import TextInputComponent from '../components/TextInputComponent';
import {AmericanFlag, Arrowdown} from '../themes/SvgIcons';
import {Metrics} from '../themes';
import ButtonComponent from '../components/ButtonComponent';
const Signin = ({navigation}) => {
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [Value, setValue] = useState();
  const [name, setname] = useState(false);
  const [email, setemail] = useState();
  const [Phone, setPhone] = useState('+92');
  const [isPassShow, setIsPassShow] = useState(false);
  const [isPassShow1, setIsPassShow1] = useState(false);
  const [isPassSho, setIsPassSho] = useState(false);
  const [Changed, setChanged] = useState(false);
  const isDark = useSelector(state => state?.darkModa?.data);

  const toggle = () => {
    setChanged(!Changed);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: isDark ? '#000' : '#fff'}}>
      <Header text={'Login'} navigation={navigation} />
      <ScrollView>
        <View style={{paddingHorizontal: 20}}>
          <Text
            style={{
              fontSize: 30,
              // fontWeight: 'bold',
              // fontStyle: 'normal',
              color: isDark ? '#AFB4BB' : '#17181A',
              fontFamily: TsukimiRoundedM,
              // fontWeight: '500',

              margin: 20,
            }}>
            Register
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: PoppinsR,
              color: '#5D6166',
              // fontWeight: '400',
              paddingHorizontal: 20,
              // left: widht * 0.05,
              // bottom: height * 0.01,
            }}>
            Create a new account
          </Text>

          <Text
            style={{
              marginTop: height * 0.02,
              color: isDark ? '#AFB4BB' : '#5D6166',

              fontSize: 12,
              fontFamily: OpenSansR,
              paddingVertical: 10,
            }}>
            Full Name
          </Text>
          {/* <View
            style={{
              borderRadius: 10,
              // width: widht ,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: isDark ? '#17181A' : '#F1F6F9',
            }}> */}
          {/* <TextInput
              onChangeText={setValue}
              placeholder="Full Name"
              style={{
                borderRadius: 10,
                backgroundColor: isDark ? '#17181A' : '#F1F6F9',
                // elevation: 2,
                // padding: 18,
                fontSize: 16,
                paddingHorizontal: 20,
                // marginHorizontal: 10,
                width: widht * 0.95,
              }}
              placeholderTextColor={'#8B9199'}
            /> */}
          <TextInputComponent
            placeholder={'Full Name'}
            placeholderTextColor={'#8B9199'}
            onChangeText={() => {
              setValue;
            }}
          />
          {/* </View> */}
          <Text
            style={{
              // left: widht * 0.03,
              color: isDark ? '#AFB4BB' : '#5D6166',
              fontSize: 12,
              fontFamily: OpenSansR,
            }}>
            Country
          </Text>
          {/* <View
            style={{
              borderRadius: 10,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: isDark ? '#17181A' : '#F1F6F9',
            }}>
            <TextInput
              onChangeText={setname}
              placeholder="Turkey"
              style={{
                borderRadius: 10,
                backgroundColor: isDark ? '#17181A' : '#F1F6F9',
                // elevation: 2,
                // padding: 18,
                fontSize: 16,
                paddingHorizontal: 20,
                // marginHorizontal: 10,
                width: widht * 0.95,
              }}
              placeholderTextColor={'#8B9199'}
            />
            <Image
              source={require('../asset/arrow-down.png')}
              style={{
                width: widht * 0.04,
                height: height * 0.03,
                right: widht * 0.1,
              }}
            />
          </View> */}
          <ButtonComponent
            style={{marginTop: 10}}
            text="America"
            textstyle={{flex: 0.9, color: '#8B9199'}}
            RightImage={
              <View style={{width: 24, height: 24}}>
                <Arrowdown
                  widht={Metrics.ratio(24)}
                  height={Metrics.ratio(24)}
                />
              </View>
            }
            leftImage={
              <View
                style={{
                  width: 39,
                  height: 26,
                }}>
                <AmericanFlag
                  widht={Metrics.ratio(39)}
                  height={Metrics.ratio(26)}
                />
              </View>
            }
          />
          <Text
            style={{
              marginTop: height * 0.02,
              // left: widht * 0.03,
              color: isDark ? '#AFB4BB' : '#5D6166',
              fontSize: 12,
              bottom: height * 0.01,
              fontFamily: OpenSansR,
            }}>
            Phone Number
          </Text>
          {/* <View
            style={{
              borderRadius: 10,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: isDark ? '#17181A' : '#F1F6F9',
            }}>
            <TextInput
              onChangeText={setPhone}
              placeholder="+92"
              style={{
                borderRadius: 10,
                backgroundColor: isDark ? '#17181A' : '#F1F6F9',
                // elevation: 2,
                // padding: 18,
                fontSize: 16,
                paddingHorizontal: 20,
                // marginHorizontal: 10,
                width: widht * 0.95,
              }}
              placeholderTextColor={'#8B9199'}
            />
          </View> */}
          <TextInputComponent
            placeholder={'+92'}
            placeholderTextColor={'#8B9199'}
            onChangeText={() => {
              setPhone;
            }}
          />

          <Text
            style={{
              marginTop: height * 0.02,
              // left: widht * 0.03,
              color: isDark ? '#AFB4BB' : '#5D6166',
              fontSize: 12,
              bottom: height * 0.01,
              fontFamily: OpenSansR,
            }}>
            Email Address
          </Text>
          {/* <View
            style={{
              borderRadius: 10,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: isDark ? '#17181A' : '#F1F6F9',
            }}>
            <TextInput
              onChangeText={setemail}
              placeholder="Your email address"
              style={{
                borderRadius: 10,
                backgroundColor: isDark ? '#17181A' : '#F1F6F9',
                // elevation: 2,
                // padding: 18,
                fontSize: 16,
                paddingHorizontal: 20,
                // marginHorizontal: 10,
                width: widht * 0.95,
              }}
              placeholderTextColor={'#8B9199'}
            />
          </View> */}
          <TextInputComponent
            inputstyle={{marginBottom: 0}}
            placeholder={'Your email address'}
            placeholderTextColor={'#8B9199'}
            onChangeText={setValue}
          />
          <Text
            style={{
              marginTop: height * 0.01,
              color: isDark ? '#AFB4BB' : '#5D6166',

              fontSize: 13,
              fontFamily: OpenSansR,
              paddingVertical: 10,
            }}>
            Password
          </Text>
          {/* <View
            style={{
              borderRadius: 10,
              width: widht * 0.95,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: isDark ? '#17181A' : '#F1F6F9',
              // elevation: 2,
              // padding: 18,
              // paddingHorizontal: 20,
              // marginHorizontal: 10,
            }}>
            <TextInput
              onChangeText={setValue}
              placeholder="Enter Password"
              style={{
                borderRadius: 10,
                backgroundColor: isDark ? '#17181A' : '#F1F6F9',
                fontSize: 16,
                paddingHorizontal: 10,
                width: widht * 0.8,
              }}
              placeholderTextColor={'#8B9199'}
              secureTextEntry={isPassShow ? true : false}
            />
            <TouchableOpacity
              onPress={() => {
                setIsPassShow(!isPassShow);
              }}
              style={{width: widht * 0.1}}>
              <Text
                style={{
                  fontSize: 14,
                  color: isDark ? '#fff' : '#2E3033',
                  fontFamily: OpenSansR,
                }}>
                {isPassShow ? 'Show' : 'Hide'}
              </Text>
            </TouchableOpacity>
          </View> */}
          <TextInputComponent
            placeholderTextColor="#8B9199"
            placeholder={'Password'}
            onChangeText={setValue}
            value={Value}
            securetext={isPassShow ? 'Show' : 'Hide'}
            secureTextEntry={isPassShow}
            onPressSecure={() => {
              setIsPassShow(!isPassShow);
            }}
          />
          <Text
            style={{
              fontFamily: OpenSansR,
              fontSize: 12,
              color: '#8B9199',
              // left: widht * 0.04,
              // bottom: height * 0.02,
            }}>
            Must be more than 8 characters and contain at least one capital
            letter, one number and one special character
          </Text>

          <Text
            style={{
              marginTop: height * 0.01,
              color: isDark ? '#AFB4BB' : '#5D6166',

              fontSize: 13,
              fontFamily: OpenSansR,
              paddingVertical: 10,
            }}>
            Confirm Password
          </Text>
          {/* <View
            style={{
              borderRadius: 10,
              width: widht * 0.95,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: isDark ? '#17181A' : '#F1F6F9',
              // elevation: 2,
              // padding: 18,
              // paddingHorizontal: 20,
              // marginHorizontal: 10,
            }}>
            <TextInput
              onChangeText={setValue}
              placeholder="Create a strong password"
              style={{
                borderRadius: 10,
                backgroundColor: isDark ? '#17181A' : '#F1F6F9',
                fontSize: 16,
                paddingHorizontal: 10,
                width: widht * 0.8,
              }}
              placeholderTextColor={'#8B9199'}
              secureTextEntry={isPassShow1 ? true : false}
            />
            <TouchableOpacity
              onPress={() => {
                setIsPassShow1(!isPassShow1);
              }}
              style={{width: widht * 0.1}}>
              <Text
                style={{
                  fontSize: 14,
                  color: isDark ? '#fff' : '#2E3033',
                  fontFamily: OpenSansR,
                }}>
                {isPassShow1 ? 'Show' : 'Hide'}
              </Text>
            </TouchableOpacity>
          </View> */}
          <TextInputComponent
            placeholderTextColor="#8B9199"
            placeholder={'Create a strong password'}
            onChangeText={setValue}
            value={Value}
            securetext={isPassShow ? 'Show' : 'Hide'}
            secureTextEntry={isPassShow}
            onPressSecure={() => {
              setIsPassShow(!isPassShow);
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // alignItems: 'center',
            }}>
            <LinearGradient
              colors={['#ED5858', '#6A1717']}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 22,
                height: 22,
                // backgroundColor: '#ED5858',
                borderRadius: 6,
              }}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              locations={[0.084, 0.9669]}
              onTouchEnd={() => {
                toggle();
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 22,
                  height: 22,
                  // backgroundColor: '#ED5858',
                  borderRadius: 6,
                  // left: widht * 0.04,
                }}>
                {Changed !== true ? (
                  <Image
                    source={require('../asset/Vector.png')}
                    style={{}}
                    // resizeMode="contain"
                  />
                ) : (
                  false
                )}
              </View>
            </LinearGradient>

            <Text
              style={{
                fontFamily: PoppinsR,
                fontSize: 14,
                color: '#757877',
                // paddingLeft: 20,
                textAlign: 'left',
                width: widht * 0.8,

                // left: widht * 0.13,
                // bottom: height * 0.03,
              }}>
              I agree to the terms of services and Privacy policy
            </Text>
          </View>
          <TouchableOpacity
            style={{marginHorizontal: widht * 0.2, marginTop: 20}}
            onPress={() => {
              navigation.navigate('Verify');
            }}>
            <LinearGradient
              colors={['#ED5858', '#6A1717']}
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                padding: 15,
                borderRadius: 16,
                // bottom: height * 0.8,
                // marginTop: ,
                // marginBottom: 25,
              }}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              locations={[0.084, 0.9669]}
              onTouchEnd={() => {}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  color: '#fff',
                  fontFamily: OpenSansR,
                }}>
                Create Account
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text
            style={{
              textAlign: 'center',
              fontFamily: OpenSansR,
              color: '#8B9199',
              marginVertical: 10,
              // top: height * 0.01,
            }}>
            Already have an account?
            <Text
              style={{
                color: '#b22222',
                fontFamily: OpenSansR,
                // fontWeight: '600',
              }}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              Login
            </Text>
          </Text>

          <View style={{position: 'absolute', bottom: 0, left: 0}}>
            <Image
              source={require('../asset/bottom.png')}
              style={{}}
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Signin;
