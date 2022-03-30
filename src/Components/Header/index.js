import React from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
const Header = ({navigation}) => {
  const OpenMenu = () => {
    navigation.openDrawer();
  };

  const GoToCart = () => {
    navigation.navigate('Cart');
  };
  return (
    <View style={styles.header}>
      <Icon name="menu" size={28} onPress={OpenMenu} style={styles.menuIcon} />
      <View style={styles.headerTitle}>
        <Image
          source={require('../../Assets/logo3.jpg')}
          style={styles.headerImage}
        />
        <Icon name="search" size={28} style={styles.searchIcon} />
        <Icon
          name="shopping-cart"
          size={28}
          onPress={GoToCart}
          style={styles.cartIcon}
        />
      </View>
    </View>
  );
};

export default Header;
