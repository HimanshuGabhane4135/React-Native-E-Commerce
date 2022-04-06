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

import React, {useState} from 'react';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import style from './style';
import {Color} from '../../Utils/color';

const AddressForm = ({route, navigation}) => {
  console.log(route);

  const [address, setAddress] = useState(route.params.item);

  onUpdateAddress = () => {};

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
              <Input
                bg={Color.white}
                styles={style.input}
                value={address.name}
                onChangeText={text => setAddress({...address, name: text})}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                bg={Color.white}
                styles={style.input}
                value={address.email}
                onChangeText={text => setAddress({...address, email: text})}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Phone No.</FormControl.Label>
              <Input
                bg={Color.white}
                styles={style.input}
                value={address.phoneNo}
                onChangeText={text => setAddress({...address, phoneNo: text})}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Pincode</FormControl.Label>
              <Input
                bg={Color.white}
                styles={style.input}
                value={address.pincode}
                onChangeText={text => setAddress({...address, pincode: text})}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Address</FormControl.Label>
              <Input
                bg={Color.white}
                styles={style.input}
                value={address.address}
                onChangeText={text => setAddress({...address, address: text})}
              />
            </FormControl>

            <Button
              mt="2"
              colorScheme="indigo"
              onPress={() => {
                navigation.navigate('ManageAddress');
              }}>
              Update
            </Button>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default AddressForm;
