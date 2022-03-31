import {Box, Center, NativeBaseProvider, Button} from 'native-base';

import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../../Utils/color';
import Card from '../../Components/Card';

const a = [
  {name: 'a', email: 'b', phoneNo: 'c', pincode: 'd', address: 'e'},
  {name: 'a', email: 'b', phoneNo: 'c', pincode: 'd', address: 'e'},
  {name: 'a', email: 'b', phoneNo: 'c', pincode: 'd', address: 'e'},
];

const ManageAddress = ({navigation}) => {
  //   const [quantity, setQuantity] = useState();
  //   const [selectedLanguage, setSelectedLanguage] = useState();

  useEffect(() => {
    SplashScreen.hide();
  });
  const renderItem = ({item}) => <Card data={item} />;
  return (
    <NativeBaseProvider>
      <FlatList
        data={a}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Center>
        <Box mt="3" flexDirection="row" mb="5">
          <Button
            startIcon={<Icon3 name="plus" size={20} color={Color.white} />}
            bg={Color.blue}
            onPress={() => {
              navigation.navigate('AddAddress');
            }}
            w="50%"
            _text={{
              color: Color.white,
              fontSize: '12',
            }}>
            Add Address
          </Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default ManageAddress;
