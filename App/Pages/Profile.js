import React, { useContext } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, Linking } from 'react-native'
import { userDeatailsContext } from '../../App'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { client } from '../Shared/KindConfig';
import { AuthContext } from '../../App';

function Profile() {

  const { userDetail, setUserDetail } = useContext(userDeatailsContext)
  const Navigation = useNavigation();
  const { auth, setAuth } = useContext(AuthContext)

  const menu = [
    {
      id: 1,
      name: 'Explore',
      path: 'home',
      icon: 'search'
    },
    {
      id: 2,
      name: 'My Course',
      path: 'Course',
      icon: 'book'
    },
    {
      id: 3,
      name: 'Favorite',
      path: 'favorite',
      icon: 'heart'
    },
    {
      id: 4,
      name: 'Quiz',
      path: 'quiz',
      icon: 'bulb-outline'
    },
    {
      id: 5,
      name: 'Logout',
      icon: 'log-out'
    },
  ]


  const onMenuClick = async (item) => {

    if (item?.url) {
      Linking.openURL(item.url)
    }
    else if (item.path) {
      Navigation.navigate(item.path)
    }
    else if (item.name == 'Logout') {
      const loggedOut = await client.logout();
      if (loggedOut) {
        setAuth(false)
        Navigation.navigate('loginscreen')
        // User was logged out
      }
    };
  }

  return (
    <View style={{ padding: 30 }}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: -20 }}>
        <TouchableOpacity onPress={() => Navigation.goBack()}>
          <Ionicons name="arrow-undo" size={30} color="black" style={{ marginTop: 5, marginBottom: -10 }} />
        </TouchableOpacity>

        <View style={{ color: 'black', borderRadius: 8, marginTop: 28, padding: 9, margin: 3 }}>
          <Text style={{ fontSize: 21, color: 'black', fontWeight: 'bold', }}>PROFILE</Text>
        </View>
      </View>


      {userDetail && <View style={{ alignItems: 'center', margin: 30, gap: 3 }}>
        <Image source={{ uri: userDetail?.picture }}
          style={{ width: 100, height: 100, borderRadius: 99 }}
        ></Image>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{userDetail?.given_name}</Text>
        <Text style={{ fontSize: 15 }}>{userDetail?.email}</Text>
      </View>
      }

      <View>
        <FlatList
          data={menu}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => onMenuClick(item)}
              style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', marginBottom: 20, backgroundColor: '#4da6ff', padding: 10, elevation: 5, borderRadius: 30 }}
            >
              <View style={{ backgroundColor: 'white', borderRadius: 99, padding: 8 }}>
                <Ionicons name={item.icon} size={18} color="black" />
              </View>
              <Text style={{ fontWeight: '700', fontSize: 16, color: '#ffffff' }}>{item?.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

    </View>
  )
}

export default Profile