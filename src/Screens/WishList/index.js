import { Box, Button, HStack, Image, NativeBaseProvider, Text, View } from 'native-base'
import React, { useEffect } from 'react'
import { Color } from '../../Utils/color'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from 'react-native-splash-screen';

const WishList = () => {

    useEffect(() => {
        SplashScreen.hide()
    })
    return (
        <NativeBaseProvider>
            <Text fontSize="lg" fontWeight="bold" p={5}>My WishList</Text>
            <View>
                <Box w="50%" bg="#D3D3D3" m={5} p={5} rounded={10}>
                    <Box>
                        <Image source={{
                            uri: "https://www.pngall.com/wp-content/uploads/5/Purse.png"
                        }} size="xl" alt="Please Wait" mb={1} />
                    </Box>
                    <Text fontSize="xs" mt={1} color={Color.gray}>Product Name</Text>

                    <HStack mt={1}>
                        <Text fontSize="md" fontWeight="bold">₹</Text>
                        <Text fontSize="md" fontWeight="bold">213</Text>
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
        </NativeBaseProvider>
    )
}

export default WishList