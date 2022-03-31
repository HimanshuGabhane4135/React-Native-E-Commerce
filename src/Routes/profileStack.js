import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../Screens/Profile/index';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Group
        screenOptions={{
          headerStyle: {backgroundColor: '#eee'},
          headerTintColor: 'green',
          headerShown: false,
        }}>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'PROFILE'}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ProfileStack;
