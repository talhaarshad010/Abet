import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Header3 from '../components/Header3';
import {OpenSansR, PoppinsM, PoppinsR, PoppinsSB} from '../components/fonts';
import {createAccount} from '../Dammy/Dammy';
import {Metrics} from '../themes';
import LinearGradient from 'react-native-linear-gradient';
import {Arrowdown, Check} from '../themes/SvgIcons';
import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';

const Newaccount = ({navigation}) => {
  const isDark = useSelector(state => state?.darkModa?.data);
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').width;
  const [Select, setSelect] = useState(0);
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelect(index);
        }}
        style={{
          width: Metrics.ratio(105),
          // height: Metrics.ratio(94),
          justifyContent: 'space-between',
          borderRadius: 12,
          backgroundColor: '#fff',
          borderColor: Select === index ? '#FFCDCD' : '#fff',
          borderWidth: 1,
          marginHorizontal: 5,
          marginTop: 20,
          elevation: 5,
          margin: 5,
          // flex: 1,
          padding: 10,
        }}>
        {Select === index ? (
          <View style={{}}>
            <LinearGradient
              colors={['#ED5858', '#6A1717']}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'flex-end',
                width: Metrics.ratio(20),
                height: Metrics.ratio(20),
                borderRadius: 15,
                padding: 15,
              }}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              locations={[0.084, 0.9669]}>
              <View style={{width: 11, height: 11}}>
                <Check widht={Metrics.ratio(11)} height={Metrics.ratio(11)} />
              </View>
            </LinearGradient>
          </View>
        ) : (
          <View style={{}}></View>
        )}

        <Text
          style={{
            fontSize: 14,
            color: '#000',
            fontFamily: PoppinsM,
            width: 90,
          }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
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
            Open New Account
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: PoppinsR,
              color: '#5D6166',
              marginTop: 10,
            }}>
            Create An Account
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: OpenSansR,
              color: '#5D6166',
              marginTop: 20,
            }}>
            Account type
          </Text>
          <FlatList horizontal data={createAccount} renderItem={renderItem} />
          <View style={{marginTop: 12}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#17181A',
              }}>
              Platform
            </Text>
            <ButtonComponent
              style={{marginTop: 10}}
              text="Mega Trader 5"
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
              text="$ USD"
              textstyle={{
                fontFamily: OpenSansR,
                color: '#8B9199',
                fontSize: 16,
              }}
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
              Account Type
            </Text>
            <ButtonComponent
              style={{marginTop: 10}}
              text="ECN"
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
              Leverage
            </Text>
            <ButtonComponent
              style={{marginTop: 10}}
              text="1:50"
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
              Promo Code (Optional)
            </Text>
            <ButtonComponent
              style={{marginTop: 10}}
              text="1:50"
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
              Main Password
            </Text>
            <TextInputComponent
              inputstyle={{marginTop: 10, marginBottom: 10}}
              placeholder={'Create a strong password'}
              placeholderTextColor="gray"
              RightText={'Generate'}
              RtStyle={{fontSize: 14, color: '#2E3033', fontFamily: PoppinsM}}
            />
          </View>
          <View style={{marginTop: 12}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#17181A',
              }}>
              Read-Only Password
            </Text>
            <TextInputComponent
              inputstyle={{marginTop: 10, marginBottom: 10}}
              placeholder={'Create a strong password'}
              placeholderTextColor="gray"
              RightText={'Generate'}
              RtStyle={{fontSize: 14, color: '#2E3033', fontFamily: PoppinsM}}
            />
          </View>
          {/* <TouchableOpacity
            style={{
              marginHorizontal: widht * 0.22,
              marginVertical: 30,
            }}
            onPress={() => {
              //   navigation.navigate('Deposit3');
            }}>
            <LinearGradient
              colors={['#6FCF97', '#6FCF97']}
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
                Submit
              </Text>
            </LinearGradient>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              marginVertical: 40,
            }}
            onPress={() => {}}>
            <LinearGradient
              colors={['#6FCF97', '#6FCF97']}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 15,
                borderRadius: 16,
                paddingHorizontal: 50,
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
                Submit
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Newaccount;

const styles = StyleSheet.create({});
