import { Box, Button, HStack, Image, NativeBaseProvider, Text, View, VStack } from 'native-base'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { Color } from '../../Utils/color'

const OrderTraking = () => {

    useEffect(() => {
        SplashScreen.hide()
    })
    return (
        <NativeBaseProvider>
            <View>
                <Box p={5} bg="#D3D3D3" m={5} rounded={5}>

                    <HStack>
                        <VStack w="50%">
                            <Text fontSize="sm" fontWeight="bold">Product Name</Text>


                            <HStack mt={1}>
                                <Text fontSize="xs"  color={Color.gray}>Seller:</Text>
                                <Text fontSize="xs"  color={Color.gray} ml={1}>OmniTech</Text>
                            </HStack>

                            <HStack mt={5}>
                                <Text fontSize="lg" fontWeight="bold">₹</Text>
                                <Text fontSize="lg" fontWeight="bold">213</Text>
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
                                    uri: "https://www.pngall.com/wp-content/uploads/5/Purse.png"
                                }} size="sm" alt="Please Wait" mb={1} />

                            </Box>
                        </VStack>
                    </HStack>

                    {/* <Button variant="subtle" startIcon={<Icon name="save" size={20} color={Color.gray} />}>
    Download
</Button> */}

                    {/* <HStack mt={5}>
                        <Button startIcon={<Icon name="save" size={20} color={Color.gray} />} bg={Color.white} w="50%" _text={{
                            color: "#898989",
                            fontSize: "12"
                        }}>
                            Save for later
                        </Button>
                        <Button startIcon={<Icon3 name="delete" size={20} color={Color.gray} />} bg={Color.white} w="50%" _text={{
                            color: "#898989",
                            fontSize: "12"
                        }}>
                            Remove
                        </Button>
                    </HStack> */}
                </Box>
            </View>
        </NativeBaseProvider>
    )
}

export default OrderTraking;