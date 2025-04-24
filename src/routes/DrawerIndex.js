import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DrawerItem, createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Route from '../routes/index';
import CustomDrawer from '../components/CustomDrawer';
import BecomePartner from '../Newscreens/BecomePartner';
import AffilateRequest from '../Newscreens/AffilateRequest';
import Referral from '../Newscreens/Referral';
import Commission from '../Newscreens/Commission';
import IBtransfer from '../Newscreens/IBtransfer';
import WithdrawalTransferFund from '../Newscreens/WithdrawalTransferFund';
import Transactionhistory2 from '../Newscreens/Transactionhistory2';
import Pipscalculator from '../Newscreens/Pipscalculator';
import Positionsize from '../Newscreens/Positionsize';
import Economiccalender from '../Newscreens/Economiccalender';
import Holidayscalender from '../Newscreens/Holidayscalender';
import {
  Broker,
  Calculator2,
  Calender,
  Deposit,
  Heart,
  History,
  Homeicon,
  Internal,
  Invite,
  Upload,
  Withdrawal,
  Withsetting,
} from '../themes/SvgIcons';
import {Metrics} from '../themes';
import {PoppinsB, PoppinsM, PoppinsR, PoppinsSB} from '../components/fonts';
import Newaccount from '../Newscreens/Newaccount';
import Depos from '../screen/Deposit';
import Withdarawalinternalfund from '../Newscreens/Withdarawalinternalfund';
import InternalTransfer from '../Newscreens/InternalTransfer';
import WithdrawalSetting from '../Newscreens/WithdrawalSetting';
import Transactionhistory from '../Newscreens/Transactionhistory';
import InviteFriend from '../Newscreens/InviteFriend';
import Uploaddocuments from '../Newscreens/Uploaddocuments';

