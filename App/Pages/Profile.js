import React, { useContext } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, Linking } from 'react-native'
import { userDeatailsContext } from '../../App'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { client } from '../Shared/KindConfig';
import { AuthContext } from '../../App';

function Profile() {

  const {userDetail,setUserDetail} = useContext(userDeatailsContext)
  const Navigation = useNavigation();
  const { auth, setAuth } = useContext(AuthContext)

  const menu=[
    {
      id:1,
      name:'Explore',
      path:'Home',
      icon:'search'
    },
    {
      id:2,
      name:'My Course',
      path:'Course',
      icon:'book'
    },
    {
      id:3,
      name:'Logout',
      icon:'log-out'
    },
  ]


  const onMenuClick=async(item)=>{

    if(item?.url){
      Linking.openURL(item.url)
    }
    else if(item.path){
        Navigation.navigate(item.path)
    }
    else if(item.name == 'Logout'){
        const loggedOut = await client.logout();
        if (loggedOut) {
          setAuth(false)
          Navigation.navigate('Login')
          // User was logged out
        }
      };
  }



  return (
    <View style={{padding:30,marginTop:15,marginLeft:-8,}}>
    <Text style={{fontWeight:'bold',fontSize:20,backgroundColor:'#cccccc',padding:10,textAlign:'center',borderRadius:15}}>Profile</Text>

    
    {userDetail&& <View style={{alignItems:'center',margin:30,gap:3}}>
        <Image source={{uri:userDetail?.picture}}
          style={{width:100,height:100,borderRadius:99}}
        ></Image>   
    <Text style={{fontSize:25,fontWeight:'bold'}}>{userDetail?.given_name}</Text>
    <Text style={{fontSize:15}}>{userDetail?.email}</Text>
      </View>
    }

    <View>
        <FlatList 
          data={menu}
          renderItem={({item,index})=>(
              <TouchableOpacity onPress={()=>onMenuClick(item)}
                  style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center',marginBottom:20,}}
              >
                  <Ionicons name={item.icon} size={25} color="gray"/>
                  <Text style={{fontWeight:'bold',fontSize:20,}}>{item.name}</Text>
              </TouchableOpacity>
          )}  

        />
    </View>

   </View>
  )
}

export default Profile