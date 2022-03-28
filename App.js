import 'react-native-gesture-handler';
import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/Routes/router';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    </Provider>
  );
};

export default App;
