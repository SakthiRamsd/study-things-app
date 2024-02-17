import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { client } from './../Shared/KindConfig';
import { AuthContext } from '../../App';

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
    <View >
      <Image source={require('./../Assets/Images/log_img.png')}
        style={styles.img}
      />
      <View style={styles.container}>
        <Text style={styles.welcome}>WELCOME TO</Text>
        <Text style={styles.title}>STUDY THINGS</Text>
        <Text style={styles.title2}>Login and SignUp</Text>
      </View>

      <TouchableOpacity onPress={handleSignIn} style={styles.button}>
        <FontAwesome name="google" size={24} color="white" style={{ marginRight: 10 }} />
        <Text style={styles.text3}>Login</Text>
      </TouchableOpacity>


      <View style={styles.new}>
        <Text>Create a New Account? </Text>
        <TouchableOpacity onPress={handleSignUp} >
          <Text style={styles.new2}>New User</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -25,
  },
  welcome: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 15,
    marginTop: 100,
    fontWeight: '500',
    textAlign: 'center',
    color: 'red',
  },
  img: {
    width: 370,
    height: 300,
  },
  button: {
    padding: 13,
    margin: 30,
    backgroundColor:'blue',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12
  },
  text3: {
    color: 'white',
  },
  new: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  new2: {
    color: 'red',
  }

});

export default Login