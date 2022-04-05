import {StyleSheet} from 'react-native';
import { Color } from '../../Utils/color';

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
      height: 400,
      backgroundColor: 'white',
      width: '95%',
      borderRadius: 2,
      borderColor: 'black',
      margin: 5,
    },
    infoContainer: {
      padding: 10,
      backgroundColor: 'white',
      marginBottom: 20,
    },
    title: {
      fontSize: 22,
      textAlign: 'center',
      color: 'black',
      marginBottom: 5,
    },
    price: {
      fontSize: 18,
      color: 'black',
      margin: 3,
      textAlign: 'center',
    },
    button: {
      width: '100%',
      height: 50,
      backgroundColor: Color.orange,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor:Color.white,
      borderWidth: 0.2,
    },
    button2: {
      width: '100%',
      height: 50,
      backgroundColor: Color.white,
      borderColor:Color.white,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0.2,
    },
    btnText2: {
      fontSize: 18,
    },
    btnView: {
      width: '50%',
      height: 50,
    },
    btnText: {
      fontSize: 18,
      color:Color.white
    },
    desc: {
      fontSize: 14,
      color: 'black',
      margin: 10,
    },
  });

  export default styles;