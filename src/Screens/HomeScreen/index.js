import React, {useEffect, useState} from 'react';
import styles from './style';
import Slider from '../../Components/Slider/index';
import {IconButton, NativeBaseProvider} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import {Color} from '../../Utils/color';
import {useDispatch} from 'react-redux';
import {addToWishList} from '../../Redux/action';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  BackHandler,
  Alert,
} from 'react-native';
import {useRoute, useFocusEffect} from '@react-navigation/native';

const images = [
  require('../../Assets/carousel1.jpg'),
  require('../../Assets/carousel2.jpg'),
  require('../../Assets/carousel3.jpg'),
  require('../../Assets/carousel4.jpg'),
];

function Homescreen({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  let counter = 0;

  const route = useRoute();

  const getProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const dispatch = useDispatch();
  const wishListProduct = () => {
    dispatch(addToWishList(data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if ((route.name = 'Homescreen')) {
          Alert.alert('Hold on!', 'Are you sure you want to go Exit?', [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {text: 'YES', onPress: () => BackHandler.exitApp()},
          ]);
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  return (
    <ScrollView style={styles.mainView}>
      {/* carousel */}

      <Slider images={images} />

      {/* MEN */}

      <View style={styles.subContainer}>
        <View style={{flexDirection: 'row', margin: 5, padding: 5}}>
          <Text style={styles.heading}>MEN</Text>
          <Text
            style={styles.viewAll}
            onPress={() => {
              navigation.navigate('ProductListWithApi');
            }}>
            View All
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.container}>
          {data ? (
            data.map(item =>
              counter++ < 5 ? (
                <TouchableOpacity
                  key={item.id}
                  style={styles.card}
                  onPress={() => {
                    const proId = item.id;
                    navigation.navigate('ProductDetail', {proId});
                  }}>
                  <NativeBaseProvider>
                    <IconButton
                      onPress={() => wishListProduct()}
                      alignItems="flex-end"
                      icon={<Icon size={20} color={Color.gray} name="star" />}
                    />
                  </NativeBaseProvider>
                  <Image style={styles.img} source={{uri: item.image}} />

                  <ScrollView style={styles.infoContainer}>
                    <Text style={styles.name}>{item.title}</Text>
                    <Text style={styles.price}>$ {item.price}</Text>
                  </ScrollView>
                </TouchableOpacity>
              ) : (
                <></>
              ),
            )
          ) : (
            <Text>MEN</Text>
          )}
        </ScrollView>
      </View>

      {/* WOMEN */}

      <View style={styles.subContainer}>
        <View style={{flexDirection: 'row', margin: 5, padding: 5}}>
          <Text style={styles.heading}>WOMEN</Text>
          <Text
            style={styles.viewAll}
            onPress={() => {
              navigation.navigate('ProductListWithApi');
            }}>
            View All
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.container}>
          {data ? (
            ((counter = 0),
            data.map(item =>
              counter++ >= 5 && counter <= 10 ? (
                <TouchableOpacity
                  key={item.id}
                  style={styles.card}
                  onPress={() => {
                    const proId = item.id;
                    navigation.navigate('ProductDetail', {proId});
                  }}>
                  <NativeBaseProvider>
                    <IconButton
                      onPress={() => wishListProduct()}
                      alignItems="flex-end"
                      icon={<Icon size={20} color={Color.gray} name="star" />}
                    />
                  </NativeBaseProvider>
                  <Image style={styles.img} source={{uri: item.image}} />

                  <ScrollView style={styles.infoContainer}>
                    <Text style={styles.name}>{item.title}</Text>
                    <Text style={styles.price}>$ {item.price}</Text>
                  </ScrollView>
                </TouchableOpacity>
              ) : (
                <></>
              ),
            ))
          ) : (
            <Text>WOMEN</Text>
          )}
        </ScrollView>
      </View>

      {/* KIDS */}

      <View style={styles.subContainer}>
        <View style={{flexDirection: 'row', margin: 5, padding: 5}}>
          <Text style={styles.heading}>KIDS</Text>
          <Text
            style={styles.viewAll}
            onPress={() => {
              navigation.navigate('ProductListWithApi');
            }}>
            View All
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.container}>
          {data ? (
            ((counter = 0),
            data.map(item =>
              counter++ >= 11 && counter <= 16 ? (
                <TouchableOpacity
                  key={item.id}
                  style={styles.card}
                  onPress={() => {
                    const proId = item.id;
                    navigation.navigate('ProductDetail', {proId});
                  }}>
                  <NativeBaseProvider>
                    <IconButton
                      onPress={() => wishListProduct()}
                      alignItems="flex-end"
                      icon={<Icon size={20} color={Color.gray} name="star" />}
                    />
                  </NativeBaseProvider>
                  <Image style={styles.img} source={{uri: item.image}} />

                  <ScrollView style={styles.infoContainer}>
                    <Text style={styles.name}>{item.title}</Text>
                    <Text style={styles.price}>$ {item.price}</Text>
                  </ScrollView>
                </TouchableOpacity>
              ) : (
                <></>
              ),
            ))
          ) : (
            <Text>KIDS</Text>
          )}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

export default Homescreen;
