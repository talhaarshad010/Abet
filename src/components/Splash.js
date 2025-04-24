import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  View,
  Appearance,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';

const Spl = ({navigation}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const boolCheck = useSelector(state => state.splashBool?.data);
  const isDark = useSelector(state => state?.darkModa?.data);
  useEffect(() => {
    setTimeout(() => {
      if (boolCheck?.isBool) {
        navigation.navigate('Login');
      } else {
        navigation.navigate('Welcome');
      }
    }, 2000);
  }, [boolCheck?.isBool]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDark ? '#000' : '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator color={isDark ? '#fff' : '#000'} size={60} />
    </SafeAreaView>
  );
};
export default Spl;
