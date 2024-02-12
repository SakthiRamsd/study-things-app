import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function EntrollSection({userEntrollment, onEntrollmentPress}) {
   
  // const [isEntrolled,setIsEntrolled] = useState(true)

    useEffect(()=>{
      // console.log("--",userEntrollment)
    }, [])

  return (
    // Entrollment Button on User Press Entroll and Contine to Course
    <View>
        {userEntrollment?.length>0 ? 
        <TouchableOpacity onPress={()=>console.log("Continue")} style={{padding:18,backgroundColor:'#ff4d4d',borderRadius:8,marginTop:10}}><Text style={{fontSize:14,fontWeight:'bold',textAlign:'center'}}>Continue</Text>
        </TouchableOpacity>: 
        <TouchableOpacity onPress={()=>onEntrollmentPress()} style={{padding:19,backgroundColor:'#ff4d4d',borderRadius:8,marginTop:10}}>
         <Text style={{fontSize:14,fontWeight:'bold',textAlign:'center'}}>Entroll to Course</Text>
    </TouchableOpacity>}
</View>
   
  )
}