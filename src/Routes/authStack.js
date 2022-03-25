import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login/index';
import SignUp from '../Screens/SignUp/index';
import Change from '../Screens/change';
import ForgotPassword from '../Screens/ForgotPassword/index';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Group>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Change" component={Change} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;
