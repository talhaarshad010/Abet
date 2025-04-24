import {Dimensions, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {PoppinsB} from '../components/fonts';
import Bottombar from '../components/BottomBar';

const Trade = ({navigation}) => {
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const isDark = useSelector(state => state?.darkModa?.data);
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: isDark ? '#000' : '#F1F6F9'}}>
      <View style={{paddingHorizontal: 20}}>
        <Text
          style={{
            fontFamily: PoppinsB,
            color: isDark ? '#F1F6F9' : '#17181A',
            fontSize: 32,
            margin: 5,
            paddingHorizontal: 10,
          }}>
          Trade
        </Text>
      </View>
      <View style={{position: 'absolute', bottom: 0}}>
        <Bottombar navigation={navigation} isDark={isDark} active={2} />
      </View>
    </SafeAreaView>
  );
};

export default Trade;

const styles = StyleSheet.create({});
