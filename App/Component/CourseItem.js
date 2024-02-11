import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function CourseItem({course}) {

  const navigation=useNavigation();
  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate('course-details',{course:course})}
     style={{backgroundColor:'white',width:240,borderRadius:3,margin:15,gap:8}}>
        <Image source={{uri:course?.banner?.url}}
            style={{width:240,height:130,borderRadius:10}}
        />

      <View>
        <Text style={{color:'black',fontSize:13,fontWeight:'bold'}}>{course.name}</Text>
       
        <Text style={{color:'red',fontSize:13,fontWeight:'bold'}}>{course.author}</Text>
      </View> 


      <View style={{display:"flex",flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <FontAwesome5 name="book-open" size={24} color="black"/>
        <Text style={{fontWeight:'bold'}}>{course.course?'Course':'Project'}</Text>
       </View>
    </TouchableOpacity>
  )
}

export default CourseItem