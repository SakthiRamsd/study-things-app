import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

export default function SourceSection({course,userEntrollment}) {

  // Open Url Link on Youtube Source
 const onSourceClick=(url)=>{
        Linking.openURL(url)
  }
  return (
    <View style={{alignItems:'center',backgroundColor:'#bfbfbf',borderRadius:8,marginTop:10}}>
      <TouchableOpacity onPress={()=>onSourceClick(course.youtubeUrl)} style={{padding:8,display:'flex',flexDirection:'row',alignItems:'center',gap:5}}>
      <Image source={require('./../Assets/Images/youtube (1).png')}
        style={{width:38,height:38}}
      />
      <Text style={{fontWeight:'bold'}}>Watch on YouTube</Text>
      </TouchableOpacity>
    </View>
  )
}