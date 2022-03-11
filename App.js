import React from 'react';
import {View} from 'react-native';
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
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

function AppBar() {
  return (
    <View>
      <StatusBar bg="#3700B3" barStyle="light-content" />
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
          <IconButton icon={<Icon size={24} color="white" name="favorite" />} />
          {/* <IconButton
            icon={<Icon size={24} color="white" name="more-vert" />}
          /> */}
        </HStack>
      </HStack>
    </View>
  );
}

function Example() {
  return (
    <Center>
      {/* <Text>Hello</Text>
      <Icon size={24} color="black" name="menu" /> */}
      <AppBar />
    </Center>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      {/* <Center flex={1} px="3"> */}
      <Example />
      {/* </Center> */}
    </NativeBaseProvider>
  );
};
