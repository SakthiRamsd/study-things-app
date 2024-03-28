import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { client } from './../Shared/KindConfig';
import { AuthContext } from '../../App';
import Swiper from 'react-native-swiper';

function Login() {
  const { auth, setAuth } = useContext(AuthContext);

  const handleSignUp = async () => {
    const token = await client.register();
    if (token) {
      console.log("Authenticated Successfully")
      setAuth(true)
    }
  };

  const handleSignIn = async () => {
    const token = await client.login();
    if (token) {
      console.log("Authenticated Successfully")
      setAuth(true)
    }
  };

  return (
    <View style={styles.container}>
      <Swiper style={styles.swiper} loop={false} autoplay={true} autoplayTimeout={4}>
        <Image source={require('../Assets/Images/login1.jpg')} style={styles.img} />
        <Image source={require('../Assets/Images/login2.jpg')} style={styles.img} />
        <Image source={require('../Assets/Images/login3.jpg')} style={styles.img} />
      </Swiper>

      <TouchableOpacity onPress={handleSignIn} style={styles.button}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignUp} style={styles.button2}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop:40,
    
  },
  img: {
    width: '100%',
    height: 500,
    position: 'absolute',
    borderRadius:20

  },
  swiper: {
    height: 900,
  },
  button: {
    padding: 20,
    margin: 10,
    backgroundColor: '#66c2ff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    width:'90%',
  },
  button2: {
    padding: 20,
    margin: 10,
    backgroundColor: '#008ae6',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    width:'90%',
    marginBottom:50
  },
  text: {
    color: 'white',
    fontWeight:'600'
  }
});

export default Login;
