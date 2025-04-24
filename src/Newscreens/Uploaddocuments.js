import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Header3 from '../components/Header3';
import {
  OpenSansR,
  PoppinsM,
  PoppinsR,
  PoppinsSB,
  TsukimiRoundedM,
} from '../components/fonts';
import {Metrics} from '../themes';
import {Browse, Check1, Cloud, Delete, GreenCheck} from '../themes/SvgIcons';
import TextInputComponent from '../components/TextInputComponent';
import LinearGradient from 'react-native-linear-gradient';
import ModalComponent from '../components/ModalComponent';

const Uploaddocuments = ({navigation}) => {
  const height = Dimensions.get('window').height;
  const isDark = useSelector(state => state?.darkModa?.data);
  const widht = Dimensions.get('window').width;
  const [Enabled, setisEnabled] = useState(false);
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
            Upload Documents
          </Text>
          <Text
            style={{
              color: '#5D6166',
              fontSize: 14,
              fontFamily: PoppinsR,
              marginTop: 20,
            }}>
            Easy steps to upload
          </Text>
          <View
            style={{
              height: Metrics.ratio(157),
              borderRadius: 16,
              borderColor: '#FFCDCD',
              borderWidth: 1,
              borderStyle: 'dashed',
              backgroundColor: '#FFFAFA',
              padding: 25,
              paddingTop: 40,
              marginTop: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: PoppinsM,
                    color: '#EA5757',
                  }}>
                  Drag your files
                </Text>
                <View style={{width: 71, height: 26, marginVertical: 25}}>
                  <Browse
                    widht={Metrics.ratio(71)}
                    height={Metrics.ratio(26)}
                  />
                </View>
              </View>
              <View style={{width: 69, height: 56, marginBottom: 20}}>
                <Cloud widht={Metrics.ratio(69)} height={Metrics.ratio(56)} />
              </View>
            </View>
          </View>
          <View style={{marginTop: 12}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: OpenSansR,
                  color: isDark ? '#fff' : '#17181A',
                }}>
                KYC Document
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: OpenSansR,
                  color: 'red',
                }}>
                Replace
              </Text>
            </View>
            <TextInputComponent
              inputstyle={{marginTop: 10, marginBottom: 10}}
              placeholder={'0.000'}
              placeholderTextColor="gray"
              Rightimage={
                <View style={{width: 20, height: 20}}>
                  <GreenCheck
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
              KYC Document
            </Text>
            <TextInputComponent
              inputstyle={{marginTop: 10, marginBottom: 10}}
              placeholder={'0.000'}
              placeholderTextColor="gray"
              Rightimage={
                <View style={{width: 20, height: 20}}>
                  <Delete
                    widht={Metrics.ratio(20)}
                    height={Metrics.ratio(20)}
                  />
                </View>
              }
            />
          </View>
          <View style={{marginTop: 12}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: OpenSansR,
                  color: isDark ? '#fff' : '#17181A',
                }}>
                KYC Document
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: OpenSansR,
                  color: 'red',
                }}>
                Replace
              </Text>
            </View>
            <TextInputComponent
              inputstyle={{marginTop: 10, marginBottom: 10}}
              placeholder={'0.000'}
              placeholderTextColor="gray"
              Rightimage={
                <View style={{width: 20, height: 20}}>
                  <GreenCheck
                    widht={Metrics.ratio(20)}
                    height={Metrics.ratio(20)}
                  />
                </View>
              }
            />
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
                Files Uploaded
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setisEnabled(false);
                }}
                style={{alignSelf: 'center', marginVertical: 10}}>
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
          alignSelf: 'center',
          marginVertical: 30,
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

export default Uploaddocuments;

const styles = StyleSheet.create({});
