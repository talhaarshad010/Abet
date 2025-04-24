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
  BNBSVG,
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
import ModalComponent from '../components/ModalComponent';

const Transactionhistory = ({navigation}) => {
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
              paddingHorizontal: 10,
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
                style={{width: 24, height: 24, left: 5, marginTop: 5}}>
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
              paddingHorizontal: 10,
              marginTop: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#fff',
                elevation: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
              }}>
              <TextInput
                placeholder="Search Here"
                placeholderTextColor={'lightgray'}
                style={{
                  width: Metrics.ratio(100),
                  fontSize: 14,
                  fontFamily: PoppinsR,
                  color: '#000',
                }}
              />
              <TouchableOpacity style={{width: 22, height: 22}}>
                <Search widht={Metrics.ratio(22)} height={Metrics.ratio(22)} />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity style={{right: 10, width: 24, height: 24}}>
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
                        {item.Usdt}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: PoppinsR,
                          color: '#5D6166',
                        }}>
                        {item.UsdtAmount}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <ModalComponent
            isVisible={isEnabled}
            onBackdropPress={() => {
              setIsEnabled(false);
            }}
            style={{justifyContent: 'flex-end', margin: 0}}>
            <View
              style={{
                width: widht * 1,
                alignSelf: 'center',
                minHeight: height * 0.8,
                elevation: 5,
                backgroundColor: isDark ? '#17181A' : '#fff',
                bottom: 0,
                position: 'absolute',
                padding: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginVertical: 15,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: OpenSansR,
                    color: isDark ? '#fff' : '#17181A',
                  }}>
                  Export
                </Text>
                <TouchableOpacity
                  style={{width: 30, height: 30}}
                  onPress={() => {
                    setIsEnabled(false);
                  }}>
                  <Exit widht={Metrics.ratio(30)} height={Metrics.ratio(30)} />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: PoppinsR,
                  color: '#8B9199',
                }}>
                Export as youn want
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <TouchableOpacity
                  style={{
                    width: Metrics.ratio(82),
                    height: Metrics.ratio(84),
                    borderRadius: 7,
                    backgroundColor: '#F0F4FA',
                    alignItems: 'center',
                  }}>
                  <View style={{marginVertical: 25, width: 32, height: 51}}>
                    <Csv widht={Metrics.ratio(32)} height={Metrics.ratio(51)} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: Metrics.ratio(82),
                    height: Metrics.ratio(84),
                    borderRadius: 7,
                    backgroundColor: '#F0F4FA',
                    alignItems: 'center',
                  }}>
                  <View style={{marginVertical: 25, width: 36, height: 51}}>
                    <Excel
                      widht={Metrics.ratio(36)}
                      height={Metrics.ratio(51)}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: Metrics.ratio(82),
                    height: Metrics.ratio(84),
                    borderRadius: 7,
                    backgroundColor: '#F0F4FA',
                    alignItems: 'center',
                  }}>
                  <View style={{marginVertical: 25, width: 39, height: 51}}>
                    <Pdf widht={Metrics.ratio(39)} height={Metrics.ratio(51)} />
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{marginVertical: 30, alignSelf: 'center'}}
                onPress={() => {
                  navigation.navigate('InviteFriend');
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
                    Export
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ModalComponent>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          setIsEnabled(true);
        }}
        style={{marginVertical: 10, alignSelf: 'center'}}>
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

export default Transactionhistory;

const styles = StyleSheet.create({});
