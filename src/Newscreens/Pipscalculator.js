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
import Header3 from '../components/Header3';
import {OpenSansR, PoppinsM, PoppinsR, PoppinsSB} from '../components/fonts';
import {useSelector} from 'react-redux';
import TextInputComponent from '../components/TextInputComponent';
import {AmericanFlag, Arrowdown, Calculator, Export} from '../themes/SvgIcons';
import {Metrics} from '../themes';
import ButtonComponent from '../components/ButtonComponent';

const Pipscalculator = ({navigation}) => {
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
            Pips Calculator
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: PoppinsR,
              color: '#5D6166',
              marginTop: 10,
            }}>
            Transfer Fund
          </Text>
          <View style={{marginTop: 70}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#17181A',
              }}>
              Pip amount
            </Text>
            <TextInputComponent
              inputstyle={{marginTop: 10, marginBottom: 10}}
              placeholder={'100'}
              placeholderTextColor="#2E3033"
              Rightimage={
                <View style={{width: 20, height: 20}}>
                  <Calculator
                    widht={Metrics.ratio(20)}
                    height={Metrics.ratio(20)}
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
          <View style={{marginTop: 20}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#17181A',
              }}>
              Position Size
            </Text>
            <TextInputComponent
              inputstyle={{marginTop: 10, marginBottom: 10}}
              placeholder={'74544'}
              placeholderTextColor="#2E3033"
            />
          </View>
          <View style={{marginTop: 12}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: isDark ? '#fff' : '#17181A',
              }}>
              Instruments
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
          <View style={{alignItems: 'center', marginVertical: 50}}>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pipscalculator;
