import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import CourseStart from '../Component/CourseStart';
import SourceSection from '../Component/SourceSection';
import EntrollSection from '../Component/EntrollSection';
import LessonInfo from '../Component/LessonInfo';
import { userDeatailsContext } from '../../App';
import GlobalApi from '../Shared/GlobalApi';

export default function CourseDetails() {

  const {params} = useRoute();
  const [course,setCourse] = useState();

  const {userDetail,setUserDetail} = useContext(userDeatailsContext);

  const [userEntrollment,setUserEntrollment]=useState();

  const navigation=useNavigation();
  useEffect(()=>{
      setCourse(params.course)
      params&&userDetail&&checkIsUserEntrollToCourse();
  }, [params&&userDetail])

  const checkIsUserEntrollToCourse=()=>{

    // email slug
      GlobalApi.checkUserCourseEntrollment(params.course?.slug,userDetail?.email).then(resp=>{
            console.log("--",resp);
            setUserEntrollment(resp.userEntrollCourses);
      })
  }

  // Course Entrollment Function
  const onEntrollmentPress=()=>{

  }

  return (
    <ScrollView style={{padding:10,marginTop:30}}>
      <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:70}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name="chevron-back-circle-sharp" size={45} color="black" />
        </TouchableOpacity>

        <Text style={{fontFamily:'PTSerif-Bold',fontSize:18,color:'#0073e6'}}>Course Details</Text>
      </View>

      <CourseStart course={course}/>

      {/* SourceSection on Youtube Link */}
      <SourceSection  course={course} userEntrollment={userEntrollment}/>

      {/* Entrollment Section */}
      <EntrollSection userEntrollment={userEntrollment} onEntrollmentPress={()=>onEntrollmentPress()}/>

      {/* Lesson Section */}
      <LessonInfo course={course}/>

    </ScrollView>
  )
}