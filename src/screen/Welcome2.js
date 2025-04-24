import React, {useState} from 'react';
import {
  View,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native';

const Second = ({navigation}) => {
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [skip, getskip] = useState();
  return (
    <View>
      <Image
        source={require('../asset/Asset.png')}
        style={{width: widht * 0.5, height: height * 0.1}}
      />

      <TouchableOpacity
        onPress={() => {
          skip !== getskip ? navigation.navigate('Login') : null;
        }}>
        <Text
          style={{
            color: 'red',
            marginLeft: widht * 0.8,
            // marginTop: height * -0.1,
            fontSize: 18,
          }}>
          Skip
        </Text>
      </TouchableOpacity>
      <View>
        <Image
          source={require('../asset/Img_3.png')}
          style={{
            width: widht * 0.7,
            height: height * 0.3,
            alignSelf: 'center',
            // marginTop: height * 0.1,
          }}
        />
        <Text
          style={{
            fontSize: 25,
            color: '#000',
            textAlign: 'center',
            margin: 20,
          }}>
          Why Choose Us The Abet Global Advantage
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: 'grey',
            textAlign: 'center',
            margin: 20,
          }}>
          Grow your investments with treyd trading tools built for you
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#b22222',
            marginHorizontal: widht * 0.2,
            padding: 20,
            borderRadius: 20,
          }}
          onPress={() => {
            navigation.navigate('Welcome3');
          }}>
          <Text style={{textAlign: 'center', fontSize: 20, color: '#fff'}}>
            Next
          </Text>
        </TouchableOpacity>
        <Text style={{marginTop: height * 0.1, textAlign: 'center'}}>
          Already have an account?<Text style={{color: '#b22222'}}>Login</Text>
        </Text>
      </View>
    </View>
  );
};
export default Second;
