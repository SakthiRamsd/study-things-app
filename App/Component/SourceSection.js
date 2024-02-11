import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SourceSection() {
  return (
    <View>
      <TouchableOpacity style={{padding:8,backgroundColor:'#bfbfbf',display:'flex',flexDirection:'row',alignItems:'center',gap:10,borderRadius:10,marginTop:10}}>
      <Image source={require('./../Assets/Images/youtube (1).png')}
        style={{width:40,height:40}}
      />
      <Text style={{fontWeight:'bold'}}>Watch on YouTube</Text>
      </TouchableOpacity>
    </View>
  )
}