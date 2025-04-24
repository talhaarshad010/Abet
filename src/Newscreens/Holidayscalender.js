import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {OpenSansR, PoppinsM, PoppinsR, PoppinsSB} from '../components/fonts';
import {useSelector} from 'react-redux';
import Header3 from '../components/Header3';
import {EconomicCalen, Holidayscntr} from '../Dammy/Dammy';
import {Metrics} from '../themes';
import LinearGradient from 'react-native-linear-gradient';
import {
  Canada,
  China,
  England,
  India,
  Scotland,
  Search,
  Setting,
  SettingLine,
  Spain,
} from '../themes/SvgIcons';

const Holidayscalender = ({navigation}) => {
  const isDark = useSelector(state => state?.darkModa?.data);
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').width;
  const [select, setselect] = useState(0);

  const renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          style={{marginVertical: 20}}
          onPress={() => {
            setselect(item.id);
          }}>
          <LinearGradient
            colors={
              select === item.id ? ['#ED5858', '#6A1717'] : ['#fff', '#fff']
            }
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              paddingHorizontal: 10,
              height: Metrics.ratio(24),
              marginHorizontal: 10,
            }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            locations={[0.084, 0.9669]}
            onTouchEnd={() => {}}>
            <Text
              style={{
                textAlign: 'center',
                top: -1,
                fontSize: 16,
                color: select === item.id ? '#fff' : '#5D6166',
                fontFamily: OpenSansR,
              }}>
              {item.title}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem1 = ({item, index}) => {
    return (
      <View
        style={{
          height: Metrics.ratio(65),
          backgroundColor: '#fff',
          borderRadius: 16,
          elevation: 5,
          flexDirection: 'row',
          padding: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 5,
          marginTop: 10,
          marginHorizontal: 15,
          marginBottom: index === Holidayscntr?.length - 1 ? 20 : null,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: 31, height: 31}}>
            {index === 0 ? (
              <China widht={Metrics.ratio(31)} height={Metrics.ratio(31)} />
            ) : index === 1 ? (
              <Canada widht={Metrics.ratio(31)} height={Metrics.ratio(31)} />
            ) : index === 5 ? (
              <China widht={Metrics.ratio(31)} height={Metrics.ratio(31)} />
            ) : index === 6 ? (
              <Canada widht={Metrics.ratio(31)} height={Metrics.ratio(31)} />
            ) : (
              <Spain widht={Metrics.ratio(31)} height={Metrics.ratio(31)} />
            )}
          </View>
          <Text
            numberOfLines={1}
            style={{
              left: 10,
              fontSize: 14,
              fontFamily: PoppinsM,
              color: '#000000',
              width: Metrics.ratio(140),
            }}>
            {item.title}
          </Text>
        </View>
        <Text style={{fontSize: 10, color: '#000000', fontFamily: PoppinsR}}>
          {item.Date}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDark ? '#000' : '#fff',
      }}>
      <Header3 navigation={navigation} />

      <View style={{paddingHorizontal: 20}}>
        <Text
          style={{
            fontFamily: PoppinsSB,
            fontSize: 24,
            color: isDark ? '#fff' : '#17181A',
            marginTop: 10,
            alignItems: 'center',
          }}>
          Holidays Calender
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={EconomicCalen}
          renderItem={renderItem}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#fff',
              elevation: 5,
              paddingHorizontal: 20,
              borderRadius: 10,
            }}>
            <TextInput
              placeholder="Search Here"
              style={{
                width: Metrics.ratio(100),
                fontSize: 14,
                fontFamily: PoppinsR,
              }}
            />
            <TouchableOpacity style={{width: 22, height: 22}}>
              <Search widht={Metrics.ratio(22)} height={Metrics.ratio(22)} />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Holidayscenter');
              }}
              style={{marginHorizontal: 20, width: 24, height: 24}}>
              <SettingLine
                widht={Metrics.ratio(24)}
                height={Metrics.ratio(24)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{width: 24, height: 24}}>
              <Setting widht={Metrics.ratio(24)} height={Metrics.ratio(24)} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FlatList
        style={{marginVertical: 10, marginBottom: 0}}
        showsVerticalScrollIndicator={false}
        data={Holidayscntr}
        renderItem={renderItem1}
      />
    </SafeAreaView>
  );
};

export default Holidayscalender;

const styles = StyleSheet.create({});
