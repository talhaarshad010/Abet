import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {PoppinsR, PoppinsSB} from '../components/fonts';
import Header3 from '../components/Header3';
import {Metrics} from '../themes';
import {Copy, Search, SettingLine} from '../themes/SvgIcons';
import {AffiliateReq} from '../Dammy/Dammy';

const AffilateRequest = ({navigation}) => {
  const isDark = useSelector(state => state?.darkModa?.data);
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').width;

  const renderItem = ({item, index}) => {
    const isOdd = index % 2 === 0;
    return (
      <View
        style={{
          height: Metrics.ratio(152),
          backgroundColor: isOdd ? '#fff' : '#F1F6F9',
          padding: 16,
          margin: 5,
          borderRadius: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          elevation: 5,
          marginTop: 5,
        }}>
        <View>
          <Text
            style={{
              fontSize: 11,
              color: '#333333',
              fontFamily: PoppinsR,
              top: 3,
            }}>
            {item.SNo}
          </Text>
          <Text
            style={{
              fontSize: 11,
              color: '#333333',
              fontFamily: PoppinsSB,
            }}>
            {item.Num}
          </Text>

          <Text
            style={{
              fontSize: 11,
              color: '#333333',
              fontFamily: PoppinsR,
              top: 3,
            }}>
            {item.FullName}
          </Text>
          <Text
            style={{
              fontSize: 11,
              color: '#333333',
              fontFamily: PoppinsSB,
            }}>
            {item.Name}
          </Text>

          <Text
            style={{
              fontSize: 11,
              color: '#333333',
              fontFamily: PoppinsR,
              top: 3,
            }}>
            {item.Email}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              width: Metrics.ratio(130),
              fontSize: 11,
              color: '#333333',
              fontFamily: PoppinsSB,
            }}>
            {item.EmailAddress}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 11,
              color: '#333333',
              fontFamily: PoppinsR,
              top: 3,
            }}>
            {item.DateTime}
          </Text>
          <Text
            style={{
              fontSize: 11,
              color: '#333333',
              fontFamily: PoppinsSB,
            }}>
            {item.Date}
          </Text>

          <Text
            style={{
              fontSize: 11,
              color: '#333333',
              fontFamily: PoppinsR,
              top: 3,
            }}>
            {item.TotalExperience}
          </Text>
          <Text
            style={{
              fontSize: 11,
              color: '#333333',
              fontFamily: PoppinsSB,
            }}>
            {item.Years}
          </Text>

          <Text
            style={{
              fontSize: 11,
              color: '#333333',
              fontFamily: PoppinsR,
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
              <Copy widht={Metrics.ratio(13)} height={Metrics.ratio(13)} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: isDark ? '#000' : '#fff'}}>
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
          Affiliate Request
        </Text>
        <View
          style={{
            height: Metrics.ratio(50),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            placeholder="Search Here"
            placeholderTextColor={'#BAC2CC'}
            style={{
              fontSize: 14,
              fontFamily: PoppinsR,
              width: 250,
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Referral');
              }}
              style={{width: 24, height: 24, flex: 0.3}}>
              <SettingLine
                widht={Metrics.ratio(24)}
                height={Metrics.ratio(24)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{width: 22, height: 22, flex: 0.2}}>
              <Search widht={Metrics.ratio(22)} height={Metrics.ratio(22)} />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          style={{marginBottom: 150}}
          showsVerticalScrollIndicator={false}
          data={AffiliateReq}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default AffilateRequest;

const styles = StyleSheet.create({});
