import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  menuIcon: {
    position: 'absolute',
    left: 16,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  headerImage: {
    width: 130,
    height: 35,
    right: 50,
  },
  searchIcon: {
    left: 75,
  },
  cartIcon: {
    left: 80,
  },
});

export default styles;
