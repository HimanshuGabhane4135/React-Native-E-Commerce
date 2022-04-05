import React from 'react';
import FloatingInput from '../../Components/FloatingInput';
import FlotingButton from '../../Components/FlotingButton';
import {Box, NativeBaseProvider} from 'native-base';

const ForgotPassword = () => {
  return (
    <NativeBaseProvider>
      <Box m={10}>
        <FloatingInput placeholder="Username" iconName="user" />

        <FlotingButton btnString="Get Otp" />
      </Box>
    </NativeBaseProvider>
  );
};

export default ForgotPassword;
