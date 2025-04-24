import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Header3 from '../components/Header3';
import {OpenSansR, PoppinsR, PoppinsSB} from '../components/fonts';
import {Metrics} from '../themes';
import {Circle, Copy, Hands, Line, Path, Plane} from '../themes/SvgIcons';
import LinearGradient from 'react-native-linear-gradient';
import {FurtherRequest} from '../Dammy/Dammy';

const BecomePartner = ({navigation}) => {
  const isDark = useSelector(state => state?.darkModa?.data);
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').width;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: isDark ? '#000' : '#fff'}}>
      <Header3 navigation={navigation} />
      <ScrollView>
        <View style={{marginHorizontal: 20}}>
          <Text
            style={{
              fontFamily: PoppinsSB,
              fontSize: 24,
              color: isDark ? '#fff' : '#17181A',
              marginTop: 10,
              alignItems: 'center',
            }}>
            Become a Partner
          </Text>
          <Text style={{fontSize: 14, fontFamily: PoppinsR, color: '#5D6166'}}>
            Affiliate Request Request Type a friend email to Refer a friend
          </Text>
          <View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View style={{right: 0}}>
                <View style={{flexDirection: 'row', left: 230, top: -20}}>
                  <View style={{width: 100, height: 100}}>
                    <Circle
                      widht={Metrics.ratio(100)}
                      height={Metrics.ratio(100)}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 364,
                  height: 56,
                  right: 70,
                  marginTop: -14,
                }}>
                <Line widht={Metrics.ratio(364)} height={Metrics.ratio(56)} />
              </View>
            </View>
          </View>
          <View
            style={{
              height: Metrics.ratio(204),
              borderRadius: 12,
              backgroundColor: '#F1F6F9',
              marginTop: -70,
              padding: 20,
            }}>
            <View
              style={{
                width: 113,
                height: 56,
                left: 220,
                marginTop: -60,
              }}>
              <Hands widht={Metrics.ratio(113)} height={Metrics.ratio(56)} />
            </View>

            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: '#000',
                marginTop: 5,
              }}>
              Last Company name
            </Text>
            <TextInput
              placeholder="Creation"
              placeholderTextColor={'#000'}
              textAlignVertical="bottom"
              style={{
                borderBottomWidth: 0.5,
                borderColor: '#000',
                fontSize: 16,
                fontFamily: OpenSansR,
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 30,
              }}>
              <View>
                <Text
                  style={{fontSize: 12, fontFamily: OpenSansR, color: '#000'}}>
                  Total Clients
                </Text>
                <TextInput
                  textAlignVertical="bottom"
                  placeholder="10"
                  placeholderTextColor={'#000'}
                  style={{
                    width: Metrics.ratio(140),
                    borderBottomWidth: 0.5,
                    borderColor: '#000',

                    fontSize: 16,
                    fontFamily: OpenSansR,
                  }}
                />
              </View>
              <View>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 12,
                    fontFamily: OpenSansR,
                    color: '#000',
                    width: Metrics.ratio(130),
                  }}>
                  Total Trading Experience
                </Text>
                <TextInput
                  textAlignVertical="bottom"
                  placeholder="20"
                  placeholderTextColor={'#000'}
                  style={{
                    width: Metrics.ratio(160),
                    borderBottomWidth: 0.5,
                    borderColor: '#000',

                    fontSize: 16,
                    fontFamily: OpenSansR,
                  }}
                />
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AffilateRequest');
            }}
            style={{marginVertical: 20, alignSelf: 'center'}}>
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
                Submit
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontFamily: OpenSansR,
              color: isDark ? '#fff' : '#2E3033',
              marginBottom: 10,
            }}>
            Further Requests
          </Text>
          <FlatList
            data={FurtherRequest}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    height: Metrics.ratio(152),
                    borderRadius: 16,
                    backgroundColor: '#FFFFFF',
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    elevation: 5,
                    marginTop: 10,
                    margin: 5,

                    borderColor: '#FFFFFF',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View>
                      <Text
                        style={{
                          fontFamily: PoppinsR,
                          fontSize: 11,
                          color: '#333333',
                          top: 3,
                        }}>
                        {item.FullName}
                      </Text>
                      <Text
                        style={{
                          fontFamily: PoppinsSB,
                          fontSize: 11,
                          color: '#333333',
                        }}>
                        {item.Name}
                      </Text>

                      <View style={{marginVertical: 5}}>
                        <Text
                          style={{
                            fontFamily: PoppinsR,
                            fontSize: 11,
                            color: '#333333',
                            top: 3,
                          }}>
                          {item.Email}
                        </Text>
                        <Text
                          numberOfLines={1}
                          style={{
                            fontFamily: PoppinsSB,
                            fontSize: 11,
                            color: '#333333',
                            width: Metrics.ratio(130),
                          }}>
                          {item.EmailAddress}
                        </Text>
                      </View>

                      <Text
                        style={{
                          fontFamily: PoppinsR,
                          fontSize: 11,
                          color: '#333333',
                          top: 3,
                        }}>
                        {item.LastCompany}
                      </Text>
                      <Text
                        style={{
                          fontFamily: PoppinsSB,
                          fontSize: 11,
                          color: '#333333',
                        }}>
                        {item.No}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontFamily: PoppinsR,
                          fontSize: 11,
                          color: '#333333',
                          top: 3,
                        }}>
                        {item.Status}
                      </Text>
                      <Text
                        style={{
                          fontFamily: PoppinsSB,
                          fontSize: 11,
                          color: '#333333',
                        }}>
                        {item.Apporved}
                      </Text>

                      <View style={{marginVertical: 5}}>
                        <Text
                          style={{
                            fontFamily: PoppinsR,
                            fontSize: 11,
                            color: '#333333',
                            top: 3,
                          }}>
                          {item.TotalExperience}
                        </Text>
                        <Text
                          style={{
                            fontFamily: PoppinsSB,
                            fontSize: 11,
                            color: '#333333',
                          }}>
                          {item.Years}
                        </Text>
                      </View>

                      <Text
                        style={{
                          fontFamily: PoppinsR,
                          fontSize: 11,
                          color: '#333333',
                          top: 3,
                        }}>
                        {item.Affilate}
                      </Text>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontFamily: PoppinsSB,
                            fontSize: 11,
                            color: '#333333',
                          }}>
                          {item.Copy}
                        </Text>
                        <View style={{width: 13, height: 13, left: 10}}>
                          <Copy
                            widht={Metrics.ratio(13)}
                            height={Metrics.ratio(13)}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BecomePartner;

const styles = StyleSheet.create({});
