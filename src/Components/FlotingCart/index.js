import React from 'react'
import { Box, Button, Center, CheckIcon, FlatList, Flex, HStack, IconButton, Image, NativeBaseProvider, Select, Text, View, VStack } from 'native-base'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color } from '../../Utils/color'


const FkoatingCart = ({ item }) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
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
                            <Text fontSize="md" fontWeight="bold">{item.price * selectedLanguage}</Text>
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
                                <Picker.Item label="Qty:1" value="1" />
                                <Picker.Item label="2" value="2" />
                                <Picker.Item label="3" value="3" />
                            </Picker>
                        </Box>
                    </VStack>
                </HStack>

                <HStack mt={5}>
                    <Button
                        onPress={() => handleAddToWishList(item)}
                        startIcon={<Icon name="save" size={20} color={Color.gray} />} bg={Color.white} w="50%" _text={{
                            color: "#898989",
                            fontSize: "12"
                        }}>
                        Save for later
                    </Button>
                    <Button
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

    )
}

export default FkoatingCart