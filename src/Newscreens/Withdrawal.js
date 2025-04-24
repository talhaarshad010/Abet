import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {OpenSansR, PoppinsM, PoppinsR, PoppinsSB} from '../components/fonts';
import {useSelector} from 'react-redux';
import Header3 from '../components/Header3';
import ButtonComponent from '../components/ButtonComponent';
import {Arrowdown, Errorr, Refresh} from '../themes/SvgIcons';
import {Metrics} from '../themes';
import TextInputComponent from '../components/TextInputComponent';
import LinearGradient from 'react-native-linear-gradient';

const Withdrawal = ({navigation}) => {
  const isDark = useSelector(state => state?.darkModa?.data);
  const widht = Dimensions.get('window').width;
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
            Withdrawal
          </Text>
          <View style={{marginTop: 10}}>
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
              Conversion Rate
            </Text>
            <TextInputComponent
              inputstyle={{marginTop: 10, marginBottom: 30}}
              placeholder={'1.00'}
            />
          </View>
          <View style={{alignItems: 'center'}}>
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
        onPress={() => {
          navigation.navigate('Transactionhistory');
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

export default Withdrawal;

const styles = StyleSheet.create({});
