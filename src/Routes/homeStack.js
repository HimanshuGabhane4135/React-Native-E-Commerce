import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../Screens/Cart/index';
import WishList from '../Screens/WishList/index';
import OrderTraking from '../Screens/OrderTraking/index';
import Homescreen from '../Screens/HomeScreen/index';
import ProductListWithApi from '../Screens/ProductListWithApi/index';
import ProductDetail from '../Screens/ProductDetail/index';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group
        screenOptions={{
          headerStyle: {backgroundColor: '#eee'},
          headerTintColor: 'green',
          headerShown: false,
        }}>
        <Stack.Screen
          name="Homescreen"
          component={Homescreen}
          options={{title: 'HOME'}}
        />
        <Stack.Screen
          name="ProductListWithApi"
          component={ProductListWithApi}
          options={{title: 'PRODUCTS'}}
        />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="WishList" component={WishList} />
        <Stack.Screen name="OrderTraking" component={OrderTraking} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeStack;
