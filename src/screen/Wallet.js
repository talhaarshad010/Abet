import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  OpenSansR,
  PoppinsB,
  PoppinsM,
  PoppinsR,
  PoppinsSB,
  TsukimiRoundedB,
  TsukimiRoundedM,
} from '../components/fonts';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import Bottombar from '../components/BottomBar';
import {Icons, Metrics} from '../themes';
import {
  BCoinSVG,
  FilterSVG,
  GainSVG,
  LossSVG,
  MRcvSVG,
  MSendSVG,
  SetNSVG,
  SetSVG,
} from '../themes/SvgIcons';
const Wall = ({navigation}) => {
  const [bool, setBool] = useState(true);
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const isDark = useSelector(state => state?.darkModa?.data);
  const [isShowA, setShow] = useState(false);

  const Listdata = [
    {
      name: 'Janet Doe',
      imgU: require('../asset/img5.png'),
      ammount: '$4,500.00',
      desc: '0.0000056 BTC',
      title: 'BTC ',
      title1: 'BNB',
    },
    {
      name: 'Janet Doe',
      imgU: require('../asset/img6.png'),
      ammount: '$2,500.00',
      desc: '0.0000056 BTC',
      title: 'BTC ',
      title1: 'BNB',
    },
    {
      name: 'Janet Doe',
      imgU: require('../asset/HH.png'),
      ammount: '$2,500.00',
      desc: '0.0000056 BTC',
      title: 'BTC ',
      title1: 'BNB',
    },
    {
      name: 'Janet Doe',
      imgU: require('../asset/FFF.png'),
      ammount: '$4,500.00',
      desc: '0.0000056 BTC',
      title: 'BTC ',
      title1: 'BNB',
    },
    {
      name: 'Janet Doe',
      imgU: require('../asset/FFF.png'),
      ammount: '$4,500.00',
      desc: '0.0000056 BTC',
      title: 'BTC ',
      title1: 'BNB',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          paddingHorizontal: 15,
          backgroundColor: isDark ? '#17181A' : '#FFF',
          elevation: 5,
          marginHorizontal: 20,
          marginVertical: 10,
          borderRadius: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            {index === 3 || index === 1 ? (
              <LossSVG width={30} height={30} />
            ) : (
              <GainSVG width={30} height={30} />
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
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: isDark ? '#000' : '#F1F6F9'}}>
      <Text
        style={{
          fontFamily: PoppinsB,
          color: isDark ? '#F1F6F9' : '#17181A',
          fontSize: 32,
          margin: 5,
          paddingHorizontal: 10,
        }}>
        My Wallet
      </Text>
      <LinearGradient
        colors={['#ED5858', '#6A1717']}
        style={{width: widht * 0.96, marginLeft: 10, borderRadius: 16}}
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
              <MSendSVG widht={Metrics.ratio(20)} height={Metrics.ratio(20)} />
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
              <MRcvSVG widht={Metrics.ratio(20)} height={Metrics.ratio(20)} />
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
              <BCoinSVG widht={Metrics.ratio(20)} height={Metrics.ratio(20)} />
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
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginVertical: 10,
          alignItems: 'center',
          // backgroundColor: 'red',
        }}>
        <Text
          style={{
            fontFamily: OpenSansR,
            fontSize: 16,
            color: '#5D6166',
          }}>
          Transaction History
        </Text>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity style={{paddingHorizontal: 30}}>
            {isDark ? (
              <SetNSVG width={Metrics.ratio(25)} height={Metrics.ratio(30)} />
            ) : (
              <SetSVG width={Metrics.ratio(25)} height={Metrics.ratio(30)} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              // margin: 20,/
              backgroundColor: isDark ? '#282C33' : '#fff',
              // width: widht * 0.14,
              // height: height * 0.06,
              alignItems: 'center',
              justifyContent: 'center',
              // marginTop: 10,
              borderRadius: 12,
              padding: 15,

              // marginLeft: 30,
            }}>
            <FilterSVG width={Metrics.ratio(25)} height={Metrics.ratio(30)} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={Listdata}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // style={{marginBottom: 100}}
      />

      <Bottombar navigation={navigation} isDark={isDark} active={1} />
    </SafeAreaView>
  );
};

export default Wall;
