import React, {useEffect, useState} from 'react';

import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import styles from './style';

const ProductListWithApi = ({ navigation }) => {
    
  const number = 2;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Sort</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <SafeAreaView style={{backgroundColor: '#edebeb'}}>
          {isLoading ? (
            <View style={{justifyContent:'center',alignItems:'center', marginHorizontal: 200}}>
            <ActivityIndicator />
            </View>
          ) : (
              <View style={{marginBottom: 100}}>
            <FlatList 
              data={data}
              keyExtractor={({id}, index) => id}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.card} onPress={() => {
                    // goToDetail(item.id);
                    const proId = item.id;
                    navigation.navigate('ProductDetail', {proId})
                } }>
                  <Image style={styles.img} source={{uri: item.image}} />

                  <View style={styles.infoContainer}>
                    <Text style={styles.name}>{item.title}</Text>
                    <Text style={styles.price}>$ {item.price}</Text>
                  </View>
                </TouchableOpacity>
              )}
              numColumns={number}
            />
            </View>
          )}
        </SafeAreaView>
      </View>
    </View>
  );
};

export default ProductListWithApi;

