import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  carouselScroll: {
    backgroundColor: '#edebeb',
    padding: 0,
    margin: 0,
    flex: 0.4,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  paginationText: {
    color: '#888',
  },
  paginationActiveText: {
    color: 'white',
  },
});

export default styles;
