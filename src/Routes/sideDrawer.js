import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './homeStack';
import WishStack from './wishStack';
import ProfileStack from './profileStack';
import Header from './Components/Header';

const Drawer = createDrawerNavigator();

const SideDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Group screenOptions={{swipeEnabled: false}}>
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={({navigation}) => {
            return {header: () => <Header navigation={navigation} />};
          }}
        />
        <Drawer.Screen
          name="Wishlist"
          component={WishStack}
          options={({navigation}) => {
            return {header: () => <Header navigation={navigation} />};
          }}
        />
        <Drawer.Screen
          name="ProfileScreen"
          component={ProfileStack}
          options={({navigation}) => {
            return {header: () => <Header navigation={navigation} />};
          }}
        />
      </Drawer.Group>
    </Drawer.Navigator>
  );
};

export default SideDrawer;
