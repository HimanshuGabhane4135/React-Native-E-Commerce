import React from 'react'
import { View } from 'react-native';
import {
    Button,
    Text,
    NativeBaseProvider,
    Box,
    Input,
} from 'native-base';
import { Color } from '../../Utils/color';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';


const Login = () => {
    useEffect(() => {
        SplashScreen.hide()
    })
    return (
        <NativeBaseProvider>
            <View>
                <Box m={10}>
                    <Text fontSize="sm" fontWeight="bold">Log in for the best experiance</Text>
                    <Text fontSize="xs" color={Color.gray} mt={3} mb={3}>Expereance the all new Flipkart</Text>
                    <Input placeholder='Phone number' w={300} variant="outline" borderColor={Color.blue} borderWidth={2} />
                    <Text fontSize="xs" color={Color.blue} fontWeight="bold" textAlign="right" my={2}>Use Email-ID</Text>
                    <Input placeholder='Password' w={300} variant="outline" borderColor={Color.blue} borderWidth={2} />
                    <Text fontSize="xs"></Text>
                    <Button backgroundColor={Color.orange} rounded="xl">Continue</Button>
                </Box>
            </View>
        </NativeBaseProvider>
    )
}

export default Login;