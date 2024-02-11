import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function EntrollSection() {
    const [isEntrolled,setIsEntrolled] = useState(true)
  return (
    <View>
        {isEntrolled? <TouchableOpacity style={{padding:15,backgroundColor:'#ff4d4d',borderRadius:8,marginTop:10, display:'flex',flexDirection:'row',alignItems:'center',gap:20}}>
        <MaterialIcons name="touch-app" size={25} color="black" />
         <Text style={{fontSize:14,fontWeight:'bold',justifyContent:'center'}}>Continue</Text>
        </TouchableOpacity>: <TouchableOpacity style={{padding:15,backgroundColor:'#ff4d4d',borderRadius:8,     marginTop:10, display:'flex',flexDirection:'row',alignItems:'center',gap:20}}>
         <MaterialIcons name="touch-app" size={25} color="black" />
         <Text style={{fontSize:14,fontWeight:'bold',justifyContent:'center'}}>Entroll to Course</Text>
    </TouchableOpacity>}
</View>
   
  )
}