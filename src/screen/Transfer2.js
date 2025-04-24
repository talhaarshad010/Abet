import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header2 from '../components/Header2';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  OpenSansR,
  TsukimiRoundedB,
  PoppinsB,
  PoppinsR,
  PoppinsSB,
  PoppinsEB,
  PoppinsM,
  TsukimiRoundedM,
} from '../components/fonts';
import {useSelector} from 'react-redux';
import {TetherSVG} from '../themes/SvgIcons';

const Hello = ({navigation}) => {
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const isDark = useSelector(state => state?.darkModa?.data);
  const [isBool, setBool] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: isDark ? '#000' : '#fff'}}>
      <Header2 text={'Cancel'} navigation={navigation} istwo />
      <ScrollView>
        <View>
          <Text
            style={{
              fontFamily: TsukimiRoundedM,
              fontSize: 30,
              color: isDark ? '#AFB4BB' : '#17181A',
              margin: 20,
            }}>
            Transfer Crypto
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#282C33',
              marginHorizontal: widht * 0.35,
              paddingVertical: 10,
              borderRadius: 16,
            }}>
            <TetherSVG width={30} height={30} />

            <Text
              style={{
                fontFamily: OpenSansR,
                fontSize: 16,
                color: 'rgba(186, 194, 204, 1)',
                paddingLeft: 10,
                // margin: 20,
              }}>
              Tether
            </Text>
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontFamily: PoppinsR,
                fontSize: 16,
                color: isDark ? '#AFB4BB' : '#1A0808',
                margin: 20,
                textAlign: 'center',
              }}>
              Amount to Transfer
            </Text>
            <Text
              style={{
                fontFamily: TsukimiRoundedM,
                fontSize: 30,
                color: isDark ? '#AFB4BB' : '#1A0808',
                //   margin: 20,
                textAlign: 'center',
              }}>
              2,000.00 USDT
            </Text>
            <Text
              style={{
                fontFamily: OpenSansR,
                fontSize: 16,
                color: isDark ? '#AFB4BB' : '#1A0808',
                //   margin: 20,
                textAlign: 'center',
              }}>
              $1,540.00
            </Text>
          </View>
          <View style={{padding: 30}}>
            <Text
              style={{
                fontFamily: OpenSansR,
                fontSize: 12,
                color: isDark ? '#AFB4BB' : '#040101',
              }}>
              Network
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomWidth: 1,
              }}
              onPress={() => {
                setBool(!isBool);
              }}>
              <Text
                style={{
                  fontFamily: OpenSansR,
                  fontSize: 16,
                  color: isDark ? '#AFB4BB' : '#040101',
                  // marginTop: 20,

                  margin: 10,
                }}>
                Select Network
              </Text>
              <Icon
                name={isBool ? 'chevron-down-outline' : 'chevron-up-outline'}
                size={30}
                color={isDark ? '#fff' : '#000'}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontFamily: OpenSansR,
                fontSize: 12,
                color: isDark ? '#AFB4BB' : '#040101',
                // marginTop: 20,
                marginVertical: 10,
                //   borderBottomWidth: 1,
                //   margin: 10,
              }}>
              Wallet Address
            </Text>

            <Text
              style={{
                fontFamily: OpenSansR,
                fontSize: 16,
                color: isDark ? '#AFB4BB' : '#040101',
                // marginTop: 20,
                borderBottomWidth: 1,
                margin: 10,
              }}>
              Receipient Wallet Address
            </Text>
          </View>

          <TouchableOpacity
            style={{
              alignSelf: 'center',
            }}
            onPress={() => {
              navigation.navigate('Transfer3');
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
                Continue
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Hello;
