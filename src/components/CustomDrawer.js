import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Draweritems, drawerLabel} from '../Dammy/Dammy';
import {PoppinsB, PoppinsR} from './fonts';
import {
  AbetLogo,
  Broker,
  Calculator2,
  Calender,
  Deposit,
  Download,
  Heart,
  History,
  Homeicon,
  Internal,
  Invite,
  Signout,
  Trading,
  TradingHistory,
  Upload,
  Withdrawal,
  Withsetting,
} from '../themes/SvgIcons';
import {Metrics} from '../themes';
import {useNavigation} from '@react-navigation/native';

const UserView = () => {
  return (
    <View
      style={{
        height: 150,
      }}>
      <ImageBackground
        source={require('../asset/Worldmap.png')}
        style={{
          height: 150,
          width: 250,
          padding: 10,
        }}>
        <View
          style={{
            width: 141,
            height: 58,
            marginVertical: 44,
          }}>
          <AbetLogo widht={Metrics.ratio(141)} height={Metrics.ratio(58)} />
        </View>
      </ImageBackground>
    </View>
  );
};
const CustomDrawer = props => {
  const navigation = useNavigation();
  const [select, setselect] = useState(0);
  const renderItem = ({item, index}) => {
    return (
      <View style={{margin: 20}}>
        <TouchableOpacity
          onPress={() => {
            setselect(index);
            if (index === active) return;
            {
              index === 0
                ? navigation.navigate('Dashboard')
                : index === 1
                ? navigation.navigate('BecomePartner')
                : null;
            }
          }}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
              backgroundColor:
                index === 0
                  ? active === 0
                    ? '#000'
                    : '#fff'
                  : index === 1
                  ? active === 1
                    ? '#000'
                    : '#fff'
                  : null,
              paddingVertical:
                index === 0
                  ? 5
                  : index === 9
                  ? 10
                  : index === 13
                  ? 6
                  : index === 14
                  ? 6
                  : 8,
            }}>
            {index === 0 ? (
              <Homeicon widht={Metrics.ratio(20)} height={Metrics.ratio(20)} />
            ) : index === 1 ? (
              <Heart widht={Metrics.ratio(17)} height={Metrics.ratio(15)} />
            ) : index === 2 ? (
              <Trading
                widht={Metrics.ratio(13.89)}
                height={Metrics.ratio(13.89)}
              />
            ) : index === 3 ? (
              <Deposit widht={Metrics.ratio(15)} height={Metrics.ratio(13)} />
            ) : index === 4 ? (
              <Withdrawal
                widht={Metrics.ratio(13)}
                height={Metrics.ratio(13)}
              />
            ) : index === 5 ? (
              <Internal widht={Metrics.ratio(14)} height={Metrics.ratio(11)} />
            ) : index === 6 ? (
              <Withsetting
                widht={Metrics.ratio(15)}
                height={Metrics.ratio(14)}
              />
            ) : index === 7 ? (
              <History widht={Metrics.ratio(15)} height={Metrics.ratio(15)} />
            ) : index === 8 ? (
              <TradingHistory
                widht={Metrics.ratio(16)}
                height={Metrics.ratio(16)}
              />
            ) : index === 9 ? (
              <Invite widht={Metrics.ratio(13)} height={Metrics.ratio(13)} />
            ) : index === 10 ? (
              <Broker widht={Metrics.ratio(16)} height={Metrics.ratio(13)} />
            ) : index === 11 ? (
              <Download widht={Metrics.ratio(14)} height={Metrics.ratio(13)} />
            ) : index === 12 ? (
              <Calculator2
                widht={Metrics.ratio(12)}
                height={Metrics.ratio(13)}
              />
            ) : index === 13 ? (
              <Calender widht={Metrics.ratio(16)} height={Metrics.ratio(16)} />
            ) : index === 14 ? (
              <Upload widht={Metrics.ratio(16)} height={Metrics.ratio(16)} />
            ) : (
              <Signout widht={Metrics.ratio(12)} height={Metrics.ratio(14)} />
            )}
          </View>
          <Text
            style={{
              color: '#000',
              fontSize: 14,
              fontFamily: PoppinsR,
              marginHorizontal: 10,
              top: 5,
            }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f2f2f2'}}>
      <UserView />
      <DrawerContentScrollView showsVerticalScrollIndicator={false}>
        <DrawerItemList {...props} />

        {/* <FlatList data={drawerLabel} renderItem={renderItem} /> */}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginVertical: 20,
          }}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
              backgroundColor: '#fff',
              paddingVertical: 8,
            }}>
            <Signout widht={Metrics.ratio(12)} height={Metrics.ratio(14)} />
          </View>
          <Text
            style={{
              marginHorizontal: 10,
              fontFamily: PoppinsR,
              fontSize: 14,
              color: '#000',
              marginTop: 5,
            }}>
            Sign out
          </Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawer;
