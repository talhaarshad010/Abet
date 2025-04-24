import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Header2 from '../components/Header2';
import {
  OpenSansR,
  PoppinsR,
  PoppinsSB,
  TsukimiRoundedM,
} from '../components/fonts';
import {useSelector} from 'react-redux';
import ButtonComponent from '../components/ButtonComponent';
import {Arrowdown, Check1} from '../themes/SvgIcons';
import {Metrics} from '../themes';
import TextInputComponent from '../components/TextInputComponent';
import LinearGradient from 'react-native-linear-gradient';
import ModalComponent from '../components/ModalComponent';

const WithdrawalSetting = ({navigation}) => {
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const isDark = useSelector(state => state?.darkModa?.data);
  const [Enabled, setisEnabled] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: isDark ? '#000' : '#fff'}}>
      <Header2 text={'Cancel'} navigation={navigation} three />
      <View style={{paddingHorizontal: 20}}>
        <Text
          style={{
            color: '#000',
            fontFamily: PoppinsSB,
            fontSize: 24,
          }}>
          Withdrawal Setting
        </Text>
        <Text
          style={{
            color: '#5D6166',
            fontSize: 14,
            fontFamily: PoppinsR,
            marginTop: 40,
          }}>
          Withdrawal Wallet Details
        </Text>
        <View style={{marginTop: 12}}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: OpenSansR,
              color: isDark ? '#fff' : '#17181A',
            }}>
            Wallet
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
        <View style={{marginTop: 20}}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: OpenSansR,
              color: isDark ? '#fff' : '#17181A',
            }}>
            Account Title
          </Text>
          <TextInputComponent
            inputstyle={{marginTop: 10, marginBottom: 10}}
            placeholder={'Salman'}
            placeholderTextColor="#000"
          />
        </View>
        <View style={{marginTop: 12}}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: OpenSansR,
              color: isDark ? '#fff' : '#17181A',
            }}>
            Perfect Money ID
          </Text>
          <TextInputComponent
            inputstyle={{marginTop: 10}}
            placeholder={'74500'}
            placeholderTextColor="#000"
          />
        </View>
        {/* <TouchableOpacity
          style={{
            marginHorizontal: widht * 0.22,
            marginVertical: 30,
          }}
          onPress={() => setisEnabled(true)}>
          <LinearGradient
            colors={['#ED5858', '#6A1717']}
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
        <ModalComponent
          isVisible={Enabled}
          style={{margin: 0, alignSelf: 'center'}}>
          <View
            style={{
              backgroundColor: isDark ? '#17181A' : '#FFF',
              width: widht * 0.9,
              height: height * 0.5,
              borderRadius: 16,
              padding: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{marginBottom: 10}}>
              <Check1 width={widht * 0.9} height={height * 0.15} />
            </View>

            <Text
              style={{
                color: isDark ? '#BAC2CC' : '#5D6166',
                fontSize: 25,
                fontFamily: TsukimiRoundedM,
                textAlign: 'center',
              }}>
              Successful
            </Text>
            <Text
              style={{
                fontFamily: OpenSansR,
                fontSize: 14,
                color: isDark ? '#8B9199' : '#5D6166',
                textAlign: 'center',
                paddingHorizontal: 30,
                marginVertical: 20,
              }}>
              Withdrawal Details Added
            </Text>
            <TouchableOpacity
              onPress={() => {
                setisEnabled(false);
                navigation.navigate('Withdrawal');
              }}>
              <LinearGradient
                colors={['#ED5858', '#6A1717']}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 15,
                  borderRadius: 16,
                  paddingHorizontal: 20,
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
                  Go to Withdraw
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ModalComponent>
      </View>
      <TouchableOpacity
        style={{
          marginVertical: 10,
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
        }}
        onPress={() => {
          setisEnabled(true);
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
            Submit
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WithdrawalSetting;

const styles = StyleSheet.create({});
