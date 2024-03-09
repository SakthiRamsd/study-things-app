import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();

const WelcomeScreen = ({ navigation }) => {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('loginscreen');
    }, 2000); // Change the delay time as needed (in milliseconds)

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor:'#66c2ff', width:300,height:300,borderRadius:150,marginTop:-120,marginLeft:-35}}></View>
      <View style={{backgroundColor:'#008ae6', width:300,height:300,borderRadius:150,marginLeft:-160,marginTop:-170}}></View>
      <Animated.View style={{ opacity: fadeAnim }}>
      <Text style={{fontSize:35,textAlign:'center',marginTop:70,fontWeight:'500'}}>STUDY THINGS</Text>
      <Text style={{fontSize:15,textAlign:'center',fontWeight:'300'}}>STREAMLINED LEARNING</Text>

      <Text style={{fontSize:10,color:'#008ae6',marginTop:290,textAlign:'center'}}>GATEWAY TO OUR KNOWLEDGE.....</Text>
      </Animated.View>
  </View>

  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name='loginscreen' component={Login}/>
    </Stack.Navigator>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginVertical: 20,
  },
});

export default AppNavigator;
 