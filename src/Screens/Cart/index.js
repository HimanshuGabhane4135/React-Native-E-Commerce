import React from 'react'
import { Box, Button, Center, CheckIcon, FlatList, Flex, HStack, IconButton, Image, NativeBaseProvider, ScrollView, Select, Text, View, VStack } from 'native-base'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux'
import { Color } from '../../Utils/color'
import { addToWishList, removeFromCart } from '../../Redux/action'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect } from 'react';

const Cart = ({ navigation }) => {

    const { carts } = useSelector(state => state.CartReducer)
    const [selectedLanguage, setSelectedLanguage] = useState();
    const priceArray = carts?.map(i => i.price)
    const [totalPrice,setTotalPrice] = useState(0)


  

    let sum = 0;
    for (let i = 0; i < priceArray.length; i++) {
        sum += priceArray[i];
    }

    useEffect(() => {
        // console.log("priceArray",priceArray);
        if(sum == 0){
            setTotalPrice(0)
        }else{
            setTotalPrice(sum + 40)
        }
    
    })

    const dispatch = useDispatch();
    const removeFromBookmarkList = book => dispatch(removeFromCart(book))

    const handleRemoveBookmark = book => {
        removeFromBookmarkList(book);
    };


    const addToWlist = book => dispatch(addToWishList(book))

    const handleAddToWishList = book => {
        addToWlist(book);
    };


    const EmptyListMessage = () => {
        return (
            <View>
                <Text textAlign="center" fontSize="md" mt={5}>Nothing to show</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Homescreen")}>

                    <Text fontSize="md" m={5} textAlign="center" bg="#D3D3D3" p={3} rounded={10}>
                        Add New Products
                    </Text>
                </TouchableOpacity>
            </View>

        );
    };

    // console.log(JSON.stringify(bookMarsk));
    const renderItem = ({ item }) => {
        //   {  console.log("rederItem")}
        console.log(item.title, '12321')
        return (
            <NativeBaseProvider>
                <View>
                    <Box p={5} bg="#D3D3D3" m={5} rounded={5}>

                        <HStack>
                            <VStack w="50%">
                                <Text fontSize="sm" fontWeight="bold">{item.title}</Text>
                                <HStack mt={2}>
                                    <Button _text={{
                                        color: "#fff",
                                        fontSize: "12"
                                    }} bg={Color.green}
                                        endIcon={<Icon2 name="star" size={10} color={Color.white} />} h={7}>
                                        {item.rating.rate}
                                    </Button>

                                    <Text fontSize="xs" mt={1} color={Color.gray} ml={2}>(13,564)</Text>
                                </HStack>

                                <HStack mt={5}>
                                    <Text fontSize="md" fontWeight="bold">₹</Text>
                                    <Text fontSize="md" fontWeight="bold">{item.price}</Text>
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
                                {/* alignItems="flex-end" */}
                                <Box alignItems="flex-end">
                                    <Image source={{
                                        // uri: "https://www.pngall.com/wp-content/uploads/5/Purse.png"
                                        uri: item.image
                                    }} size="sm" alt="Please Wait" />
                                    <Picker
                                        selectedValue={selectedLanguage}
                                        style={{ width: "60%" }}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedLanguage(itemValue)
                                        }>
                                        <Picker.Item label="1" value="1" />
                                        <Picker.Item label="2" value="2" />
                                        <Picker.Item label="3" value="3" />
                                    </Picker>
                                </Box>
                            </VStack>
                        </HStack>

                        <HStack mt={5}>
                            <Button
                                mr={1}
                                onPress={() => {
                                    handleAddToWishList(item)
                                    console.log("price", item.price)
                                }}
                                startIcon={<Icon name="save" size={20} color={Color.gray} />} bg={Color.white} w="50%" _text={{
                                    color: "#898989",
                                    fontSize: "12"
                                }}>
                                Save for later
                            </Button>
                            <Button
                                ml={1}
                                onPress={() => handleRemoveBookmark(item)}
                                startIcon={<Icon3 name="delete" size={20} color={Color.gray} />} bg={Color.white} w="50%" _text={{
                                    color: "#898989",
                                    fontSize: "12"
                                }}>
                                Remove
                            </Button>
                        </HStack>
                    </Box>

                </View>

            </NativeBaseProvider>
        )
    }
    return (
        <NativeBaseProvider >
            <ScrollView>
                <FlatList
                    data={carts}
                    // keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                    ListEmptyComponent={EmptyListMessage}
                />


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
                                <Text fontSize="sm">{sum}</Text>
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
                                {/* <Text fontSize="sm" fontWeight="bold">{sum + 40}</Text> */}
                                <Text fontSize="sm" fontWeight="bold">{totalPrice}</Text>
                            </HStack>
                        </Box>
                    </HStack>
                </Box>
            </ScrollView>
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