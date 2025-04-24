import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header2 from '../components/Header2';
import {
  OpenSansR,
  PoppinsB,
  PoppinsM,
  PoppinsR,
  PoppinsSB,
} from '../components/fonts';

import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {Deposit1} from '../Dammy/Dammy';
import {Metrics} from '../themes';
import {Check} from '../themes/SvgIcons';
const Withdarawalinternalfund = ({navigation}) => {
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const isDark = useSelector(state => state?.darkModa?.data);
  const [Select, setSelect] = useState();
  useEffect(() => {
    setSelect(0);
  }, []);
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelect(index);
        }}
        style={{
          borderRadius: 16,
          padding: 12,
          borderWidth: Select === index ? 1 : 0,
          marginTop: 10,
          borderColor: Select === index ? '#FFCDCD' : null,
          height: Metrics.ratio(81),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: Metrics.ratio(26),
                height: Metrics.ratio(26),
                borderRadius: 20,
                backgroundColor: index === 0 ? '#DD4F03' : '#FFA473',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: PoppinsM,
                  color: '#000',
                  paddingVertical: 2,
                }}>
                {index === 0 ? 'P' : '#'}
              </Text>
            </View>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 14,
                fontFamily: PoppinsM,
                color: '#000000',
                marginHorizontal: 10,
                width: 140,
              }}>
              {item.title}
            </Text>
          </View>

          {Select === index ? (
            <LinearGradient
              colors={['#ED5858', '#6A1717']}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
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
          ) : null}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 8,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: PoppinsR,
              color: '#5D6166',
            }}>
            {item.min}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: PoppinsR,
              color: '#5D6166',
            }}>
            {item.max}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: isDark ? '#000' : '#fff'}}>
      <Header2 text={'Cancel'} navigation={navigation} />
      <ScrollView>
        <View style={{paddingHorizontal: 20}}>
          <Text
            style={{
              color: '#000',
              fontFamily: PoppinsSB,
              fontSize: 24,
            }}>
            Withdrawal
          </Text>
          <Text
            style={{
              color: '#5D6166',
              fontSize: 14,
              fontFamily: PoppinsR,
              marginTop: 40,
            }}>
            Select an account for Withdrawal.
          </Text>
          <View style={{marginTop: 20}}>
            <FlatList data={Deposit1} renderItem={renderItem} />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
          marginVertical: 10,
        }}
        onPress={() => {
          navigation.navigate('Paymentmethod');
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
    </SafeAreaView>
  );
};
export default Withdarawalinternalfund;
