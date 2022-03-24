import {
  Box,
  Avatar,
  Center,
  Heading,
  NativeBaseProvider,
  ScrollView,
  Text,
  Button,
  VStack,
} from 'native-base';
// import {ScrollView} from 'react-native';

import React from 'react';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../../Utils/color';
import FlotingButton from '../../Components/FlotingButton';

const Profile = () => {
  //   const [quantity, setQuantity] = useState();
  //   const [selectedLanguage, setSelectedLanguage] = useState();

  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NativeBaseProvider>
      <ScrollView>
        <VStack
          space={2}
          paddingTop="25"
          alignItems={{
            base: 'center',
            md: 'flex-start',
          }}
        />
        <Avatar
          bg="pink.600"
          alignSelf="center"
          size="2xl"
          source={{
            uri: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80',
          }}
        />

        <Center w="100%">
          <Box safeArea p="1" py="8" w="90%" maxW="500" borderBottomWidth="1">
            <Heading
              size="lg"
              fontWeight="600"
              textAlign="center"
              color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}>
              Welcome User
            </Heading>

            <VStack space={3} mt="5">
              <Text
                fontSize="md"
                color="coolGray.600"
                textAlign="center"
                _dark={{
                  color: 'warmGray.200',
                }}>
                Mobile Number
              </Text>
              <Text
                fontSize="md"
                color="coolGray.600"
                textAlign="center"
                _dark={{
                  color: 'warmGray.200',
                }}>
                Email Address
              </Text>
            </VStack>
            <Icon style={style.icon} name="pencil" size={20} color="black" />
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
            <Box flexDirection="row">
              <Text borderBottomWidth="1" width="96%" color="white">
                {' '}
                My Addresses
              </Text>
              <Icon
                style={style.addicon}
                name="pencil"
                size={18}
                color="white"
              />
            </Box>
            <Text textAlign="right" color="white">
              {' '}
              VIEW ALL ADDRESS
            </Text>
          </Box>
          <Box mt="3" flexDirection="row">
            <Button
              startIcon={<Icon3 name="logout" size={20} color={Color.white} />}
              bg={Color.blue}
              w="50%"
              _text={{
                color: Color.white,
                fontSize: '12',
              }}>
              Logout
            </Button>
          </Box>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Profile;
