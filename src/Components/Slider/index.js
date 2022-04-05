import React, {useState} from 'react';
import {View, Text, ScrollView, Image, Dimensions} from 'react-native';
import styles from './style';

const width = Dimensions.get('window').width;

function Slider(props) {
  const [active, setActive] = useState(0);

  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
console.log(props.images,'props.images')
  return (
    <View style={{flex:1}}>
      {/* carousel */}

      <View>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={change}
          showsHorizontalScrollIndicator={false}
          style={styles.carouselScroll}>
          {props.images.map((image, index) => (
            <Image
              key={index}
              source={image}
              style={{width: width, height: 200, resizeMode: 'stretch'}}
            />
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {props.images.map((i, k) => (
            <Text
              key={k}
              style={
                k == active
                  ? styles.paginationActiveText
                  : styles.paginationText
              }>
              ⬤
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}

export default Slider;
