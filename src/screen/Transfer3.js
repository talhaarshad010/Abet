import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  Modal,
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
  TsukimiRoundedR,
} from '../components/fonts';
import LinearGradient from 'react-native-linear-gradient';
import Header2 from '../components/Header2';
import {useSelector} from 'react-redux';
import {Check1, TetherSVG} from '../themes/SvgIcons';
import ModalComponent from '../components/ModalComponent';

const Trans = ({navigation}) => {
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [Enabled, setisEnabled] = useState(false);
  const isDark = useSelector(state => state?.darkModa?.data);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: isDark ? '#000' : '#fff'}}>
      <Header2 text={'Cancel'} navigation={navigation} three />
      <ScrollView>
        <View style={{paddingHorizontal: 20}}>
          <Text
            style={{
              fontFamily: TsukimiRoundedB,
              fontSize: 25,
              color: isDark ? '#AFB4BB' : '#17181A',
              margin: 20,
              alignItems: 'center',
            }}>
            Confirm Transaction
          </Text>
          <View
            style={{
              backgroundColor: isDark ? '#17181A' : '#F1F6F9',

              height: height * 0.22,

              borderRadius: 16,

              margin: 20,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#1A0808',
                margin: 20,
                textAlign: 'center',
              }}>
              Amount to Transfer
            </Text>

            <Text
              style={{
                fontFamily: TsukimiRoundedB,
                fontSize: 30,
                textAlign: 'center',
                color: isDark ? '#AFB4BB' : '#282C33',
                // marginTop: widht * -0.2,
              }}>
              2,000.00 USDT
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: OpenSansR,
                color: isDark ? '#AFB4BB' : '#1A0808',
                textAlign: 'center',
                marginTop: 10,
                // marginLeft: 10,
                //   paddingHorizontal: widht * 0.4,
              }}>
              $1,540.00
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
            }}>
            <Text
              style={{
                color: isDark ? '#AFB4BB' : '#1A0808',
                fontFamily: PoppinsR,
                fontSize: 14,
              }}>
              Coin
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TetherSVG width={30} height={30} />
              <Text
                style={{
                  color: '#BAC2CC',
                  fontFamily: OpenSansR,
                  fontSize: 14,
                  paddingLeft: 10,
                }}>
                Tether
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
            }}>
            <Text
              style={{
                color: isDark ? '#AFB4BB' : '#1A0808',
                fontFamily: PoppinsR,
                fontSize: 14,
              }}>
              Wallet Address
            </Text>
            <Text
              numberOfLines={1}
              style={{
                color: '#BAC2CC',
                fontFamily: OpenSansR,
                fontSize: 16,
                width: 170,
              }}>
              48394u83uc483jjds884334
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
            }}>
            <Text
              style={{
                color: isDark ? '#8B9199' : '#1A0808',
                fontFamily: PoppinsR,
                fontSize: 14,
              }}>
              Wallet Name
            </Text>
            <Text
              style={{color: '#BAC2CC', fontFamily: OpenSansR, fontSize: 16}}>
              John Doe
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
            }}>
            <Text
              style={{
                color: isDark ? '#8B9199' : '#1A0808',
                fontFamily: PoppinsR,
                fontSize: 14,
              }}>
              Network
            </Text>
            <Text
              style={{color: '#BAC2CC', fontFamily: OpenSansR, fontSize: 16}}>
              TRC
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
            }}>
            <Text
              style={{
                color: isDark ? '#8B9199' : '#1A0808',
                fontFamily: PoppinsR,
                fontSize: 14,
              }}>
              Amount you will receive
            </Text>
            <Text
              style={{
                color: isDark ? '#BAC2CC' : '#1A0808',
                fontFamily: OpenSansR,
                fontSize: 16,
              }}>
              2,000 USDT
            </Text>
          </View>
          <TouchableOpacity
            style={{
              marginVertical: 30,

              alignSelf: 'center',
            }}
            onPress={() => {
              setisEnabled(true);
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
                Confirm
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <ModalComponent
            isVisible={Enabled}
            style={{margin: 0, alignSelf: 'center'}}>
            <View
              style={{
                backgroundColor: isDark ? '#17181A' : '#FFF',
                width: widht * 0.9,
                height: height * 0.5,
                borderRadius: 16,
                padding: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{marginBottom: 10}}>
                <Check1 width={widht * 0.9} height={height * 0.15} />
              </View>

              <Text
                style={{
                  color: isDark ? '#BAC2CC' : '#5D6166',
                  fontSize: 25,
                  fontFamily: TsukimiRoundedM,
                  textAlign: 'center',
                }}>
                Successful
              </Text>
              <Text
                style={{
                  fontFamily: OpenSansR,
                  fontSize: 14,
                  color: isDark ? '#8B9199' : '#5D6166',
                  textAlign: 'center',
                  paddingHorizontal: 30,
                  marginVertical: 20,
                }}>
                Your transaction was completed successfully.
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setisEnabled(false);
                  navigation.navigate('InternalTransfer');
                }}>
                <LinearGradient
                  colors={['#ED5858', '#6A1717']}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 15,
                    borderRadius: 16,
                    width: widht * 0.35,
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
                    Done
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ModalComponent>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Trans;
