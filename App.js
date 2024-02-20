import { View } from 'react-native';
import Login from './App/Pages/Login';
import { createContext, useEffect, useState } from 'react';
import { client } from './App/Shared/KindConfig';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import HomeNavigation from './App/Navigation/HomeNavigation';


export const AuthContext = createContext();
export const userDeatailsContext = createContext();
export const ReloadContext = createContext();

export default function App() {

  const [userDetail, setUserDetail] = useState();

  const [reload, setReload] = useState();

  const [fontsLoaded, fontError] = useFonts({
    'PTSerif-Bold': require('./App/Assets/fonts/PTSerif-Bold.ttf'),
    'PTSerif-Italic': require('./App/Assets/fonts/PTSerif-Italic.ttf'),
    'PTSerif-Regular': require('./App/Assets/fonts/PTSerif-Regular.ttf'),
    'PTSerif-BoldItalic': require('./App/Assets/fonts/PTSerif-BoldItalic.ttf'),
  });

  const [auth, setAuth] = useState(false)

  useEffect(() => {
    checkAuthenticate();
  }, [auth]);

  const checkAuthenticate = async () => {
    if (await client.isAuthenticated) {
      const userProfile = await client.getUserDetails();
      setUserDetail(userProfile)
      setAuth(true)
    } else {
      setAuth(false)
    }
  };


  return (
    <View style={{ flex: 1, backgroundColor: 'white', }}>
      
      {/* <Login/> */}
      <AuthContext.Provider value={{ auth, setAuth }}>
        <userDeatailsContext.Provider value={{ userDetail, setUserDetail }}>
          <ReloadContext.Provider value={{ reload, setReload }}>
            <NavigationContainer>
              {auth ? <HomeNavigation /> : <Login />}
            </NavigationContainer>
          </ReloadContext.Provider>
        </userDeatailsContext.Provider>
      </AuthContext.Provider>
    </View>
  )
}
