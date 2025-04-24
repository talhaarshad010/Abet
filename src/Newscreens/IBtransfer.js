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

const IBtransfer = ({navigation}) => {
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
            IB Transfer Fund
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
          <Text
            style={{
              fontSize: 12,
              fontFamily: OpenSansR,
              color: isDark ? '#FFF2F2' : '#2E3033',
              marginTop: 50,
            }}>
            Transfer From
          </Text>
          <View
            style={{
              height: Metrics.ratio(52),
              backgroundColor: '#F1F6F9',
              borderRadius: 12,
              padding: 16,
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: OpenSansR,
                color: '#2E3033',
              }}>
              IB Wallet
            </Text>
          </View>
          <View
            style={{
              height: Metrics.ratio(134),
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
                marginVertical: 12,
              }}>
              Balance 0.38
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              color: isDark ? '#FFF2F2' : '#040101',
              fontFamily: OpenSansR,
              marginVertical: 25,
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
        style={{marginVertical: 10, alignSelf: 'center'}}
        onPress={() => {
          navigation.navigate('WithdrawalTransferFund');
        }}>
        <LinearGradient
          colors={['#ED5858', '#6A1717']}
          style={{
            justifyContent: 'center',
            alignItems: 'center',

            padding: 15,
            borderRadius: 16,
            paddingHorizontal: 40,
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
            Submit
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default IBtransfer;
