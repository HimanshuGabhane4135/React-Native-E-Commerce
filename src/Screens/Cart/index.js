import { Box, Button, Center, CheckIcon, Flex, HStack, IconButton, Image, NativeBaseProvider, Select, Text, View, VStack } from 'native-base'
import React from 'react'
import { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { Color } from '../../Utils/color'

import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import WishList from '../WishList'

const Cart = () => {
    const [quantity, setQuantity] = useState()
    const [selectedLanguage, setSelectedLanguage] = useState();

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
                            <HStack mt={2}>

                                {/* <HStack>
                                        <Text fontSize="xs" fontWeight="bold" color={Color.white} pt={0.5} pl={2}>5</Text>
                                        <IconButton icon={<Icon size={10} color={Color.white} name="star" />} />
                                    </HStack> */}
                                <Button _text={{
                                    color: "#fff",
                                    fontSize: "12"
                                }} bg={Color.green}
                                    endIcon={<Icon2 name="star" size={10} color={Color.white} />} h={7}>
                                    5
                                </Button>

                                <Text fontSize="xs" mt={1} color={Color.gray} ml={2}>(13,564)</Text>
                            </HStack>

                            <HStack mt={5}>
                                <Text fontSize="md" fontWeight="bold">₹</Text>
                                <Text fontSize="md" fontWeight="bold">213</Text>
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
                                <Picker
                                    selectedValue={selectedLanguage}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedLanguage(itemValue)
                                    }>
                                    <Picker.Item label="Qty:1" value="1" />
                                    <Picker.Item label="2" value="2" />
                                    <Picker.Item label="3" value="3" />
                                </Picker>
                            </Box>
                        </VStack>
                    </HStack>

                    {/* <Button variant="subtle" startIcon={<Icon name="save" size={20} color={Color.gray} />}>
                        Download
                    </Button> */}

                    <HStack mt={5}>
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
                    </HStack>
                </Box>

                {/* Price Details */}
                <Box m={5}>
                    <Text fontSize="md" fontWeight="bold">Price Details</Text>
                    <HStack>
                        <Box w="50%">
                            <Text fontSize="sm">Price Details</Text>
                        </Box>
                        <Box alignItems="flex-end" w="50%">
                            <HStack>
                                <Text fontSize="sm">₹</Text>
                                <Text fontSize="sm">1,234</Text>
                            </HStack>
                        </Box>
                    </HStack>

                    <HStack>
                        <Box w="50%">
                            <Text fontSize="sm">Delivery Charges</Text>
                        </Box>
                        <Box alignItems="flex-end" w="50%">
                            <HStack>
                                <Text fontSize="sm">₹</Text>
                                <Text fontSize="sm">40</Text>
                            </HStack>
                        </Box>
                    </HStack>

                    <HStack mt={5}>
                        <Box w="50%">
                            <Text fontSize="md" fontWeight="bold">Total Amount</Text>
                        </Box>
                        <Box alignItems="flex-end" w="50%">
                            <HStack>
                                <Text fontSize="sm" fontWeight="bold">₹</Text>
                                <Text fontSize="sm" fontWeight="bold">253</Text>
                            </HStack>
                        </Box>
                    </HStack>
                </Box>
            </View>

        </NativeBaseProvider>
    )
}

export default Cart;


{/* <Select
    placeholder="Mode of payment"
    selectedValue={quantity}
    width={150}
    onValueChange={(itemValue) => setQuantity(itemValue)}
>
    <Select.Item label="Wallet" value="key0" />
    <Select.Item label="ATM Card" value="key1" />
    <Select.Item label="Debit Card" value="key2" />
    <Select.Item label="Credit Card" value="key3" />
    <Select.Item label="Net Banking" value="key4" />
</Select>  */}