import React from 'react';
import {View} from 'react-native';
import {Text, NativeBaseProvider, Box, HStack} from 'native-base';
import {Color} from '../../Utils/color';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';
import {useState} from 'react';
import FloatingInput from '../../Components/FloatingInput';
import FlotingButton from '../../Components/FlotingButton';
import {Errors} from '../../Utils/MessageUtils';

const Login = ({navigation}) => {
  const [userName, setUserName] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const emptyData = '';
  const sUserName = 'sapana';
  const sPassword = 'sapana';

  useEffect(() => {
    SplashScreen.hide();
  });

  const loginHandler = () => {
    if (password.value == emptyData) {
      setPassword({...password, error: Errors.pwdBlank});
    }
    if (userName.value == emptyData) {
      setUserName({...userName, error: Errors.userNameBlank});
    }
    // else if(userName.value != sUserName || password.value != sPassword){
    //     setPassword({ ...userName, error: "*UserName or passwor is inValid..." })
    // }
    else if ((userName.value, password.value) != emptyData) {
      navigation.navigate('SideDrawer');
    }
  };
  return (
    <NativeBaseProvider>
      <View>
        <Box m={10}>
          <Text fontSize="sm" fontWeight="bold">
            Log In for the best experience
          </Text>
          <Text fontSize="xs" color={Color.gray} mt={3} mb={3}>
            Experience the all new Shopkart
          </Text>

          <FloatingInput
            placeholder="UserName"
            value={userName.value}
            error={userName.error}
            onChangeText={text => setUserName({value: text, error: ''})}
            iconName="user"
            // InputLeftElement={<InputIcon name="user" />}
          />
          <FloatingInput
            placeholder="Password"
            value={password.value}
            error={password.error}
            onChangeText={text => setPassword({value: text, error: ''})}
            secureTextEntry={true}
            iconName="lock"
          />

          <Text
            fontSize="xs"
            color={Color.blue}
            fontWeight="bold"
            textAlign="right"
            my={1}
            onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot Password?
          </Text>

          <Text fontSize="xs"></Text>

          <FlotingButton btnString="LogIn" onPress={loginHandler} />

          <HStack mt={2}>
            <Text fontSize="sm">Or</Text>
            <Text
              fontSize="sm"
              pl="2"
              color={Color.blue}
              onPress={() => navigation.navigate('SignUp')}>
              Create an account
            </Text>
          </HStack>

          {/* <Text>{sPassword}</Text> */}
        </Box>
      </View>
    </NativeBaseProvider>
  );
};

export default Login;
