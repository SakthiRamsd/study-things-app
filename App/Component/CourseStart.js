import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Video, ResizeMode } from 'expo-av';
import { FontAwesome5 } from '@expo/vector-icons';
import HeadingSection from './../Component/HeadingSection'

export default function CourseStart({course}) {
  return course&&(
    <View style={{padding:5,backgroundColor:'#e6e6e6',borderRadius:5,marginTop:10}}>
      <Video
        shouldPlay={true}
        style={styles.video}
        source={{
          uri: course?.chapter[0]?.video?.url,
        }}
        useNativeControls ={true}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
      />


      <View style={{display:'flex',gap:8}}>
        <Text style={{color:'black',fontSize:15,fontWeight:'bold'}}>{course.name}</Text>
       
        <Text style={{color:'red',fontSize:13,fontWeight:'bold'}}>{course.author}</Text>

        <View style={{display:"flex",flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <FontAwesome5 name="book-open" size={24} color="black"/>
        <Text style={{fontWeight:'bold'}}>{course.course?'Course':'Project'}</Text>
        </View>

        <HeadingSection heading={'Description'}/>
        <Text numberOfLines={4} style={{fontSize:13,marginTop:-12,fontWeight:'500'}}>{course?.description}</Text>

       </View> 
    </View>
  )
}


const styles = StyleSheet.create({
    video:{

        width:'100%',
        height:240

        }

})