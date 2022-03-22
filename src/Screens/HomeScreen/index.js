import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './style';

function Homescreen({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let counter = 0;

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

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ScrollView style={styles.mainView}>
      <ScrollView style={styles.carousel}>
        <Text>carousel</Text>
      </ScrollView>
      <View style={styles.subContainer}>
        <View style={{flexDirection: 'row', margin: 5}}>
          <Text style={styles.heading}>MEN</Text>
          <Text
            style={styles.viewAll}
            onPress={() => {
              navigation.navigate('ProductListWithApi');
            }}>
            View All
          </Text>
        </View>

        <ScrollView horizontal style={styles.container}>
          {data ? (
            data.map(item =>
              counter++ < 5 ? (
                <TouchableOpacity key={item.id}
                  style={styles.card}
                  onPress={() => {
                    const proId = item.id;
                    navigation.navigate('ProductDetail', {proId});
                  }}>
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
      <View style={styles.subContainer}>
        <View style={{flexDirection: 'row', margin: 5}}>
          <Text style={styles.heading}>WOMEN</Text>
          <Text
            style={styles.viewAll}
            onPress={() => {
              navigation.navigate('ProductListWithApi');
            }}>
            View All
          </Text>
        </View>

        <ScrollView horizontal style={styles.container}>
          {data ? (
              counter=0,
            data.map(item =>
              counter++ >= 5 && counter <= 10 ? (
                <TouchableOpacity key={item.id}
                  style={styles.card}
                  onPress={() => {
                    const proId = item.id;
                    navigation.navigate('ProductDetail', {proId});
                  }}>
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
            <Text>WOMEN</Text>
          )}
        </ScrollView>
      </View>
      <View style={styles.subContainer}>
        <View style={{flexDirection: 'row', margin: 5}}>
          <Text style={styles.heading}>KIDS</Text>
          <Text
            style={styles.viewAll}
            onPress={() => {
              navigation.navigate('ProductListWithApi');
            }}>
            View All
          </Text>
        </View>

        <ScrollView horizontal style={styles.container}>
          {data ? (
              counter=0,
            data.map(item =>
              counter++ >= 11 && counter <= 16 ? (
                <TouchableOpacity key={item.id}
                  style={styles.card}
                  onPress={() => {
                    const proId = item.id;
                    navigation.navigate('ProductDetail', {proId});
                  }}>
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
            <Text>KIDS</Text>
          )}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

export default Homescreen;

