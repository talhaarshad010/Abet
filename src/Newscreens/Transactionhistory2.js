import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Header3 from '../components/Header3';
import {OpenSansR, PoppinsM, PoppinsR, PoppinsSB} from '../components/fonts';
import {
  Arrowdown,
  CryptoDown,
  CryptoUp,
  Csv,
  Excel,
  Exit,
  Export,
  Logo,
  Pdf,
  Search,
  Setting,
  SettingLine,
} from '../themes/SvgIcons';
import {Metrics} from '../themes';
import ButtonComponent from '../components/ButtonComponent';
import {TransacHistory} from '../Dammy/Dammy';
import LinearGradient from 'react-native-linear-gradient';

const Transactionhistory2 = ({navigation}) => {
  const isDark = useSelector(state => state?.darkModa?.data);
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').width;
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: isDark ? '#000' : '#fff'}}>
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
            Transaction History
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 40,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: OpenSansR,
                  fontSize: 16,
                  color: isDark ? '#fff' : '#17181A',
                }}>
                Accounts Deposit
              </Text>
              <TouchableOpacity
                style={{width: 24, height: 24, left: 30, marginTop: 5}}>
                <Arrowdown
                  widht={Metrics.ratio(24)}
                  height={Metrics.ratio(24)}
                />
              </TouchableOpacity>
            </View>
            <ButtonComponent
              text="Export"
              textstyle={{color: '#fff', fontSize: 14}}
              style={{
                backgroundColor: '#282C33',
                width: Metrics.ratio(105),
                height: Metrics.ratio(42),
                borderRadius: Metrics.ratio(16),
                alignItems: 'center',
                paddingHorizontal: 12,
              }}
              leftImage={
                <View style={{width: 26, height: 26}}>
                  <Export
                    widht={Metrics.ratio(26)}
                    height={Metrics.ratio(26)}
                  />
                </View>
              }
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingRight: 10,
              marginTop: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextInput
                placeholder="Search Here"
                placeholderTextColor={'#F1F6F9'}
                style={{
                  width: Metrics.ratio(100),
                  fontSize: 14,
                  fontFamily: PoppinsR,
                }}
              />
              <TouchableOpacity style={{width: 22, height: 22}}>
                <Search widht={Metrics.ratio(22)} height={Metrics.ratio(22)} />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                style={{width: 24, height: 24, marginHorizontal: 20}}>
                <SettingLine
                  widht={Metrics.ratio(24)}
                  height={Metrics.ratio(24)}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{width: 24, height: 24}}>
                <Setting widht={Metrics.ratio(24)} height={Metrics.ratio(24)} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <FlatList
              data={TransacHistory}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                      height: Metrics.ratio(81),
                      borderRadius: 16,
                      padding: 12,
                      backgroundColor: '#FFFFFF',
                      elevation: 5,
                      margin: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        {index === 0 ? (
                          <View style={{width: 26, height: 26}}>
                            <CryptoUp
                              widht={Metrics.ratio(26)}
                              height={Metrics.ratio(26)}
                            />
                          </View>
                        ) : index === 3 ? (
                          <View style={{width: 26, height: 26}}>
                            <CryptoUp
                              widht={Metrics.ratio(26)}
                              height={Metrics.ratio(26)}
                            />
                          </View>
                        ) : (
                          <View style={{width: 26, height: 26}}>
                            <CryptoDown
                              widht={Metrics.ratio(26)}
                              height={Metrics.ratio(26)}
                            />
                          </View>
                        )}
                        <Text
                          style={{
                            fontSize: 14,
                            fontFamily: PoppinsM,
                            color: '#000',
                            left: 10,
                          }}>
                          {item.name}
                        </Text>
                      </View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontFamily: OpenSansR,
                          color: '#000',
                        }}>
                        {item.Amount}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginVertical: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: PoppinsR,
                          color: '#BAC2CC',
                        }}>
                        IB Wallet
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: PoppinsR,
                          color: '#5D6166',
                        }}>
                        29 jul, 2023 10:28 AM
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Pipscalculator');
            }}
            style={{marginVertical: 50, marginHorizontal: widht * 0.22}}>
            <LinearGradient
              colors={['#ED5858', '#6A1717']}
              style={{
                justifyContent: 'center',
                alignItems: 'center',

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
                Next
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Transactionhistory2;
