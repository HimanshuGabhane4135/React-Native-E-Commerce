import { Box, Center, Image, NativeBaseProvider } from 'native-base';
import React from 'react'
import { useEffect } from 'react'
import { Text, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'



const NBBox = props => {
  return <Box p="5" borderRadius="md" bg="primary.400" {...props} />;
};

// function Component() {
//   return
// }

// function Example() {
//   return <NativeBaseProvider>
//      <Center flex={1}>
//         <Component />
//       </Center>
//   </NativeBaseProvider>;
// }
const Change = () => {

  return (
    <NativeBaseProvider>
      <Box alignItems="flex-end" >
        <NBBox position="relative" p="7" />
        <NBBox bg="yellow.400" position="absolute" />
      </Box>

      <Box alignItems="flex-end">
        <Image  source={{
          uri: "https://wallpaperaccess.com/full/317501.jpg"
        }} size="lg" alt="Please Wait" />
      </Box>

    </NativeBaseProvider>
  )
}

export default Change;