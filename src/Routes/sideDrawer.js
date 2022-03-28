import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './homeStack';
import WishStack from './wishStack';
import ProfileStack from './profileStack';
import Cart from '../Screens/Cart';


const Drawer = createDrawerNavigator();

const SideDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Wishlist" component={WishStack} />
      <Drawer.Screen name="ProfileScreen" component={ProfileStack} />
      <Drawer.Screen name="My Cart" component={Cart} />
    </Drawer.Navigator>
  );
};

export default SideDrawer;
