import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import {
  OpenSansR,
  PoppinsR,
  PoppinsSB,
  TsukimiRoundedB,
} from '../components/fonts';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
const Abdul = ({navigation}) => {
  const [Value, setValue] = useState();
  const [Hide, setunHide] = useState(false);
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const isDark = useSelector(state => state?.darkModa?.data);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: isDark ? '#000' : '#fff'}}>
      <Header text={'Login'} navigation={navigation} />
      <View>
        <Text
          style={{
            fontFamily: PoppinsSB,
            fontSize: 24,
            paddingHorizontal: 20,
            color: isDark ? '#fff' : '#17181A',
          }}>
          Welcome Usman
        </Text>
        <Text
          style={{
            fontFamily: PoppinsR,
            fontSize: 14,
            paddingHorizontal: 20,
            color: '#17181A',
          }}>
          You need to secure your account.
        </Text>
        <Text
          style={{
            fontFamily: OpenSansR,
            fontSize: 12,
            paddingHorizontal: 20,
            color: '#5D6166',
            marginTop: 25,
          }}>
          Password
        </Text>
        <View
          style={{
            borderRadius: 10,
            width: widht * 0.95,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F1F6F9',
            marginTop: 10,
          }}>
          <TextInput
            onChangeText={setValue}
            placeholder="Create a strong password"
            style={{
              fontFamily: OpenSansR,
              borderRadius: 10,
              backgroundColor: '#F1F6F9',
              fontSize: 16,
              paddingHorizontal: 10,
              width: widht * 0.8,
              color: isDark ? '#000' : '#fff',
            }}
            placeholderTextColor={'#8B9199'}
            secureTextEntry={Hide ? true : false}
          />
          <TouchableOpacity
            onPress={() => {
              setunHide(!Hide);
            }}
            style={{width: widht * 0.1}}>
            <Text
              style={{
                fontSize: 14,
                color: '#2E3033',
                fontFamily: PoppinsR,
              }}>
              {Hide ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontFamily: OpenSansR,
            fontSize: 12,
            color: '#8B9199',
            paddingHorizontal: 12,
            margin: 5,
          }}>
          Must be more than 8 characters and contain at least one capital
          letter, one number and one special character
        </Text>
        <View>
          <LinearGradient
            colors={['#ED5858', '#6A1717']}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: widht * 0.22,
              padding: 15,
              borderRadius: 16,
              marginTop: height * 0.05,
              // marginBottom: 25,
            }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            locations={[0.084, 0.9669]}
            onTouchEnd={() => {
              navigation.navigate('Login');
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: '#fff',
                fontFamily: OpenSansR,
              }}>
              Continue
            </Text>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Abdul;
