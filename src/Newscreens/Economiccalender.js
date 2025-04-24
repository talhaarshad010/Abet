import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {OpenSansR, PoppinsM, PoppinsR, PoppinsSB} from '../components/fonts';
import {useSelector} from 'react-redux';
import Header3 from '../components/Header3';
import {EconomicCalen, economic} from '../Dammy/Dammy';
import {Metrics} from '../themes';
import LinearGradient from 'react-native-linear-gradient';
import {
  England,
  India,
  Scotland,
  Search,
  Setting,
  SettingLine,
} from '../themes/SvgIcons';

const Economiccalender = ({navigation}) => {
  const isDark = useSelector(state => state?.darkModa?.data);
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').width;
  const [select, setselect] = useState(0);
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{marginVertical: 20}}
        onPress={() => {
          setselect(item.id);
        }}>
        <LinearGradient
          colors={
            select === item.id ? ['#ED5858', '#6A1717'] : ['#fff', '#fff']
          }
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            paddingHorizontal: 10,
            height: Metrics.ratio(24),
            marginHorizontal: 10,
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          locations={[0.084, 0.9669]}
          onTouchEnd={() => {}}>
          <Text
            style={{
              textAlign: 'center',

              // fontSize: 16,
              color: select === item.id ? '#fff' : '#5D6166',
              fontFamily: OpenSansR,
            }}>
            {item.title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const renderItem1 = ({item, index}) => {
    return (
      <View style={{marginHorizontal: 15}}>
        {index === 2 ? (
          <Text
            style={{
              fontSize: 16,
              color: '#5D6166',
              fontFamily: OpenSansR,
              marginVertical: 20,
            }}>
            {item.UpCom}
          </Text>
        ) : null}
        <View
          style={{
            height: Metrics.ratio(123),
            backgroundColor: '#fff',
            borderRadius: 16,
            elevation: 5,
            padding: 10,
            margin: 5,
            marginBottom: index === economic?.length - 1 ? 20 : null,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: '#000',
              paddingBottom: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: 31, height: 31}}>
                {index === 1 ? (
                  <England
                    widht={Metrics.ratio(31)}
                    height={Metrics.ratio(31)}
                  />
                ) : index === 2 ? (
                  <Scotland
                    widht={Metrics.ratio(31)}
                    height={Metrics.ratio(31)}
                  />
                ) : (
                  <India widht={Metrics.ratio(31)} height={Metrics.ratio(31)} />
                )}
              </View>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 14,
                  color: '#000000',
                  fontFamily: PoppinsM,
                  left: 10,
                  width: Metrics.ratio(130),
                }}>
                {item.title}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 10,
                color: '#000000',
                fontFamily: PoppinsR,
              }}>
              {item.date}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: PoppinsR,
                  color: '#E96D6D',
                }}>
                {item.Actual}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: PoppinsR,
                  color: '#E96D6D',
                }}>
                {item.ActNum}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: PoppinsR,
                  color: '#00A478',
                }}>
                {item.Forecast}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: PoppinsR,
                  color: '#00A478',
                }}>
                {item.Forenum}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: PoppinsR,
                  color: '#5D6166',
                }}>
                {item.Prev}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: PoppinsR,
                  color: '#5D6166',
                }}>
                {item.PrevNum}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: PoppinsR,
                  color: '#5D6166',
                }}>
                {item.Currency}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 16, height: 16, top: -2}}>
                  <India widht={Metrics.ratio(16)} height={Metrics.ratio(16)} />
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: PoppinsR,
                    color: '#5D6166',
                    left: 5,
                  }}>
                  {item.Inr}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDark ? '#000' : '#fff',
      }}>
      <Header3 navigation={navigation} />

      <View style={{paddingHorizontal: 20}}>
        <Text
          style={{
            fontFamily: PoppinsSB,
            fontSize: 24,
            color: isDark ? '#fff' : '#17181A',
            marginTop: 10,
            alignItems: 'center',
          }}>
          Economic Calender
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={EconomicCalen}
          renderItem={renderItem}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#fff',
              elevation: 5,
              paddingHorizontal: 20,
              borderRadius: 10,
            }}>
            <TextInput
              placeholder="Search Here"
              style={{
                width: Metrics.ratio(100),
                fontSize: 14,
                fontFamily: PoppinsR,
                color: '#000',
              }}
              placeholderTextColor={'lightgray'}
            />
            <TouchableOpacity style={{width: 22, height: 22}}>
              <Search widht={Metrics.ratio(22)} height={Metrics.ratio(22)} />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Holidayscalender');
              }}
              style={{marginHorizontal: 20, width: 24, height: 24}}>
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
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        // style={{marginBottom: 220}}
        data={economic}
        renderItem={renderItem1}
      />
    </SafeAreaView>
  );
};

export default Economiccalender;

const styles = StyleSheet.create({});
