import React from 'react';
import { View } from 'react-native';
import {
    HStack,
    IconButton,
    // Icon,
    Text,
    NativeBaseProvider,
    Box,
    StatusBar,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

function Home() {
    // useEffect(() => {
    //     SplashScreen.hide();
    // })
    return (
        <NativeBaseProvider>
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
                    w="100%"
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
        </NativeBaseProvider>
    );
}
export default Home;