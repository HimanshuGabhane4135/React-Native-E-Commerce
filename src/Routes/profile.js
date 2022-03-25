import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../Screens/Profile/index';

const Stack = createNativeStackNavigator();

const profile = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Group
        screenOptions={{
          headerStyle: {backgroundColor: '#eee'},
          headerTintColor: 'green',
        }}>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Profile'}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default profile;
