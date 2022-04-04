import {
  Box,
  Center,
  Heading,
  NativeBaseProvider,
  FormControl,
  Input,
  Button,
  VStack,
} from 'native-base';

import React from 'react';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import style from './style';
import {Color} from '../../Utils/color';

const AddAddress = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NativeBaseProvider>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading styles={style.heading}>Edit Address</Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input bg={Color.white} styles={style.input} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input bg={Color.white} styles={style.input} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Phone No.</FormControl.Label>
              <Input bg={Color.white} styles={style.input} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Pincode</FormControl.Label>
              <Input bg={Color.white} styles={style.input} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Address</FormControl.Label>
              <Input bg={Color.white} styles={style.input} />
            </FormControl>

            <Button
              mt="2"
              colorScheme="indigo"
              onPress={() => {
                navigation.navigate('ManageAddress');
              }}>
              Add
            </Button>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default AddAddress;
