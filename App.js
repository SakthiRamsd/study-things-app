import { View } from 'react-native';
import { createContext, useEffect, useState } from 'react';
import { client } from './App/Shared/KindConfig';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './App/Pages/WelcomeScreen';
import AppNavigation from './App/Navigation/AppNavigation';



export const AuthContext = createContext();
export const userDeatailsContext = createContext();
export const ReloadContext = createContext();

export default function App() {

  const [userDetail, setUserDetail] = useState();
  const [reload, setReload] = useState();
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

      <AuthContext.Provider value={{ auth, setAuth }}>
        <userDeatailsContext.Provider value={{ userDetail, setUserDetail }}>
          <ReloadContext.Provider value={{ reload, setReload }}>
            <NavigationContainer>
              {auth ? <AppNavigation /> : <WelcomeScreen />}
            </NavigationContainer>
          </ReloadContext.Provider>
        </userDeatailsContext.Provider>
      </AuthContext.Provider>
      
    </View>
  )
}
