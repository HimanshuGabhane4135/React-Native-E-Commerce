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
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Login = () => {

    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        SplashScreen.hide()
    })

    const loginHandler = () => {
        alert("login done")
    }
    return (
        <NativeBaseProvider>
            <View>
                <Box m={10}>
                    <Text fontSize="sm" fontWeight="bold">Log in for the best experiance</Text>
                    <Text fontSize="xs" color={Color.gray} mt={3} mb={3}>Expereance the all new Flipkart</Text>

                    <Input
                        placeholder='Phone number'
                        w={300}
                        variant="outline"
                        borderColor={Color.blue}
                        borderWidth={2}
                        keyboardType="numeric"
                        onChangeText={(text) => setPhoneNumber(text)}
                    />

                    <Text fontSize="xs" color={Color.blue} fontWeight="bold" textAlign="right" my={2}>Use Email-ID</Text>

                    <Input
                        placeholder='Password'
                        w={300}
                        rounded={10}
                        borderColor={Color.blue}
                        borderWidth={2}
                        onChangeText={(text) => setPassword(text)} />

                    <Text fontSize="xs"></Text>

                    <Button
                        backgroundColor={Color.orange}
                        rounded="xl"
                        onPress={loginHandler}>Continue</Button>

                    {/* <FloatingInput 
                        placeholder="name"
                        w={300}
                        h={50}
                     /> */}

                    <Text>{password}</Text>
                </Box>
            </View>
        </NativeBaseProvider>
    )
}

export default Login;