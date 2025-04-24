import {
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {OpenSansR, PoppinsM, PoppinsR, PoppinsSB} from '../components/fonts';
import {useSelector} from 'react-redux';
import Header3 from '../components/Header3';
import ButtonComponent from '../components/ButtonComponent';
import {
  Arrowdown,
  ArrowdownWhite,
  Dollar,
  Errorr,
  Refresh,
} from '../themes/SvgIcons';
import {Metrics} from '../themes';
import TextInputComponent from '../components/TextInputComponent';
import LinearGradient from 'react-native-linear-gradient';

const WithdrawalTransferFund = ({navigation}) => {
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
            Withdrawal
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
              fontSize: 14,
              fontFamily: PoppinsR,
              color: '#5D6166',
              marginTop: 30,
            }}>
            Withdrawal Wallet Details
          </Text>
          <View style={{marginTop: 20}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#17181A',
              }}>
              Payment Method
            </Text>
            <ButtonComponent
              style={{marginTop: 10}}
              text="Perfect Money"
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
          <View style={{marginTop: 12}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#17181A',
              }}>
              From account
            </Text>
            <ButtonComponent
              style={{marginTop: 10}}
              text="Ib Wallet"
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
              height: Metrics.ratio(134),
              backgroundColor: '#F1F6F9',
              padding: 16,
              borderRadius: 16,
              marginVertical: 30,
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
          <View style={{}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#17181A',
              }}>
              Perfect Money ID
            </Text>
            <TextInputComponent
              inputstyle={{marginTop: 10, marginBottom: 10}}
              placeholder={'74500'}
              placeholderTextColor="gray"
            />
          </View>
          <View style={{marginTop: 12}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#17181A',
              }}>
              Conversion Rate
            </Text>
            <TextInputComponent
              inputstyle={{marginTop: 10, marginBottom: 30}}
              placeholder={'1'}
            />
          </View>
          <View style={{alignItems: 'center', marginBottom: 20}}>
            <Text
              style={{
                fontFamily: PoppinsR,
                fontSize: 14,
                color: isDark ? '#fff' : '#17181A',
              }}>
              Amount
            </Text>
            <Text
              style={{
                fontFamily: PoppinsM,
                fontSize: 24,
                color: isDark ? '#fff' : '#17181A',
              }}>
              2,000.00 USD
            </Text>
          </View>
          <View style={{marginTop: 12}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#17181A',
              }}>
              Withdrawal Code
            </Text>
            <TextInputComponent
              inputstyle={{marginTop: 10, marginBottom: 10}}
              placeholder={'74544'}
              placeholderTextColor="gray"
              RightText={'Get Code'}
            />
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: OpenSansR,
                fontSize: 12,
                color: isDark ? '#fff' : '#17181A',
                right: 5,
              }}>
              Resend
            </Text>
            <View style={{width: 19, height: 19}}>
              <Refresh widht={Metrics.ratio(19)} height={Metrics.ratio(19)} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{width: 24, height: 24}}>
            <Errorr widht={Metrics.ratio(24)} height={Metrics.ratio(24)} />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: OpenSansR,
              fontSize: 12,
              marginTop: 10,
              color: isDark ? '#fff' : '#17181A',
            }}>
            Withdrawal processed within 24 hours. If we require any further
            information we will contact you within 24 Hours If you have any
            questions, inquiries or concerns, please do not hesitate to contact
            us.
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{marginVertical: 10, alignSelf: 'center'}}
        onPress={() => {
          navigation.navigate('Transactionhistory');
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
          locations={[0.084, 0.9669]}
          onTouchEnd={() => {}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              color: '#fff',
              fontFamily: OpenSansR,
            }}>
            Next
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WithdrawalTransferFund;
