import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  useColorScheme,
  Switch,
  Appearance,
  BackHandler,
  Alert,
} from 'react-native';
import Header from '../components/Header';
import {
  OpenSansR,
  TsukimiRoundedB,
  TsukimiRoundedM,
  TsukimiRoundedR,
  TsukimiRoundedSB,
  PoppinsB,
  PoppinsR,
  PoppinsM,
  PoppinsSB,
} from '../components/fonts';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {splashBool} from '../store/action/splashBool';
import {FirstSVG, SecondSVG, ThirdSVG} from '../themes/SvgIcons';
import {Metrics} from '../themes';
// import {useDispatch} from 'react-redux';
// import {Swiper, SwiperFlatList} from 'react-native-swiper';

const First = ({navigation}) => {
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDark = useSelector(state => state?.darkModa?.data);
  const [current, setCurrent] = useState();
  const [Theme, setTheme] = useState('');
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = React.useState(false);
  const boolCheck = useSelector(state => state.splashBool?.data);

  useFocusEffect(
    React.useCallback(() => {
      setCurrentIndex(0);
    }, []),
  );

  // const isDarkMode = useColorScheme() === 'dark';
  // const [isDark, setIsDark] = useState(isDarkMode);
  const data = [
    {
      title: 'Maximize Your Forex Trading Potential',
      imgU: require('../asset/Img.png'),
      desc: 'Sail through the Forex Market with unwavering confidence and success. ',
    },
    {
      title: 'Why Choose Us The Abet Global Advantage',
      imgU: require('../asset/Img_3.png'),
      desc: 'Explore our wide range of services tailored to meet your trading needs.',
    },
    {
      title: 'Discover the World of  Trading with Abet Global',
      imgU: require('../asset/Img_4.png'),
      desc: 'Experience the difference with Abet Global and unlock your full trading potential',
    },
  ];

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: isDark ? '#000' : '#fff'}}>
      <Header text={'Skip'} navigation={navigation} />
      {/* <Switch value={isDark} onValueChange={val => setIsDark(val)} /> */}

      {/* <Swiper
        // nestedScrollEnabled
        index={currentIndex}
        scrollEnabled={false}
        activeDot={
          <LinearGradient
            colors={['#ED5858', '#6A1717']}
            style={{
              backgroundColor: '#ED5858',
              width: 27,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            locations={[0.084, 0.9669]}></LinearGradient
        }> */}
      <View style={{}}>
        {currentIndex === 0 ? (
          <FirstSVG
            widht={Metrics.screenWidth * 0.5}
            height={Metrics.screenHeight * 0.31}
          />
        ) : currentIndex === 1 ? (
          <SecondSVG
            widht={Metrics.screenWidth * 0.5}
            height={Metrics.screenHeight * 0.3}
          />
        ) : (
          <ThirdSVG
            widht={Metrics.screenWidth * 0.5}
            height={Metrics.screenHeight * 0.3}
          />
        )}

        <Text
          style={{
            fontSize: 32,
            color: isDark ? '#AFB4BB' : '#000',
            textAlign: 'center',
            // marginTop: 5,
            fontFamily: PoppinsB,
            // fontWeight: '700',
          }}>
          {data[currentIndex].title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: isDark ? '#AFB4BB' : '#5D6166',
            fontFamily: OpenSansR,
            textAlign: 'center',
            marginTop: 35,
            width: '80%',
            alignSelf: 'center',
          }}>
          {data[currentIndex].desc}
        </Text>
      </View>
      {/* </Swiper> */}

      <FlatList
        data={[0, 1, 2]}
        renderItem={({item, index}) => (
          <View style={{}}>
            <LinearGradient
              colors={
                index === currentIndex
                  ? ['#ED5858', '#6A1717']
                  : ['gray', 'gray']
              }
              style={{
                backgroundColor: index === currentIndex ? '#ED5858' : 'gray',
                width: index === currentIndex ? 27 : 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 20,
                marginBottom: 3,
              }}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              locations={[0.084, 0.9669]}></LinearGradient>
          </View>
        )}
        contentContainerStyle={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
        style={
          {
            // position: 'absolute',
            // bottom: height * 0.25,
            // left: widht * 0.4,
          }
        }
      />
      <TouchableOpacity
        style={{
          // backgroundColor: '#b22222',
          marginVertical: 10,

          marginHorizontal: widht * 0.22,
        }}
        onPress={() => {
          // navigation.navigate('Home');
        }}>
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
          locations={[0.084, 0.9669]}
          onTouchEnd={() => {
            if (currentIndex >= 2) {
              dispatch(splashBool({isBool: true}));
              // navigation.navigate('Login');
              return;
            }
            setCurrentIndex(currentIndex + 1);
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              color: '#fff',
              fontFamily: OpenSansR,
            }}>
            {currentIndex >= 2 ? 'Login' : 'Next'}
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={{marginVertical: 10}}>
        <Text
          style={{
            // marginTop: 3,
            // marginBottom: 50,
            textAlign: 'center',
            fontSize: 14,
            fontFamily: PoppinsR,
            color: '#5D6166',
          }}>
          Already have an account?
          <Text
            style={{
              color: '#b22222',
              fontFamily: PoppinsR,
              paddingHorizontal: 50,
            }}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            Login
          </Text>
        </Text>
      </View>

      <View style={{position: 'absolute', bottom: 0, left: 0}}>
        <Image
          source={require('../asset/bottom.png')}
          style={{}}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};
export default First;
