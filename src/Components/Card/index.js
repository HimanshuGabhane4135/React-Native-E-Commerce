import {Box, Center, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Color} from '../../Utils/color';

const Card = (props, data) => {
  console.log('data--', data);
  return (
    <Box>
      <TouchableOpacity onPress={props.onPress}>
        <Center>
          <Text />
          <Box safeArea py="8" w="90%" maxW="500" p={5} bg={Color.gray}>
            <Text color="white"> Name: {props.data.name}</Text>
            <Text color="white"> Email: {props.data.email}</Text>
            <Text color="white"> Phone No.: {props.data.phoneNo}</Text>
            <Text color="white"> Pincode: {props.data.pincode}</Text>
            <Text color="white"> Address: {props.data.address}</Text>
          </Box>
          <Text />
        </Center>
      </TouchableOpacity>
    </Box>
  );
};

export default Card;
