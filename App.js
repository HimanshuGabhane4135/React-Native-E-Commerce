import React, { useEffect } from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Screens/Login';
import Home from './src/Screens/Home';
import Change from './src/Screens/change';
import Cart from './src/Screens/Cart';
import WishList from './src/Screens/WishList';
import OrderTraking from './src/Screens/OrderTraking';
import Profile from './src/Screens/Profile';
const Stack = createNativeStackNavigator();
const App = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // })

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Change" component={Change} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'My Account'}}
        />
        <Stack.Screen name="WishList" component={WishList} />
        <Stack.Screen name="OrderTraking" component={OrderTraking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
