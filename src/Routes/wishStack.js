import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WishList from '../Screens/WishList/index';

const Stack = createNativeStackNavigator();

const WishStack = () => {
  return (
    <Stack.Navigator initialRouteName="WishList">
      <Stack.Group
        screenOptions={{
          headerStyle: {backgroundColor: '#eee'},
          headerTintColor: 'green',
        }}>
        <Stack.Screen
          name="WishList"
          component={WishList}
          options={{title: 'WISHLIST'}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default WishStack;
