import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Change from '../Screens/change';
import Cart from '../Screens/Cart';
import WishList from '../Screens/WishList';
import OrderTraking from '../Screens/OrderTraking';
import Profile from '../Screens/Profile';
import EditProfile from '../Screens/EditProfile';
import ManageAddress from '../Screens/ManageAddress';

const Stack = createNativeStackNavigator();
const Routing = () => {
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
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{title: 'Edit Profile'}}
        />
        <Stack.Screen
          name="ManageAddress"
          component={ManageAddress}
          options={{title: 'Manage Address'}}
        />
        <Stack.Screen name="WishList" component={WishList} />
        <Stack.Screen name="OrderTraking" component={OrderTraking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
