import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    card: {
      backgroundColor: 'white',
      shadowOpacity: 0.2,
      shadowRadius: 4,
      shadowColor: 'black',
      shadowOffset: {
        height: 0,
        width: 0,
      },
      height: 'auto',
      width: '50%',
      elevation: 1,
      marginLeft: 0,
      borderWidth: 0.2,
      marginBottom: 0,
    },
    img: {
      resizeMode: 'contain',
      alignSelf: 'center',
      height: 200,
      backgroundColor: 'white',
      width: '95%',
      borderRadius: 2,
      borderColor: 'black',
      margin: 5,
    },
    infoContainer: {
      padding: 10,
      backgroundColor: 'white',
    },
    name: {
      fontSize: 18,
      color: 'black',
    },
    price: {
      fontSize: 14,
      color: 'black',
    },
    button: {
      width: '100%',
      height: 50,
      backgroundColor: '#edd898',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0.2,
    },
    btnView: {
      width: '50%',
      height: 50,
    },
    btnText: {
      fontSize: 18,
    },
  });

  export default styles;