import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header3 from '../components/Header3';
import {OpenSansR, PoppinsM, PoppinsR, PoppinsSB} from '../components/fonts';
import {useSelector} from 'react-redux';
import {Metrics} from '../themes';
import ButtonComponent from '../components/ButtonComponent';
import {Arrowdown, ArrowdownWhite, Dollar} from '../themes/SvgIcons';
import TextInputComponent from '../components/TextInputComponent';
import LinearGradient from 'react-native-linear-gradient';

const InternalTransfer = ({navigation}) => {
  const isDark = useSelector(state => state?.darkModa?.data);
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').width;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDark ? '#000' : '#fff',
      }}>
      <Header3 navigation={navigation} />
      <ScrollView>
        <View style={{paddingHorizontal: 20}}>
          <Text
            style={{
              fontFamily: PoppinsSB,
              fontSize: 24,
              color: isDark ? '#fff' : '#17181A',
              marginTop: 10,
              alignItems: 'center',
            }}>
            Internal Transfer
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: PoppinsR,
              color: '#5D6166',
              marginTop: 10,
            }}>
            Transfer Fund
          </Text>

          <View style={{marginTop: 40}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#17181A',
              }}>
              Transfer from
            </Text>
            <ButtonComponent
              style={{marginTop: 10}}
              text="Choose one"
              RightImage={
                <View style={{width: 24, height: 24}}>
                  <Arrowdown
                    widht={Metrics.ratio(24)}
                    height={Metrics.ratio(24)}
                  />
                </View>
              }
            />
          </View>
          <View
            style={{
              height: Metrics.ratio(162),
              backgroundColor: '#F1F6F9',
              padding: 16,
              borderRadius: 16,
              marginTop: 30,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: PoppinsR,
                  color: '#1A0808',
                }}>
                435740 Wallet
              </Text>
              <View>
                <ButtonComponent
                  style={{
                    backgroundColor: '#282C33',
                    height: Metrics.ratio(42),
                    width: Metrics.ratio(114),
                    borderRadius: 16,
                    padding: 8,
                    alignItems: 'center',
                  }}
                  leftImage={
                    <View style={{width: 26, height: 26, right: 5}}>
                      <Dollar
                        widht={Metrics.ratio(26)}
                        height={Metrics.ratio(26)}
                      />
                    </View>
                  }
                  text="USD"
                  textstyle={{
                    color: '#fff',
                    fontSize: 14,
                    fontFamily: PoppinsR,
                    marginVertical: 3,
                  }}
                  RightImage={
                    <View
                      style={{
                        width: 16,
                        height: 16,
                        left: 5,
                      }}>
                      <ArrowdownWhite
                        widht={Metrics.ratio(16)}
                        height={Metrics.ratio(16)}
                      />
                    </View>
                  }
                />
              </View>
            </View>
            <Text
              style={{
                fontSize: 32,
                fontFamily: PoppinsM,
                color: '#282C33',
                alignSelf: 'center',
                marginVertical: 3,
              }}>
              8,540.00
              <Text style={{fontSize: 20, fontFamily: OpenSansR}}> USDT</Text>
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: OpenSansR,
                color: '#1A0808',
                alignSelf: 'center',
              }}>
              Balance : $9,500.00
            </Text>
          </View>
          <View style={{marginTop: 12}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#17181A',
              }}>
              Transfer to
            </Text>
            <ButtonComponent
              style={{marginTop: 10}}
              text="435740 ( Wallet )"
              RightImage={
                <View style={{width: 24, height: 24}}>
                  <Arrowdown
                    widht={Metrics.ratio(24)}
                    height={Metrics.ratio(24)}
                  />
                </View>
              }
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              color: isDark ? '#FFF2F2' : '#040101',
              fontFamily: OpenSansR,
              marginTop: 25,
            }}>
            Transfer Amount
          </Text>

          <View
            style={{
              height: Metrics.ratio(100),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomWidth: 0.5,
              borderColor: '#FFF2F2',
            }}>
            <TextInput
              placeholder="2,000 USDT"
              textAlignVertical="bottom"
              placeholderTextColor={'#2E3033'}
              style={{
                fontSize: 24,
                fontFamily: PoppinsM,
                width: 300,
                height: 80,
                color: '#2E3033',
                top: 10,
              }}
            />
            <TouchableOpacity onPress={() => {}}>
              <Text
                style={{
                  color: isDark ? '#ED5858' : '#6A1717',
                  fontSize: 16,
                  fontFamily: OpenSansR,
                  top: 15,
                }}>
                Max
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          marginVertical: 10,
          alignSelf: 'center',
        }}
        onPress={() => {
          navigation.navigate('Transfer3');
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
    </SafeAreaView>
  );
};

export default InternalTransfer;
