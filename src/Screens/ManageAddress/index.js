import {
  Box,
  Center,
  NativeBaseProvider,
  ScrollView,
  Text,
  Button,
} from 'native-base';

import React from 'react';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../../Utils/color';

const ManageAddress = () => {
  //   const [quantity, setQuantity] = useState();
  //   const [selectedLanguage, setSelectedLanguage] = useState();

  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box>
          <Center>
            <Text></Text>
            <Box safeArea py="8" w="90%" maxW="500" p={5} bg={Color.gray}>
              <Text borderBottomWidth="1" color="white">
                {' '}
                My Orders
              </Text>
              <Text textAlign="right" color="white">
                {' '}
                VIEW ALL ORDERS
              </Text>
            </Box>

            <Box
              safeArea
              p="1"
              py="8"
              w="90%"
              maxW="500"
              p={5}
              mt="3"
              bg={Color.gray}>
              <Text borderBottomWidth="1" color="white">
                {' '}
                My Wishlist
              </Text>
              <Text textAlign="right" color="white">
                {' '}
                VIEW YOUR WISHLIST
              </Text>
            </Box>

            <Box
              safeArea
              p="1"
              py="8"
              w="90%"
              maxW="500"
              p={5}
              mt="3"
              bg={Color.gray}>
              <Box>
                <Text borderBottomWidth="1" color="white">
                  {' '}
                  My Addresses
                </Text>
              </Box>
              <Text textAlign="right" color="white">
                {' '}
                VIEW ALL ADDRESS
              </Text>
            </Box>
            <Text></Text>
          </Center>
        </Box>
        <Center>
          <Box mt="3" flexDirection="row">
            <Button
              startIcon={<Icon3 name="plus" size={20} color={Color.white} />}
              bg={Color.blue}
              w="50%"
              _text={{
                color: Color.white,
                fontSize: '12',
              }}>
              Add Address
            </Button>
          </Box>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default ManageAddress;
