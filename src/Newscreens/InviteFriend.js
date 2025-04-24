import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header3 from '../components/Header3';
import {useSelector} from 'react-redux';
import {OpenSansR, PoppinsR, PoppinsSB} from '../components/fonts';
import {Circle, Line, NotiSVG, Path, Plane} from '../themes/SvgIcons';
import {Metrics} from '../themes';
import LinearGradient from 'react-native-linear-gradient';
import {InviteFriendDammy} from '../Dammy/Dammy';
import Bottombar from '../components/BottomBar';

const InviteFriend = ({navigation}) => {
  const isDark = useSelector(state => state?.darkModa?.data);
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').width;
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          height: Metrics.ratio(152),
          borderRadius: 16,
          borderWidth: 1,
          borderColor: '#FFCDCD',
          backgroundColor: '#fff',
          padding: 16,
          marginTop: 15,
          margin: 5,
          elevation: 5,
        }}>
        <Text style={{fontFamily: OpenSansR, fontSize: 18, color: '#000'}}>
          {item.Heading}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8,
          }}>
          <Text
            numberOfLines={1}
            style={{
              color: '#8B9199',
              width: Metrics.ratio(160),
              fontSize: 14,
              fontFamily: PoppinsR,
            }}>
            {item.Gmails1}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              right: 15,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: PoppinsR,
                color: '#8B9199',
              }}>
              {item.Date1}
            </Text>
            <View style={{left: 15}}>
              <NotiSVG width={Metrics.ratio(20)} height={Metrics.ratio(20)} />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            numberOfLines={1}
            style={{
              color: '#8B9199',
              fontSize: 14,
              fontFamily: PoppinsR,
              width: Metrics.ratio(160),
            }}>
            {item.Gmails2}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              right: 15,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: PoppinsR,
                color: '#8B9199',
              }}>
              {item.Date2}
            </Text>
            <View style={{left: 15}}>
              <NotiSVG width={Metrics.ratio(20)} height={Metrics.ratio(20)} />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            numberOfLines={1}
            style={{
              color: '#8B9199',
              fontSize: 14,
              fontFamily: PoppinsR,
              width: Metrics.ratio(160),
            }}>
            {item.Gmails3}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              right: 15,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: PoppinsR,
                color: '#8B9199',
              }}>
              {item.Date3}
            </Text>
            <View style={{left: 15}}>
              <NotiSVG width={Metrics.ratio(20)} height={Metrics.ratio(20)} />
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: isDark ? '#000' : '#fff'}}>
      <Header3 navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 20}}>
          <Text
            style={{
              fontFamily: PoppinsSB,
              fontSize: 24,
              color: isDark ? '#fff' : '#17181A',
              marginTop: 10,
              alignItems: 'center',
            }}>
            Invite a friend
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontSize: 14,
              fontFamily: PoppinsR,
              color: '#5D6166',
            }}>
            Type a friend email to refer a friend
          </Text>

          <View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View style={{right: 0}}>
                <View style={{flexDirection: 'row', left: 230, top: -20}}>
                  <View style={{width: 100, height: 100}}>
                    <Circle
                      widht={Metrics.ratio(100)}
                      height={Metrics.ratio(100)}
                    />
                  </View>
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      right: 80,
                      marginTop: 15,
                    }}>
                    <Path
                      widht={Metrics.ratio(20)}
                      height={Metrics.ratio(20)}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 364,
                  height: 56,
                  right: 100,
                  marginTop: -14,
                }}>
                <Line widht={Metrics.ratio(364)} height={Metrics.ratio(56)} />
              </View>
            </View>
          </View>
          <View
            style={{
              height: Metrics.ratio(225),
              borderRadius: 20,
              backgroundColor: '#F1F6F9',
              marginTop: -70,
              padding: 20,
            }}>
            <View
              style={{
                width: 200,
                height: 150,
                left: 200,
                marginTop: -115,
              }}>
              <Plane widht={Metrics.ratio(200)} height={Metrics.ratio(150)} />
            </View>

            <Text
              style={{
                fontSize: 12,
                fontFamily: OpenSansR,
                color: '#000',
                marginTop: -30,
              }}>
              Email Address
            </Text>
            <TextInput
              placeholder="Creation Habit @ gmail .|"
              style={{
                borderBottomWidth: 0.5,
                borderColor: '#000',
                fontSize: 16,
                fontFamily: OpenSansR,
                marginVertical: 15,
              }}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Uploaddocuments');
              }}
              style={{marginVertical: 20, alignSelf: 'center'}}>
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
                  Send Invite
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <FlatList data={InviteFriendDammy} renderItem={renderItem} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InviteFriend;

const styles = StyleSheet.create({});
