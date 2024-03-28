import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Video, ResizeMode } from 'expo-av';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function CourseStart({ course }) {

  const navigation = useNavigation();

  return course && (

    <View style={{ padding: 15, backgroundColor: '#ffffff', borderRadius: 15, marginTop: 10 }} >
      <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10,alignItems:'center',marginBottom:-10}}>
       <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',marginBottom:12,marginTop:10 }}>
       <Ionicons name="arrow-undo" size={30} color="black" style={{ position: 'absolute', left: 0 }} />
          </TouchableOpacity>
          </View>

      {course?.chapter[0] ?
        <Video
          shouldPlay={true}
          style={{ width: '100%', height: 240 }}
          source={{
            uri: course?.chapter[0]?.video?.url,
          }}
          useNativeControls={true}
          resizeMode={ResizeMode.CONTAIN}
          isLooping></Video>:
        <Image source={{ uri: course?.banner?.url }}
          style={{ width: 310, height: 180, borderRadius: 12, alignSelf: 'center', marginBottom: 5, marginTop: 25 }} />
      }
      

      <View style={{ display: 'flex', gap: 8 }}>
        <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>{course.name}</Text>
        <Text style={{ color: 'red', fontSize: 13, fontWeight: 'bold' }}>{course.author}</Text>

        <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <FontAwesome5 name="book-open" size={24} color="#008ae6" />
          <Text style={{ fontWeight: 'bold' , color:'#008ae6'}}>{course.course ? 'Course' : 'Project'}</Text>
        </View>

        <View style={{ color: 'black', borderRadius: 8, padding: 9 }}>
          <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold', marginBottom:3,marginLeft:-10 }}>Description</Text>
          
        </View>

        <Text style={{ fontSize: 13, marginTop: -12, fontWeight: '500' }}>{course?.description}</Text>
      </View>
    </View>
  )
}