/**
 * @format
 */

import {AppRegistry, Appearance} from 'react-native';
import Blah from './src/screen/Blah';
// import Login from './src/auth/Login';
// import Splash from './src/screen/Splash'
import 'react-native-gesture-handler';
import Route from './src/routes/index';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {useEffect} from 'react';
import DrawerIndex from './src/routes/DrawerIndex';

const RouteRedux = () => {
  useEffect(() => {
    // const colorScheme = Appearance.getColorScheme();
    const listener = Appearance.addChangeListener(colorTheme => {
      console.log(colorTheme);
      if (colorTheme.colorScheme === 'dark') {
      } else {
      }
      return () => {
        listener;
      };
    });
  }, []);
  return (
    <Provider store={store}>
      <DrawerIndex />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => RouteRedux);
