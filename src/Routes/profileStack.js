import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../Screens/Profile';
import EditProfile from '../Screens/EditProfile';
import ManageAddress from '../Screens/ManageAddress';
import AddAddress from '../Screens/AddAddress';
import AddressForm from '../Screens/AddressForm';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Group
        screenOptions={{
          headerStyle: {backgroundColor: '#eee'},
          headerTintColor: 'green',
          headerShown: false,
        }}>
        <Stack.Screen
          name="ProfileScreen"
          component={Profile}
          options={{title: 'PROFILE'}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{title: 'EditProfile'}}
        />
        <Stack.Screen
          name="ManageAddress"
          component={ManageAddress}
          options={{title: 'ManageAddress'}}
        />
        <Stack.Screen
          name="AddAddress"
          component={AddAddress}
          options={{title: 'AddAddress'}}
        />
        <Stack.Screen
          name="AddressForm"
          component={AddressForm}
          options={{title: 'AddressForm'}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ProfileStack;
