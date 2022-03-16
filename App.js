import React, { useEffect } from 'react';
import { View } from 'react-native';
import {
  VStack,
  HStack,
  Button,
  IconButton,
  // Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
  Input,
} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/Login';
import Home from './src/Screens/Home';
import SplashScreen from 'react-native-splash-screen';
import Change from './src/Screens/change';


const Stack = createNativeStackNavigator();
const App = () => {

  // useEffect(() => {
  //   SplashScreen.hide();
  // })

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Change" component={Change} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;





{/* <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <HStack
        bg="#6200ee"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        // width="auto"
        w="80%"
        maxW="auto">
        <HStack alignItems="center">
          <IconButton icon={<Icon size={24} color="white" name="menu" />} />
          <Text color="white" fontSize="20" fontWeight="bold">
            E-Commerce
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon size={24} color="white" name="search" />} />
          <IconButton icon={<Icon size={24} color="white" name="favorite" />} /> */}
{/* <IconButton
            icon={<Icon size={24} color="white" name="more-vert" />}
          /> */}
{/* </HStack>
      </HStack> */}
{/* <Box m={10}>
        <Text fontSize="sm" fontWeight="bold">Log in for the best experiance</Text>
        <Text fontSize="xs" color={Color.gray} mt={3} mb={3}>Expereance the all new Flipkart</Text>
        <Input placeholder='Phone number' w={300} variant="outline" borderColor={Color.blue} borderWidth={2}/>
        <Text fontSize="xs" color={Color.blue} fontWeight="bold" textAlign="right" my={2}>Use Email-ID</Text>
        <Input placeholder='Password' w={300} variant="outline" borderColor={Color.blue} borderWidth={2}/>
        <Text fontSize="xs"></Text>
        <Button backgroundColor={Color.orange} rounded="xl">Continue</Button>
      </Box> */}