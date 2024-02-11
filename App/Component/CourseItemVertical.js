import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

export default function CourseItemVertical({course}) {
  return (
    <View style={{backgroundColor:'white',width:340,borderRadius:5,margin:15,gap:8, display:'flex',flexDirection:'row',alignItems:'center'}}>
        <Image source={{uri:course?.banner?.url}}
            style={{width:150,height:80,borderRadius:5}}
        />

      <View style={{justifyContent:'flex-end',flexShrink:2}}>
        <Text style={{color:'black',fontSize:13,fontWeight:'bold'}}>{course.name}</Text>
       
        <Text style={{color:'red',fontSize:13,fontWeight:'bold'}}>{course.author}</Text>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <FontAwesome5 name="book-open" size={24} color="black"/>
        <Text style={{fontWeight:'bold'}}>{course.course?'Course':'Project'}</Text>
        </View>
      </View> 


      
       
       
    </View>
  )
}