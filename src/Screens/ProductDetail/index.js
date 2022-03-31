import { useToast } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';

import {
  ActivityIndicator,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Redux/action';
import styles from './style';
import { Color } from '../../Utils/color';

const ProductDetail = ({ route, navigation }) => {
  const { proId } = route.params;
  const id = JSON.stringify(proId);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const toast = useToast();
  const {carts} = useSelector(state => state.CartReducer);

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


  const dispatch = useDispatch();
  const fetchProduct = () => dispatch(addToCart({ data }))

  const ifExists = book => {
    return carts?.filter(item => item.id === book.id).length > 0
};
  useEffect(() => {
    getProduct();
  }, []);


  const addProduct = () => {
    toast.show({
      description: "Product Added",
      placement: "top",
      bg: Color.green
    })
    fetchProduct()


  }
  return (

    <View style={{ flex: 1 }}>

      <View style={{ flex: 0.9, backgroundColor: '#edebeb', }}>
        {isLoading ? (
          <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator />
          </View>
        ) : (
          <ScrollView style={{ flex: 0.8 }}>
            <Image style={styles.img} source={{ uri: data.image }} />
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.price}>${data.price}</Text>
              <Text style={styles.desc}>Description: </Text>
              <Text style={styles.desc}>{data.description}</Text>
            </View>
          </ScrollView>
        )}
      </View>
      <View style={{ flex: 0.1, justifyContent: 'flex-end', backgroundColor: '#edebeb', }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.btnView}>
            <TouchableOpacity style={styles.button2} onPress={() => addProduct()}>
              <Text style={styles.btnText2}>Add to cart</Text>
            </TouchableOpacity>
            {/* <Button title='add to cart' onPress={()=>fetchProduct()}/> */}
          </View>
          <View style={styles.btnView}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("OrderTraking", {
              productName: data.title,
              productPrice: data.price,
              productImage: data.image
            })}>
              <Text style={styles.btnText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    // </ScrollView>
  );
};

export default ProductDetail;
