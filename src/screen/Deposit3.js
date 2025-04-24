import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  OpenSansR,
  PoppinsM,
  PoppinsR,
  PoppinsSB,
  TsukimiRoundedM,
} from '../components/fonts';
import Header2 from '../components/Header2';
import {useSelector} from 'react-redux';
import {Metrics} from '../themes';
import {Depost3} from '../Dammy/Dammy';
import LinearGradient from 'react-native-linear-gradient';
import ModalComponent from '../components/ModalComponent';
import {Check1} from '../themes/SvgIcons';

const Deposit3 = ({navigation}) => {
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const isDark = useSelector(state => state?.darkModa?.data);
  const [Enabled, setisEnabled] = useState(false);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 15,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: PoppinsR,
            color: '#8B9199',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: OpenSansR,
            color: '#2E3033',
          }}>
          {item.Des}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: isDark ? '#000' : '#fff'}}>
      <Header2 text={'Cancel'} navigation={navigation} three />
      <ScrollView>
        <View style={{paddingHorizontal: 20}}>
          <Text
            style={{
              color: '#000',
              fontFamily: PoppinsSB,
              fontSize: 24,
            }}>
            Confirm Deposit
          </Text>
          <View
            style={{
              height: Metrics.ratio(112),
              borderRadius: 12,
              backgroundColor: '#FFF2F2',
              alignItems: 'center',
              padding: 16,
              marginVertical: 30,
            }}>
            <Text
              style={{
                fontFamily: OpenSansR,
                fontSize: 12,
                color: '#8B9199',
              }}>
              Amount to Transfer
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontFamily: PoppinsM,
                color: '#020D1A',
              }}>
              $600,000.00
            </Text>
            <Text
              style={{
                fontFamily: OpenSansR,
                fontSize: 16,
                color: '#8B9199',
              }}>
              $15,40.00
            </Text>
          </View>
          <View>
            <FlatList data={Depost3} renderItem={renderItem} />
          </View>

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
                Your transaction was completed successfully.
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setisEnabled(false);
                  navigation.navigate('InternalTransfer');
                }}>
                <LinearGradient
                  colors={['#ED5858', '#6A1717']}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 15,
                    borderRadius: 16,
                    width: widht * 0.35,
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
                    Done
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ModalComponent>
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
            Confirm
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Deposit3;

const styles = StyleSheet.create({});
