import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {OpenSansR, PoppinsM, PoppinsR, PoppinsSB} from '../components/fonts';
import Header3 from '../components/Header3';
import {useSelector} from 'react-redux';
import ButtonComponent from '../components/ButtonComponent';
import {Metrics} from '../themes';
import {
  AmericanFlag,
  Arrowdown,
  ArrowdownWhite,
  Blueflag,
  Dollar,
} from '../themes/SvgIcons';
import TextInputComponent from '../components/TextInputComponent';
import LinearGradient from 'react-native-linear-gradient';

const Positionsize = ({navigation}) => {
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
            Position Size Calculator
          </Text>

          <View style={{marginTop: 12}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#17181A',
              }}>
              Account Currency
            </Text>
            <ButtonComponent
              onpress={() => {}}
              style={{marginTop: 10}}
              text="USD Dollar"
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
          </View>
          <Text
            style={{
              fontSize: 12,
              fontFamily: OpenSansR,
              color: isDark ? '#fff' : '#17181A',
              marginTop: 12,
            }}>
            Account Balance
          </Text>
          <View
            style={{
              height: Metrics.ratio(134),
              backgroundColor: '#F1F6F9',
              padding: 16,
              borderRadius: 16,
              marginTop: 10,
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
          <View style={{marginTop: 15}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#17181A',
              }}>
              Instruments
            </Text>
            <ButtonComponent
              style={{marginTop: 10}}
              text="EUR/USD"
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
          <View style={{marginTop: 15}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#17181A',
              }}>
              Stop Loss
            </Text>
            <TextInputComponent
              inputstyle={{marginTop: 10, marginBottom: 0}}
              placeholder={'50'}
              placeholderTextColor="#2E3033"
            />
          </View>
          <View style={{marginTop: 15}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#17181A',
              }}>
              Conversion Rate
            </Text>
            <TextInputComponent
              inputstyle={{marginTop: 10, marginBottom: 10}}
              placeholder={'1'}
              placeholderTextColor="#2E3033"
            />
          </View>
          <View style={{marginTop: 5}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#17181A',
              }}>
              Risk Unit
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <ButtonComponent
                style={{
                  marginTop: 10,
                  width: Metrics.ratio(161),
                  height: Metrics.ratio(49),
                  backgroundColor: '#fff',
                  borderColor: '#FFCDCD',
                  borderWidth: 0.5,
                }}
                textstyle={{paddingHorizontal: 25}}
                text="Percent"
              />
              <ButtonComponent
                style={{
                  marginTop: 10,
                  width: Metrics.ratio(161),
                  height: Metrics.ratio(49),
                }}
                textstyle={{paddingHorizontal: 25}}
                text="Currency"
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#17181A',
              }}>
              Risk Percentage
            </Text>
            <TextInputComponent
              inputstyle={{marginTop: 10, marginBottom: 10}}
              placeholder={'2 %'}
              placeholderTextColor="#2E3033"
            />
          </View>
          <View style={{marginTop: 5}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#17181A',
              }}>
              Account Currency
            </Text>
            <ButtonComponent
              onpress={() => {
                navigation.navigate('Positionsize');
              }}
              style={{marginTop: 10}}
              text="4,000 E"
              textstyle={{flex: 0.9, color: '#2E3033'}}
              leftImage={
                <View
                  style={{
                    width: 39,
                    height: 26,
                  }}>
                  <Blueflag
                    widht={Metrics.ratio(39)}
                    height={Metrics.ratio(26)}
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
              Amount at Risk
            </Text>
            <ButtonComponent
              onpress={() => {
                navigation.navigate('Positionsize');
              }}
              style={{marginTop: 10}}
              text="20 USD"
              textstyle={{flex: 0.9, color: '#2E3033'}}
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
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{marginVertical: 10, alignSelf: 'center'}}
        onPress={() => {
          navigation.navigate('Economiccalender');
        }}>
        <LinearGradient
          colors={['#ED5858', '#6A1717']}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 40,
            padding: 15,
            borderRadius: 16,
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

export default Positionsize;

const styles = StyleSheet.create({});
