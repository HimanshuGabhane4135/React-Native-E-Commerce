import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './authStack';
import SideDrawer from './sideDrawer';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="SideDrawer" component={SideDrawer} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Router;