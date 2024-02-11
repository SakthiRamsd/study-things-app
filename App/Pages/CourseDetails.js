import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import CourseStart from '../Component/CourseStart';
import SourceSection from '../Component/SourceSection';
import EntrollSection from '../Component/EntrollSection';

export default function CourseDetails() {

  const {params} = useRoute();
  const [course,setCourse] = useState();

  const navigation=useNavigation();
  useEffect(()=>{
      setCourse(params.course)
  }, [params])
  return (
    <View style={{padding:10,marginTop:30}}>
      <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:70}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name="chevron-back-circle-sharp" size={45} color="black" />
        </TouchableOpacity>
      <Text style={{fontFamily:'PTSerif-BoldItalic',fontSize:18,color:'#0073e6'}}>Course Details</Text>
      </View>

      <CourseStart course={course}/>

      {/* SourceSection on Youtube Link */}
      <SourceSection/>

      <EntrollSection/>
    </View>
  )
}