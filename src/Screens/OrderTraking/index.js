import { Box, Button, HStack, Image, NativeBaseProvider, Text, View, VStack } from 'native-base'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { Color } from '../../Utils/color'

const OrderTraking = ({ route }) => {
    const { productName, productPrice, productImage } = route.params;
    useEffect(() => {
        SplashScreen.hide()
    })
    return (
        <NativeBaseProvider>
            <Text fontSize="md" m={3}>OrderTraking</Text>
            <View>
                <Box p={5} bg="#D3D3D3" m={5} rounded={5}>

                    <HStack>
                        <VStack w="50%">
                            <Text fontSize="sm" fontWeight="bold">{productName}</Text>


                            <HStack mt={1}>
                                <Text fontSize="xs" color={Color.gray}>Seller:</Text>
                                <Text fontSize="xs" color={Color.gray} ml={1}>OmniTech</Text>
                            </HStack>

                            <HStack mt={5}>
                                <Text fontSize="lg" fontWeight="bold">₹</Text>
                                <Text fontSize="lg" fontWeight="bold">{productPrice}</Text>
                            </HStack>
                            <HStack>
                                <Text fontSize="sm" >Delivery by </Text>
                                <Text fontSize="sm">Wed Mar 23</Text>
                            </HStack>
                        </VStack>

                        {/* <Box>
            <Image source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg"
            }} size="lg" alt="Please Wait" />
        </Box> */}

                        <VStack w="50%">
                            <Box alignItems="flex-end">
                                <Image source={{
                                    uri: productImage
                                }} size="md" alt="Please Wait" mb={1} />

                            </Box>
                        </VStack>
                    </HStack>
                </Box>
            </View>
        </NativeBaseProvider>
    )
}

export default OrderTraking;