const DrawerIndex = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {width: 250},
          drawerActiveBackgroundColor: null,
        }}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          component={Route}
          name="Dashboard"
          options={{
            drawerLabel: ({focused}) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: -10,
                }}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    paddingVertical: 5,
                  }}>
                  <Homeicon
                    widht={Metrics.ratio(20)}
                    height={Metrics.ratio(20)}
                  />
                </View>
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontFamily: focused ? PoppinsB : PoppinsR,
                    fontSize: 14,
                    color: '#000',
                    marginTop: 5,
                  }}>
                  Dashboard
                </Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Newaccount"
          component={Newaccount}
          options={{
            drawerLabel: ({focused}) => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    paddingVertical: 8,
                  }}>
                  <Heart widht={Metrics.ratio(17)} height={Metrics.ratio(15)} />
                </View>
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontFamily: focused ? PoppinsB : PoppinsR,
                    fontSize: 14,
                    color: '#000',
                    marginTop: 5,
                  }}>
                  Open New Account
                </Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Deposit"
          component={Depos}
          options={{
            drawerLabel: ({focused}) => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    paddingVertical: 8,
                  }}>
                  <Deposit
                    widht={Metrics.ratio(15)}
                    height={Metrics.ratio(13)}
                  />
                </View>
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontFamily: focused ? PoppinsB : PoppinsR,
                    fontSize: 14,
                    color: '#000',
                    marginTop: 5,
                  }}>
                  Deposit
                </Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Withdarawalinternalfund"
          component={Withdarawalinternalfund}
          options={{
            drawerLabel: ({focused}) => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    paddingVertical: 8,
                  }}>
                  <Withdrawal
                    widht={Metrics.ratio(13)}
                    height={Metrics.ratio(13)}
                  />
                </View>
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontFamily: focused ? PoppinsB : PoppinsR,
                    fontSize: 14,
                    color: '#000',
                    marginTop: 5,
                  }}>
                  Withdrawal
                </Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="InternalTransfer"
          component={InternalTransfer}
          options={{
            drawerLabel: ({focused}) => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    paddingVertical: 8,
                  }}>
                  <Internal
                    widht={Metrics.ratio(14)}
                    height={Metrics.ratio(11)}
                  />
                </View>
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontFamily: focused ? PoppinsB : PoppinsR,
                    fontSize: 14,
                    color: '#000',
                    marginTop: 5,
                  }}>
                  Internal Transfer
                </Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="WithdrawalSetting"
          component={WithdrawalSetting}
          options={{
            drawerLabel: ({focused}) => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    paddingVertical: 8,
                  }}>
                  <Withsetting
                    widht={Metrics.ratio(15)}
                    height={Metrics.ratio(14)}
                  />
                </View>
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontFamily: focused ? PoppinsB : PoppinsR,
                    fontSize: 14,
                    color: '#000',
                    marginTop: 5,
                  }}>
                  Withdrawal Setting
                </Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Transactionhistory"
          component={Transactionhistory}
          options={{
            drawerLabel: ({focused}) => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    paddingVertical: 8,
                  }}>
                  <History
                    widht={Metrics.ratio(15)}
                    height={Metrics.ratio(15)}
                  />
                </View>
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontFamily: focused ? PoppinsB : PoppinsR,
                    fontSize: 14,
                    color: '#000',
                    marginTop: 5,
                  }}>
                  Transaction History
                </Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="InviteFriend"
          component={InviteFriend}
          options={{
            drawerLabel: ({focused}) => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    paddingVertical: 10,
                  }}>
                  <Invite
                    widht={Metrics.ratio(13)}
                    height={Metrics.ratio(13)}
                  />
                </View>
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontFamily: focused ? PoppinsB : PoppinsR,
                    fontSize: 14,
                    color: '#000',
                    marginTop: 5,
                  }}>
                  Invite a friend
                </Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="BecomePartner"
          component={BecomePartner}
          options={{
            drawerLabel: ({focused}) => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    paddingVertical: 8,
                  }}>
                  <Broker
                    widht={Metrics.ratio(16)}
                    height={Metrics.ratio(13)}
                  />
                </View>
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontFamily: focused ? PoppinsB : PoppinsR,
                    fontSize: 14,
                    color: '#000',
                    marginTop: 5,
                  }}>
                  Introducing Broker
                </Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Pipscalculator"
          component={Pipscalculator}
          options={{
            drawerLabel: ({focused}) => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    paddingVertical: 8,
                  }}>
                  <Calculator2
                    widht={Metrics.ratio(12)}
                    height={Metrics.ratio(13)}
                  />
                </View>
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontFamily: focused ? PoppinsB : PoppinsR,
                    fontSize: 14,
                    color: '#000',
                    marginTop: 5,
                  }}>
                  Calculater
                </Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Positionsize"
          component={Positionsize}
          options={{
            drawerLabel: ({focused}) => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    paddingVertical: 8,
                  }}>
                  <Calculator2
                    widht={Metrics.ratio(12)}
                    height={Metrics.ratio(13)}
                  />
                </View>
                <Text
                  numberOfLines={1}
                  style={{
                    marginHorizontal: 10,
                    fontFamily: focused ? PoppinsB : PoppinsR,
                    fontSize: 14,
                    color: '#000',
                    marginTop: 5,
                  }}>
                  Position Size Calculator
                </Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Economiccalender"
          component={Economiccalender}
          options={{
            drawerLabel: ({focused}) => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    paddingVertical: 7,
                  }}>
                  <Calender
                    widht={Metrics.ratio(16)}
                    height={Metrics.ratio(16)}
                  />
                </View>
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontFamily: focused ? PoppinsB : PoppinsR,
                    fontSize: 14,
                    color: '#000',
                    marginTop: 5,
                  }}>
                  Economic Calender
                </Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Holidayscalender"
          component={Holidayscalender}
          options={{
            drawerLabel: ({focused}) => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    paddingVertical: 7,
                  }}>
                  <Calender
                    widht={Metrics.ratio(16)}
                    height={Metrics.ratio(16)}
                  />
                </View>
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontFamily: focused ? PoppinsB : PoppinsR,
                    fontSize: 14,
                    color: '#000',
                    marginTop: 5,
                  }}>
                  Holidays Calender
                </Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Uploaddocuments"
          component={Uploaddocuments}
          options={{
            drawerLabel: ({focused}) => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    paddingVertical: 6,
                  }}>
                  <Upload
                    widht={Metrics.ratio(16)}
                    height={Metrics.ratio(16)}
                  />
                </View>
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontFamily: focused ? PoppinsB : PoppinsR,
                    fontSize: 14,
                    color: '#000',
                    marginTop: 5,
                  }}>
                  Upload Documents
                </Text>
              </View>
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerIndex;

const styles = StyleSheet.create({});
