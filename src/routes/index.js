import * as React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../components/Splash';
import Welcome from '../screen/Welcome';
import Welcome2 from '../screen/Welcome2';
import Welcome3 from '../screen/Welcome3';
import Login from '../auth/Login';
import Sign from '../auth/Sign';
import Verify from '../auth/Verify';
import Verify2 from '../auth/Verify2';
import Verify3 from '../auth/Verify3';
import Wallet from '../screen/Wallet';
import Home from '../screen/Home';
import Transfer from '../screen/Transfer';
import Transfer2 from '../screen/Transfer2';
import Transfer3 from '../screen/Transfer3';
import Deposit from '../screen/Deposit';

import SplashScreen from 'react-native-splash-screen';
import Withdrawal from '../Newscreens/Withdrawal';
import Transactionhistory from '../Newscreens/Transactionhistory';
import InviteFriend from '../Newscreens/InviteFriend';

import AffilateRequest from '../Newscreens/AffilateRequest';
import Referral from '../Newscreens/Referral';
import Commission from '../Newscreens/Commission';
import IBtransfer from '../Newscreens/IBtransfer';

import Deposit2 from '../screen/Deposit2';
import Deposit3 from '../screen/Deposit3';
import InternalTransfer from '../Newscreens/InternalTransfer';
import Withdarawalinternalfund from '../Newscreens/Withdarawalinternalfund';
import Paymentmethod from '../Newscreens/Paymentmethod';
import WithdrawalSetting from '../Newscreens/WithdrawalSetting';
import Uploaddocuments from '../Newscreens/Uploaddocuments';
import Trade from '../screen/Trade';
import Holidayscalender from '../Newscreens/Holidayscalender';
import WithdrawalTransferFund from '../Newscreens/WithdrawalTransferFund';

const Stack = createNativeStackNavigator();

const Loading = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator color={'#fff'} size={30} />
    </View>
  );
};

const Route = () => {
  // const [isLoading, setIsLoading] = React.useState(false);
  // const boolCheck = useSelector(state => state.splashBool?.data);
  React.useEffect(() => {
    // if (boolCheck?.isBool) {
    //   // navigation.navigate('Login');
    //   setIsLoading(true);
    // } else {
    //   setIsLoading(false);
    //   // navigation.navigate('Welcome');
    // }
    SplashScreen.hide();
  }, []);
  return (
    // !isLoading ?
    // <Loading/>
    // :

    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Welcome2"
        component={Welcome2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Welcome3"
        component={Welcome3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sign"
        component={Sign}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verify"
        component={Verify}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verify2"
        component={Verify2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verify3"
        component={Verify3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Transfer"
        component={Transfer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Transfer2"
        component={Transfer2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Transfer3"
        component={Transfer3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Deposit"
        component={Deposit}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Deposit2"
        component={Deposit2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Deposit3"
        component={Deposit3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InternalTransfer"
        component={InternalTransfer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Withdarawalinternalfund"
        component={Withdarawalinternalfund}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Paymentmethod"
        component={Paymentmethod}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WithdrawalSetting"
        component={WithdrawalSetting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Withdrawal"
        component={Withdrawal}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Transactionhistory"
        component={Transactionhistory}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InviteFriend"
        component={InviteFriend}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AffilateRequest"
        component={AffilateRequest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Referral"
        component={Referral}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Commission"
        component={Commission}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IBtransfer"
        component={IBtransfer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Uploaddocuments"
        component={Uploaddocuments}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Trade"
        component={Trade}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Holidayscalender"
        component={Holidayscalender}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WithdrawalTransferFund"
        component={WithdrawalTransferFund}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Route;
