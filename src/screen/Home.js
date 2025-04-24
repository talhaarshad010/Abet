import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Appearance,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {
  OpenSansR,
  PoppinsB,
  PoppinsM,
  PoppinsR,
  PoppinsSB,
  TsukimiRoundedB,
  TsukimiRoundedM,
} from '../components/fonts';
import {useDispatch, useSelector} from 'react-redux';
import {darkModaA} from '../store/action/darkMode';
import {
  ADLSVG,
  BCoinSVG,
  BNBSVG,
  CLogoSVG,
  MRcvSVG,
  MSendSVG,
  NotiNSVG,
  NotiSVG,
  SetNSVG,
  SetSVG,
  TetherSVG,
} from '../themes/SvgIcons';
import {Icons, Metrics} from '../themes';
import Bottombar from '../components/BottomBar';
import {useNavigation} from '@react-navigation/native';
import {HomeDammy, HomeOpt} from '../Dammy/Dammy';

const Kitty = ({navigation}) => {
  const [isShowA, setShow] = useState(false);
  const isDark = useSelector(state => state?.darkModa?.data);
  const dispatch = useDispatch();
  const navigation1 = useNavigation();
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [select, setselect] = useState();

  const RRR = [
    {
      name: 'Bitcoin',
      imgU: require('../asset/Crypto.png'),
      ammount: '$4,500.00',
      desc: '0.0000056 BTC',
      imgU2: require('../asset/ratedwn.png'),
      title: '4.5%',
      title1: '$12.5',
    },
    {
      name: 'Tether',
      imgU: require('../asset/Crypto3.png'),
      ammount: '$2,200.00',
      desc: '2,600 USDT',
      imgU2: require('../asset/rateup.png'),
      title: '4.5% ',
      title1: '$12.5',
    },
    {
      name: 'Etherium',
      imgU: require('../asset/Crypto4.png'),
      ammount: '$2,000.00',
      desc: '0.0034 ETH',
      imgU2: require('../asset/rateup.png'),
      title: '2.1% ',
      title1: '$12.5',
    },
    {
      name: 'Chain Link',
      imgU: require('../asset/Crypto5.png'),
      ammount: '$800.00',
      desc: '0.0000056 BTC',
      imgU2: require('../asset/rateup.png'),
      title: '2.1%',
      title1: '$12.5',
    },
    {
      name: 'Etherium',
      imgU: require('../asset/Crypto4.png'),
      ammount: '$2,000.00',
      desc: '0.0034 ETH',
      imgU2: require('../asset/rateup.png'),
      title: '2.1% ',
      title1: '$12.5',
    },
    {
      name: 'Chain Link',
      imgU: require('../asset/Crypto5.png'),
      ammount: '$800.00',
      desc: '0.0000056 BTC',
      imgU2: require('../asset/rateup.png'),
      title: '2.1%',
      title1: '$12.5',
    },
  ];
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          paddingHorizontal: 15,
          backgroundColor: isDark ? '#17181A' : '#FFF',
          elevation: 5,
          marginVertical: 10,
          borderRadius: 16,
          margin: 5,
          marginBottom: index === RRR?.length - 1 && isDark ? 50 : null,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            {index === 0 ? (
              <CLogoSVG width={25} height={25} />
            ) : (
              <TetherSVG width={30} height={30} />
            )}
            <Text
              style={{
                fontFamily: PoppinsSB,
                fontSize: 14,
                color: isDark ? '#fff' : '#000',
                margin: 5,
                // marginLeft: widht * 0.42,
              }}>
              {item.name}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: OpenSansR,
              fontSize: 16,
              color: isDark ? '#fff' : '#2E3033',
              // marginLeft: widht * 0.29,
              margin: 5,
              // marginVertical: -35,
            }}>
            {item.ammount}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={item.imgU2}
              style={{margin: 3}}
              resizeMode="contain"
            />
            <Text style={{fontFamily: PoppinsR, fontSize: 14}}>
              {item.title}
            </Text>
            <Text
              style={{
                fontFamily: PoppinsSB,
                fontSize: 14,
                color: '#5D6166',
              }}>
              {item.title1}
            </Text>
          </View>

          <Text
            style={{
              fontFamily: PoppinsR,
              fontSize: 14,
              color: '#5D6166',
            }}>
            {item.desc}
          </Text>
        </View>
      </View>
    );
  };

  const renderitem1 = ({item, index}) => {
    return (
      <View>
        <View
          style={{
            backgroundColor: isDark ? '#17181A' : '#FFF',
            elevation: 3,
            borderRadius: 16,
            width: Metrics.ratio(179),
            height: Metrics.ratio(101),
            padding: 16,
            margin: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{width: 27, height: 27}}>
                {index === 0 ? (
                  <BNBSVG width={27} height={27} />
                ) : (
                  <ADLSVG width={27} height={27} />
                )}
              </View>

              <Text
                style={{
                  fontFamily: PoppinsM,
                  fontSize: 14,
                  color: isDark ? '#fff' : '#000',
                  paddingHorizontal: 10,
                }}>
                {item.title}
              </Text>
            </View>
            <Image
              source={require('../asset/rateup.png')}
              resizeMode="contain"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}>
            <Text
              style={{
                color: '#39A798',
                fontFamily: PoppinsR,
                fontSize: 14,
              }}>
              {item.Num1}
            </Text>
            <Text
              style={{
                color: '#5D6166',
                fontFamily: PoppinsR,
                fontSize: 14,
              }}>
              {item.Num2}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderItem2 = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            setselect(item.id);
          }}
          style={{
            margin: 10,
          }}>
          <LinearGradient
            colors={
              select === item.id ? ['#ED5858', '#6A1717'] : ['#fff', '#fff']
            }
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              paddingHorizontal: 10,
              height: Metrics.ratio(24),
            }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            locations={[0.084, 0.9669]}
            onTouchEnd={() => {}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                color: select === item.id ? '#fff' : '#5D6166',
                fontFamily: OpenSansR,
              }}>
              {item.Name}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: isDark ? '#000' : '#F1F6F9'}}>
      <StatusBar
        backgroundColor={isDark ? '#000' : '#F1F6F9'}
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />
      <View style={{paddingHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 10,
            // backgroundColor: '#000',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation1.openDrawer();
            }}>
            <IonIcons
              name={'menu-outline'}
              size={30}
              color={isDark ? '#fff' : '#000'}
            />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              //   padding: 30,
            }}>
            <TouchableOpacity
              onPress={() => {
                if (isDark) {
                  dispatch(darkModaA(false));
                } else {
                  dispatch(darkModaA(true));
                }
              }}>
              {isDark ? (
                <Feather name={'sun'} size={30} color={'#fff'} />
              ) : (
                <Icon name={'moon'} size={30} color={'#000'} />
              )}
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: 20}}>
              {isDark ? (
                <SetNSVG width={Metrics.ratio(25)} height={Metrics.ratio(30)} />
              ) : (
                <SetSVG width={Metrics.ratio(25)} height={Metrics.ratio(30)} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: isDark ? '#282C33' : null,
                padding: isDark ? 15 : null,
                borderRadius: 15,
              }}>
              {isDark ? (
                <NotiNSVG
                  width={Metrics.ratio(25)}
                  height={Metrics.ratio(25)}
                />
              ) : (
                <NotiSVG width={Metrics.ratio(30)} height={Metrics.ratio(25)} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <LinearGradient
            colors={['#ED5858', '#6A1717']}
            style={{
              // width: widht * 0.96,
              // marginLeft: 10,
              borderRadius: 16,
            }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            locations={[0.084, 0.9669]}>
            <View
              style={{
                // backgroundColor: '#ED5858',
                // width: widht * 0.5,
                // height: height * 0.19,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: PoppinsR,
                  color: '#fff',
                  // margin: 20,
                }}>
                Wallet Balance
              </Text>
              {/* <Image source={require('../asset/crow.png')} resizeMode="contain" /> */}
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.20)',
                  width: widht * 0.2,
                  height: height * 0.04,
                  // paddingHorizontal: widht * 0.1,
                  // marginLeft: widht * 0.3,
                  // padding: 14,
                  borderRadius: 12,
                  marginTop: 13,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: PoppinsR,
                    color: '#fff',
                    // marginVertical: -26,
                    // margin: 10,
                  }}>
                  USD
                </Text>
                <Icons.AntDesign name={'down'} size={20} color={'#fff'} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: TsukimiRoundedM,
                  fontSize: 32,
                  // textAlign: 'center',
                  color: '#fff',
                  // marginTop: widht * -0.2,
                }}>
                {isShowA ? '$8,540.00' : '********'}
              </Text>

              <TouchableOpacity
                onPress={() => {
                  setShow(!isShowA);
                }}>
                <Icons.Ionicons
                  name={isShowA ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  color={'#fff'}
                  style={{paddingHorizontal: 10}}
                />
              </TouchableOpacity>
            </View>

            <View style={{position: 'absolute', bottom: 0, left: 0}}>
              <Image
                source={require('../asset/bottom.png')}
                style={{}}
                resizeMode="contain"
              />
              {/* <Image
              source={require('../asset/crow1.png')}
              resizeMode="contain"
            /> */}
            </View>
            <View
              style={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 20,
                // marginLeft: 10,
                // margin: 20,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#000',
                  paddingHorizontal: 10,
                  padding: 5,
                  // width: widht * 0.28,
                  // height: height * 0.05,
                  // margin: 20,
                  borderRadius: 12,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
                onPress={() => {
                  navigation.navigate('Transfer');
                }}>
                <View
                  style={{
                    width: Metrics.ratio(20),
                    height: Metrics.ratio(20),
                    paddingRight: 5,
                  }}>
                  <MSendSVG
                    widht={Metrics.ratio(20)}
                    height={Metrics.ratio(20)}
                  />
                </View>

                <Text
                  style={{
                    fontFamily: PoppinsR,
                    fontSize: 14,
                    // paddingHorizontal: 22,
                    // marginTop: 10,
                    color: '#fff',
                    textAlign: 'center',
                  }}>
                  Transfer
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.20)',

                  paddingHorizontal: 10,
                  padding: 5,
                  // width: widht * 0.28,
                  // height: height * 0.05,
                  // margin: 20,
                  borderRadius: 12,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
                onPress={() => {
                  navigation.navigate('Deposit');
                }}>
                <View
                  style={{
                    width: Metrics.ratio(20),
                    height: Metrics.ratio(20),
                    paddingRight: 5,
                  }}>
                  <MRcvSVG
                    widht={Metrics.ratio(20)}
                    height={Metrics.ratio(20)}
                  />
                </View>

                <Text
                  style={{
                    fontFamily: PoppinsR,
                    fontSize: 14,
                    // paddingHorizontal: 22,
                    // marginTop: 10,
                    color: '#fff',
                    textAlign: 'center',
                  }}>
                  Deposit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.20)',
                  paddingHorizontal: 10,
                  padding: 5,
                  // width: widht * 0.28,
                  // height: height * 0.05,
                  // margin: 20,
                  borderRadius: 12,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    width: Metrics.ratio(20),
                    height: Metrics.ratio(20),
                    paddingRight: 5,
                  }}>
                  <BCoinSVG
                    widht={Metrics.ratio(20)}
                    height={Metrics.ratio(20)}
                  />
                </View>

                <Text
                  style={{
                    fontFamily: PoppinsR,
                    fontSize: 14,
                    // paddingHorizontal: 22,
                    // marginTop: 10,
                    color: '#fff',
                    textAlign: 'center',
                  }}>
                  Swap
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
          <View
            style={{
              backgroundColor: isDark ? '#17181A' : '#FFF',
              elevation: 3,
              padding: 16,
              borderRadius: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: Metrics.ratio(54),
              margin: 5,
              marginVertical: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{width: 30, height: 30}}>
                <CLogoSVG width={30} height={30} />
              </View>
              <Text
                style={{
                  fontFamily: PoppinsM,
                  fontSize: 14,
                  color: isDark ? '#fff' : '#252A30',
                  paddingHorizontal: 10,
                }}>
                BTC
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',

                justifyContent: 'space-evenly',
              }}>
              <Text
                style={{
                  fontFamily: PoppinsM,
                  fontSize: 14,
                  color: '#39A798',
                }}>
                0.00000045
              </Text>
              <Image
                source={require('../asset/Group57.png')}
                resizeMode="contain"
                style={{paddingHorizontal: 15}}
              />
              <Text
                style={{
                  fontFamily: PoppinsR,
                  fontSize: 14,
                  color: '#39A798',
                }}>
                3.8%
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontFamily: OpenSansR,
              fontSize: 16,
              color: '#5D6166',
            }}>
            Recommended
          </Text>
          <FlatList
            style={{marginVertical: 10}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={HomeDammy}
            renderItem={renderitem1}
          />
          <FlatList
            horizontal
            data={HomeOpt}
            renderItem={renderItem2}
            showsHorizontalScrollIndicator={false}
          />

          <View>
            <FlatList
              style={{marginBottom: 130}}
              data={RRR}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </View>
      <View style={{position: 'absolute', bottom: 0}}>
        <Bottombar navigation={navigation} isDark={isDark} active={0} />
      </View>
    </SafeAreaView>
  );
};
export default Kitty;
