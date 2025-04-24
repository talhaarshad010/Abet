import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icons, Metrics} from '../themes';
import {OpenSansR} from './fonts';
import {
  ActiveTradeSVG,
  ActiveWalletSVG,
  DotSVG,
  HomeFocused,
  HomeSVG,
  PropertySVG,
  TradeSVG,
  WalletSVG,
} from '../themes/SvgIcons';

const Bottombar = ({isDark, active, navigation}) => {
  const widht = Dimensions.get('window').width;
  return (
    <View
      style={{
        backgroundColor: isDark ? '#17181A' : '#FFF',
        width: widht,

        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        // paddingHorizontal: 20,
        paddingVertical: 15,
        elevation: 10,
        // borderTopWidth: 1,
        // borderColor: 'lightgray',
      }}>
      <FlatList
        data={['Home', 'Wallet', 'Trade', 'Logout']}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{alignItems: 'center', justifyContent: 'center'}}
              onPress={() => {
                if (index === active) return;
                if (index === 0) {
                  navigation.navigate('Home');
                }
                if (index === 1) {
                  navigation.navigate('Wallet');
                }
                if (index === 2) {
                  navigation.navigate('Trade');
                }
                if (index === 3) {
                  navigation.navigate('Login');
                }
                // switch (active) {
                //   case 1:
                //     navigation.navigate('Home');
                //     break;
                //   case 2:
                //     navigation.navigate('Wallet');
                //     break;
                //   case 3:
                //     navigation.navigate('Trade');
                //     break;
                //   case 4:
                //     navigation.navigate('Property');
                //     break;

                //   default:
                //     break;
                // }
              }}>
              {index === 0 ? (
                active === 0 ? (
                  <>
                    <DotSVG width={8} height={8} />
                    <HomeFocused width={25} height={25} />
                  </>
                ) : (
                  <HomeSVG width={25} height={25} />
                )
              ) : index === 1 ? (
                active === 1 ? (
                  <>
                    <DotSVG width={8} height={8} />
                    <ActiveWalletSVG width={25} height={25} />
                  </>
                ) : (
                  <WalletSVG width={25} height={25} />
                )
              ) : index === 2 ? (
                active === 2 ? (
                  <>
                    <DotSVG width={8} height={8} />
                    <ActiveTradeSVG width={25} height={25} />
                  </>
                ) : (
                  <TradeSVG width={25} height={25} />
                )
              ) : index === 3 ? (
                active === 3 ? (
                  <DotSVG width={8} height={8} />
                ) : (
                  // <PropertySVG width={25} height={25} />
                  <Icons.AntDesign
                    name={'logout'}
                    size={20}
                    color={isDark ? '#fff' : '#BAC2CC'}
                    style={{width: 25, height: 25}}
                  />
                )
              ) : null}
              <Text
                style={{
                  fontFamily: OpenSansR,
                  fontSize: 11,
                  color: isDark ? '#fff' : '#0B0415',
                  // marginTop: 10,
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      />
      {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate('Wallet', {data: item});
        }}>
        <WalletSVG width={25} height={25} />
      </TouchableOpacity>

      <TouchableOpacity>
        <TradeSVG width={25} height={25} />
      </TouchableOpacity>
      <TouchableOpacity>
        <PropertySVG width={25} height={25} />
      </TouchableOpacity> */}
    </View>
  );
};

export default Bottombar;
