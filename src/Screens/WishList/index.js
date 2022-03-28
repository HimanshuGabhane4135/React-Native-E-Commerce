import { Box, Button, FlatList, HStack, Image, NativeBaseProvider, Text, View } from 'native-base'
import React, { useEffect } from 'react'
import { Color } from '../../Utils/color'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from 'react-native-splash-screen';
import { useSelector } from 'react-redux';

const WishList = () => {

    const { wishLists } = useSelector(state => state.CartReducer)
    console.log("wishlist",wishLists)


    useEffect(() => {
        SplashScreen.hide()
    })

    const renderItem = ({ item }) => {
        return (
            <View>
                <View>
                    <Box w="50%" bg="#D3D3D3" m={2} p={5} rounded={10}>
                        <Box>
                            <Image source={{
                                uri: item.image
                            }} size="xl" alt="Please Wait" mb={1} />
                        </Box>
                        <Text fontSize="xs" mt={1} color={Color.gray}>{item.title}</Text>

                        <HStack mt={1}>
                            <Text fontSize="md" fontWeight="bold">₹</Text>
                            <Text fontSize="md" fontWeight="bold">{item.price}</Text>
                        </HStack>
                        <Box alignItems="flex-end">
                            <Button startIcon={<Icon3 name="delete" size={20} color={Color.gray} />} bg={Color.white} _text={{
                                color: "#898989",
                                fontSize: "12"
                            }}>
                                Remove
                            </Button>
                        </Box>
                    </Box>
                </View>
            </View>

        )
    }
    return (
        <NativeBaseProvider>
             <Text fontSize="lg" fontWeight="bold" p={5}>My WishList</Text>
           <FlatList
           data={wishLists}
        //    numColumns={2}
           renderItem={renderItem}
           />

        </NativeBaseProvider>
    )
}

export default WishList