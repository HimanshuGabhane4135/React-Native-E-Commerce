import {Box, Image, NativeBaseProvider} from 'native-base';
import React from 'react';

const NBBox = props => {
  return <Box p="5" borderRadius="md" bg="primary.400" {...props} />;
};

const Change = () => {
  return (
    <NativeBaseProvider>
      <Box alignItems="flex-end">
        <NBBox position="relative" p="7" />
        <NBBox bg="yellow.400" position="absolute" />
      </Box>

      <Box alignItems="flex-end">
        <Image
          source={{
            uri: 'https://wallpaperaccess.com/full/317501.jpg',
          }}
          size="lg"
          alt="Please Wait"
        />
      </Box>
    </NativeBaseProvider>
  );
};

export default Change;
