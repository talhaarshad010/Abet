import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Header2 from '../components/Header2';
import LinearGradient from 'react-native-linear-gradient';
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
import {useSelector} from 'react-redux';

const Hello = ({navigation}) => {
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const isDark = useSelector(state => state?.darkModa?.data);
  const [isC, setC] = useState(true);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: isDark ? '#000' : '#fff'}}>
      <Header2 text={'Cancel'} navigation={navigation} />
      <View>
        <Text
          style={{
            fontFamily: TsukimiRoundedM,
            fontSize: 30,
            color: isDark ? '#AFB4BB' : '#17181A',
            // marginHorizontal: 10,
            padding: 20,
          }}>
          Transfer
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            // margin: 20,
          }}>
          <TouchableOpacity
            style={{
              marginHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}
            onPress={() => {
              setC(!isC);
            }}>
            <Text
              style={{
                fontFamily: OpenSansR,
                fontSize: 16,
                color: isDark ? '#BAC2CC' : '#17181A',
              }}>
              Crypto
            </Text>
            {isC && (
              <Image
                source={require('../asset/img7.png')}
                style={{width: 12, borderRadius: 20, marginLeft: 10}}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}
            onPress={() => {
              setC(!isC);
            }}>
            <Text
              style={{
                fontFamily: OpenSansR,
                fontSize: 16,
                color: isDark ? '#BAC2CC' : '#17181A',
              }}>
              Fiat
            </Text>
            {!isC && (
              <Image
                source={require('../asset/img7.png')}
                style={{width: 12, borderRadius: 20, marginLeft: 10}}
              />
            )}
          </TouchableOpacity>
        </View>

        {isC ? (
          <>
            <View
              style={{
                backgroundColor: isDark ? '#17181A' : '#F1F6F9',
                margin: 20,
                borderRadius: 16,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  // justifyContent: 'center',
                  alignItems: 'center',
                  margin: 20,
                }}>
                <View>
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: PoppinsR,
                        color: isDark ? '#AFB4BB' : '#1A0808',
                      }}>
                      Wallet Balance
                    </Text>
                    {/* <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#282C33',
                    marginHorizontal: widht * 0.25,

                    // paddingVertical: 10,
                    height: 100,
                    borderRadius: 16,
                  }}>
                  <Image
                    source={require('../asset/Shape.png')}
                    style={{}}
                    resizeMode="contain"
                  />
                  <TouchableOpacity
                    style={
                      {
                        // width: widht * 0.3,
                        // borderRadius: 16,
                        //   height: height * 0.07,
                      }
                    }>
                    <Text
                      style={{
                        fontFamily: PoppinsR,
                        fontSize: 14,
                        color: 'rgba(186, 194, 204, 1)',
                        textAlign: 'center',
                        // marginTop: 20,
                      }}>
                      USDT
                    </Text>
                    <Image
                      source={require('../asset/arrow-down.png')}
                      resizeMode="contain"
                      style={{marginTop: 20}}
                    />
                  </TouchableOpacity>
                </View> */}
                  </View>
                </View>
              </View>

              <Text
                style={{
                  fontFamily: TsukimiRoundedM,
                  fontSize: 32,
                  textAlign: 'center',
                  color: isDark ? '#fff' : '#282C33',
                  // marginTop: widht * -0.2,
                  // padding: 10,
                }}>
                8,540.00{' '}
                <Text
                  style={{
                    fontFamily: TsukimiRoundedM,
                    fontSize: 20,
                    textAlign: 'center',
                    color: isDark ? '#fff' : '#282C33',
                    // marginTop: widht * -0.2,
                    // padding: 10,
                  }}>
                  USDT
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: OpenSansR,
                  color: isDark ? '#AFB4BB' : '#1A0808',
                  // marginTop: -18,
                  // marginLeft: 10,
                  // paddingHorizontal: widht * 0.4,
                  textAlign: 'center',
                  padding: 10,
                }}>
                $9,500.00
              </Text>
            </View>
            <Text
              style={{
                color: isDark ? '#AFB4BB' : '#1A0808',
                fontFamily: OpenSansR,
                fontSize: 12,
                // marginTop: height * 0.08,
                // margin: 10,
                padding: 20,
                // padding: 20,
              }}>
              Enter Amount
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                borderBottomColor: 'red',
                marginHorizontal: 20,
              }}>
              <Text
                style={{
                  color: isDark ? '#AFB4BB' : '#2E3033',
                  fontFamily: TsukimiRoundedM,
                  fontSize: 24,
                  // marginTop: height * 0.08,
                  paddingHorizontal: 20,
                }}>
                2,000 USDT
              </Text>
              <Text
                style={{
                  color: isDark ? '#177DFF' : '#6A1717',
                  fontFamily: OpenSansR,
                  fontSize: 16,
                  // marginTop: height * 0.08,
                  // marginLeft: widht * 0.45,
                }}>
                Max
              </Text>
            </View>
            {/* <View>
              <LinearGradient
                colors={['#ED5858', '#6A1717']}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 50,
                  padding: 17,
                  borderRadius: 16,
                }}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                locations={[0.084, 0.9669]}
                onTouchEnd={() => {
                  navigation.navigate('Transfer2');
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 16,
                    color: '#fff',
                    fontFamily: OpenSansR,
                  }}>
                  Continue
                </Text>
              </LinearGradient>
            </View> */}
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                marginVertical: 40,
              }}
              onPress={() => {
                navigation.navigate('Transfer2');
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
                  Continue
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </>
        ) : (
          <View></View>
        )}
      </View>
    </SafeAreaView>
  );
};
export default Hello;
