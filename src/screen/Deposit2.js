import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header2 from '../components/Header2';
import {useSelector} from 'react-redux';
import {OpenSansR, PoppinsM, PoppinsR, PoppinsSB} from '../components/fonts';
import {Metrics} from '../themes';
import {Arrowdown, PerfeckMoney} from '../themes/SvgIcons';
import {Depost2} from '../Dammy/Dammy';
import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';
import LinearGradient from 'react-native-linear-gradient';

const Deposit2 = ({navigation}) => {
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const isDark = useSelector(state => state?.darkModa?.data);
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          height: Metrics.ratio(241),
          borderRadius: 16,
          borderColor: '#FFCDCD',
          borderWidth: 1,
          padding: 16,
          marginTop: 30,
        }}>
        <View style={{width: 210, height: 43}}>
          <PerfeckMoney widht={Metrics.ratio(210)} height={Metrics.ratio(43)} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 20,
            marginBottom: 15,
          }}>
          <View>
            <Text
              style={{
                fontSize: 12,
                color: '#BAC2CC',
                fontFamily: PoppinsR,
              }}>
              {item.title1}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: PoppinsR,
                color: '#5D6166',
              }}>
              {item.Sub1}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 12,
                color: '#BAC2CC',
                fontFamily: PoppinsR,
              }}>
              {item.title2}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: PoppinsR,
                color: '#5D6166',
              }}>
              {item.Sub2}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 12,
                color: '#BAC2CC',
                fontFamily: PoppinsR,
              }}>
              {item.title3}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: PoppinsR,
                color: '#5D6166',
              }}>
              {item.Sub3}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 12,
              color: '#BAC2CC',
              fontFamily: PoppinsR,
            }}>
            {item.title4}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: PoppinsR,
              color: '#5D6166',
            }}>
            {item.Sub4}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: isDark ? '#000' : '#fff'}}>
      <Header2 text={'Cancel'} navigation={navigation} istwo />
      <ScrollView>
        <View style={{paddingHorizontal: 20}}>
          <Text
            style={{
              color: '#000',
              fontFamily: PoppinsSB,
              fontSize: 24,
            }}>
            Deposit
          </Text>
          <View>
            <FlatList data={Depost2} renderItem={renderItem} />
          </View>

          <View style={{marginTop: 12}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#17181A',
              }}>
              To account
            </Text>
            <ButtonComponent
              style={{marginTop: 10}}
              text="To account"
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
              Currency
            </Text>
            <ButtonComponent
              style={{marginTop: 10}}
              text="USD"
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
              Amount
            </Text>
            <TextInputComponent
              inputstyle={{marginTop: 10, marginBottom: 10}}
              placeholder={'0.000'}
              placeholderTextColor="gray"
            />
          </View>
          <View style={{marginTop: 5}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#17181A',
              }}>
              Conversion Rate
            </Text>
            <TextInputComponent
              inputstyle={{marginTop: 10}}
              placeholder={'1'}
            />
          </View>
          <View
            style={{
              width: Metrics.ratio(26),
              height: Metrics.ratio(26),
              borderRadius: 20,
              backgroundColor: '#DD4F03',
              alignItems: 'center',
              alignSelf: 'center',
              marginVertical: 5,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: PoppinsM,
                color: '#000',
                paddingVertical: 3,
              }}>
              P
            </Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 25}}>
            <Text
              style={{
                fontFamily: PoppinsR,
                fontSize: 14,
                color: isDark ? '#fff' : '#17181A',
              }}>
              Deposit Amount in $
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
          {/* <TouchableOpacity
            style={{
              marginHorizontal: widht * 0.22,
              marginVertical: 30,
            }}
            onPress={() => {
              navigation.navigate('Deposit3');
            }}>
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
              locations={[0.084, 0.9669]}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  color: '#fff',
                  fontFamily: OpenSansR,
                }}>
                Next
              </Text>
            </LinearGradient>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              marginVertical: 20,
            }}
            onPress={() => {
              navigation.navigate('Deposit3');
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
                Next
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Deposit2;

const styles = StyleSheet.create({});
