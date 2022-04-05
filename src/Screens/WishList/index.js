import { Box, Button, FlatList, HStack, Image, NativeBaseProvider, Text, View } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Color } from '../../Utils/color'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from 'react-native-splash-screen';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { removeFromWishList } from '../../Redux/action';
import FlotingButton from '../../Components/FlotingButton';

const WishList = ({ navigation }) => {

    const { wishLists } = useSelector(state => state.CartReducer)
    const totalProduct= wishLists?.length;
    console.log(totalProduct,"producttttttt")
  
    const dispatch = useDispatch();
    const removeFromBookmarkList = book => dispatch(removeFromWishList(book))

    const handleRemoveBookmark = book => {
        removeFromBookmarkList(book);
    };


    useEffect(() => {
        SplashScreen.hide()
    })

    // const deleteHandler = (item) => {
    //  const a =first.filter(x=> x.id !== item)
    //  setfirst(a)
    //  setstatus(!status)
    //  console.log(a,"ihihihihih");
    //     //     console.log(".....",item)
    // //    const sss= wishLists.map(i=> i.id)
    // //    wishLists.filter(sss !== item)
    // }

    const EmptyListMessage = () => {
        return (
            <View>
                <Text textAlign="center" fontSize="md" mt={5}>Nothing to show</Text>
                <FlotingButton
                        btnString="Add New Products"
                        my={5}
                        mx={10}
                        onPress={() => navigation.navigate("Home")}
                    />
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
                        }} size="xl" alt="Please Wait" mb={1} resizeMode='contain' bg={'white'} />
                    </Box>
                    <Text fontSize="xs" mt={1} color={Color.black}>{item.title}</Text>

                    <HStack mt={1}>
                        <Text fontSize="md" fontWeight="bold">$</Text>
                        <Text fontSize="md" fontWeight="bold">{item.price}</Text>
                    </HStack>
                    <Box alignItems="flex-end">
                        <Button
                            onPress={() => {handleRemoveBookmark(item)}}
                            startIcon={<Icon3 name="delete" size={20} color={Color.gray} />} bg={Color.white} _text={{
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
            <Text textAlign="right" mr={5} color={Color.gray} fontWeight="bold">{totalProduct} item</Text>
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
