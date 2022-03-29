import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import styles from './style';

const ProductListWithApi = ({navigation}) => {
  const number = 2;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

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

  const filterResult = catItem => {
    const result = data.filter(currentData => {
      return currentData.category === catItem;
    });
    console.log(result);
    setData(result);
  };

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Sort</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              getProducts();
              setModalOpen(true);
            }}>
            <Text style={styles.btnText}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={{backgroundColor: '#edebeb'}}>
          {isLoading ? (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 200,
              }}>
              <ActivityIndicator />
            </View>
          ) : (
            <View style={{marginBottom: 100}}>
              <Modal visible={modalOpen} animationType="slide">
                <View
                  style={{
                    backgroundColor: '#edd898',
                    width: '100%',
                    height: '100%',
                  }}>
                  <Text style={{margin: 10}}>Category</Text>
                  <TouchableOpacity
                    style={styles.filterButton}
                    onPress={() => {
                      filterResult("men's clothing");
                      setModalOpen(false);
                    }}>
                    <Text style={styles.filterButtonText}>Men's clothing</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.filterButton}
                    onPress={() => {
                      filterResult("women's clothing");
                      setModalOpen(false);
                    }}>
                    <Text style={styles.filterButtonText}>
                      Women's clothing
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.filterButton}
                    onPress={() => {
                      filterResult('jewelery');
                      setModalOpen(false);
                    }}>
                    <Text style={styles.filterButtonText}>Jewelery</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.filterButton}
                    onPress={() => {
                      filterResult('electronics');
                      setModalOpen(false);
                    }}>
                    <Text style={styles.filterButtonText}>Electronics</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.filterButton}
                    onPress={() => {
                      getProducts();
                      setModalOpen(false);
                    }}>
                    <Text style={styles.filterButtonText}>All</Text>
                  </TouchableOpacity>
                </View>
              </Modal>

              <FlatList
                data={data}
                keyExtractor={({id}) => id}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={styles.card}
                    onPress={() => {
                      const proId = item.id;
                      navigation.navigate('ProductDetail', {proId});
                    }}>
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
        </View>
      </View>
    </View>
  );
};

export default ProductListWithApi;
