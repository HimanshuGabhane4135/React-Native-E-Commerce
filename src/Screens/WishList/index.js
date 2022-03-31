import { Box, Button, FlatList, HStack, Image, NativeBaseProvider, Text, View } from 'native-base'
import React, { useEffect } from 'react'
import { Color } from '../../Utils/color'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from 'react-native-splash-screen';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WishList = ({ navigation }) => {

    const { wishLists } = useSelector(state => state.CartReducer)
    console.log("wishlist", wishLists)


    useEffect(() => {
        SplashScreen.hide()
    })

    const EmptyListMessage = () => {
        return (
            // Flat List Item
            <View>
                <Text textAlign="center" fontSize="md" mt={5}>Nothing to show</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                    <Text fontSize={20} m={5} textAlign="center" bg="#D3D3D3" p={3} rounded={10}>
                        Add New Products
                    </Text>
                </TouchableOpacity>
            </View>

        );
    };

    const renderItem = ({ item }) => {
        return (

            <View>
                <Box w={180} bg="#D3D3D3" m={3} p={5} rounded={10}>
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


        )
    }
    return (
        <NativeBaseProvider>
            <Text fontSize="lg" fontWeight="bold" p={5}>My WishList</Text>
            <FlatList
                data={wishLists}
                numColumns={2}
                ListEmptyComponent={EmptyListMessage}
                renderItem={renderItem}
            />

        </NativeBaseProvider>
    )
}

export default WishList