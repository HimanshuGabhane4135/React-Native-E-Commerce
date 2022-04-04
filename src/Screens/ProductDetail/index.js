import React, {useEffect, useState} from 'react';

import {
  ActivityIndicator,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './style';

const ProductDetail = ({route, navigation}) => {
  const {proId} = route.params;
  const id = JSON.stringify(proId);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
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
    getProduct();
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.9,backgroundColor: '#edebeb', }}>
        {isLoading ? (
          <View
            style={{flex: 0.8, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator />
          </View>
        ) : (
          <ScrollView style={{flex: 0.8}}>
            <Image style={styles.img} source={{uri: data.image}} />
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.price}>${data.price}</Text>
              <Text style={styles.desc}>Description: </Text>
              <Text style={styles.desc}>{data.description}</Text>
            </View>
          </ScrollView>
        )}
      </View>
      <View
        style={{
          flex: 0.1,
          justifyContent: 'flex-end',
          backgroundColor: '#edebeb',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.btnView}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnView}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;
