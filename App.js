import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Pages/Login';
import { createContext, useEffect, useState } from 'react';
import { client } from './App/Shared/KindConfig';
import Home from './App/Pages/Home';
import TabNavigation from './App/Navigation/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import HomeNavigation from './App/Navigation/HomeNavigation';


export const AuthContext=createContext();
export const userDeatailsContext=createContext();

export default function App() {

  const [userDetail,setUserDetail]=useState();

  const [fontsLoaded, fontError] = useFonts({
    'PTSerif-Bold': require('./App/Assets/fonts/PTSerif-Bold.ttf'),
    'PTSerif-Italic': require('./App/Assets/fonts/PTSerif-Italic.ttf'),
    'PTSerif-Regular': require('./App/Assets/fonts/PTSerif-Regular.ttf'),
    'PTSerif-BoldItalic': require('./App/Assets/fonts/PTSerif-BoldItalic.ttf'),
  });

  const [auth, setAuth]=useState(false)

  useEffect(() => {
    checkAuthenticate();
}, [auth]);

  const checkAuthenticate = async () => {
    // Using `isAuthenticated` to check if the user is authenticated or not
    if (await client.isAuthenticated) {
        const userProfile = await client.getUserDetails();
        setUserDetail(userProfile)
        setAuth(true)
        // console.log(userProfile);
        // console.log('Authenticated')
    } else {
        setAuth(false)
        // Need to implement, e.g: redirect user to sign in, etc..
    }
};


  return (
    <View style={styles.container}>
        {/* <Login/> */}
        <AuthContext.Provider value={{auth, setAuth}}>
          <userDeatailsContext.Provider value={{userDetail,setUserDetail}}>
            <NavigationContainer>
              {auth ?<HomeNavigation/> : <Login/>}
            </NavigationContainer>
        </userDeatailsContext.Provider>
        </AuthContext.Provider>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',

  }
})
