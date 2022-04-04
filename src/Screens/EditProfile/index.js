import {
  Box,
  Avatar,
  Center,
  Heading,
  NativeBaseProvider,
  ScrollView,
  FormControl,
  Input,
  VStack,
  Button,
} from 'native-base';

import React from 'react';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

const EditProfile = ({navigation}) => {
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
          <Box safeArea p="2" w="90%" maxW="290" py="8">
            <Heading
              size="lg"
              textAlign="center"
              color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}
              fontWeight="semibold">
              Edit Profile
            </Heading>
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Name</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>Mobile Number</FormControl.Label>
                <Input type="numeric" />
              </FormControl>
              <FormControl>
                <FormControl.Label>Email Address</FormControl.Label>
                <Input type="email" />
              </FormControl>
              <Button
                mt="2"
                colorScheme="indigo"
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                Update
              </Button>
            </VStack>
          </Box>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default EditProfile;
