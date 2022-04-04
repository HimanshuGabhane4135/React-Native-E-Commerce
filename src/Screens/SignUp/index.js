import {Box, HStack, NativeBaseProvider, Text, View} from 'native-base';
import React from 'react';
import FloatingInput from '../../Components/FloatingInput';
import {Color} from '../../Utils/color';
import FlotingButton from '../../Components/FlotingButton';
import {useState} from 'react';
import {Errors} from '../../Utils/MessageUtils';

const SignUp = ({navigation}) => {
  const [userName, setUserName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [phoneNumber, setPhoneNumber] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [confirmPassword, setConfirmPassword] = useState({
    value: '',
    error: '',
  });

  const reg = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

  const signUpHandler = () => {
    const emptyData = '';

    if (userName.value == emptyData) {
      setUserName({...userName, error: Errors.userNameBlank});
    }

    if (email.value == emptyData) {
      setEmail({...email, error: Errors.emailBlank});
    } else if (!reg.test(email.value)) {
      setEmail({...email, error: Errors.emailValidity});
    }

    if (phoneNumber.value == emptyData) {
      setPhoneNumber({...phoneNumber, error: Errors.phoneBlank});
    } else if (phoneNumber.value.length < 10) {
      setPhoneNumber({...phoneNumber, error: Errors.phoneInvalid});
    }

    if (password.value == emptyData) {
      setPassword({...password, error: Errors.pwdBlank});
    } else if (password.value.length < 6) {
      setPassword({...password, error: Errors.pwdInvalid});
    }

    if (confirmPassword.value == emptyData) {
      setConfirmPassword({...confirmPassword, error: Errors.cPassworBlank});
    } else if (confirmPassword.value != password.value) {
      setConfirmPassword({...confirmPassword, error: Errors.pwdMisMatch});
    } else if (
      !(
        userName.value == emptyData ||
        !reg.test(email.value) ||
        phoneNumber.value.length < 10 ||
        password.value.length < 6 ||
        confirmPassword.value != password.value
      )
    ) {
      navigation.navigate('Home');
    }
  };

  return (
    <NativeBaseProvider>
      <View>
        <Box m={10}>
          <Text fontSize="sm" fontWeight="bold">
            Sign Up for the best experiance
          </Text>
          <Text fontSize="xs" color={Color.gray} mt={3} mb={3}>
            Expereance the all new Shopkart
          </Text>

          <FloatingInput
            placeholder="Enter Username"
            iconName="user"
            value={userName.value}
            error={userName.error}
            onChangeText={text => setUserName({value: text})}
          />
          <FloatingInput
            placeholder="Enter Email"
            iconName="user"
            value={email.value}
            error={email.error}
            onChangeText={text => setEmail({value: text})}
          />
          <FloatingInput
            placeholder="Enter Phone Number"
            keyboardType="numeric"
            iconName="user"
            value={phoneNumber.value}
            error={phoneNumber.error}
            onChangeText={text => setPhoneNumber({value: text})}
          />
          <FloatingInput
            placeholder="Enter Password"
            iconName="lock"
            value={password.value}
            error={password.error}
            onChangeText={text => setPassword({value: text})}
          />
          <FloatingInput
            placeholder="Confirm Password"
            iconName="lock"
            value={confirmPassword.value}
            error={confirmPassword.error}
            onChangeText={text => setConfirmPassword({value: text})}
          />

          <Text fontSize="xs"></Text>

          <FlotingButton btnString="Continue" onPress={signUpHandler} />

          <HStack mt={2}>
            <Text fontSize="sm">Or</Text>
            <Text
              fontSize="sm"
              pl="2"
              color={Color.blue}
              onPress={() => navigation.navigate('Login')}>
              Existing User? Login
            </Text>
          </HStack>
        </Box>
      </View>
    </NativeBaseProvider>
  );
};

export default SignUp;
