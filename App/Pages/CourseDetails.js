import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import CourseStart from '../Component/CourseStart';
import EntrollSection from '../Component/EntrollSection';
import { ReloadContext, userDeatailsContext } from '../../App';
import GlobalApi from '../Shared/GlobalApi';


export default function CourseDetails() {

  const { params } = useRoute();
  const [course, setCourse] = useState();
  const { userDetail, setUserDetail } = useContext(userDeatailsContext);
  const [userEntrollment, setUserEntrollment] = useState();
  const { reload, setReload } = useContext(ReloadContext);
  const navigation = useNavigation();

  useEffect(() => {
    setCourse(params?.course)
    params && userDetail && checkIsUserEntrollToCourse(params?.course);
  }, [params && userDetail])

  useEffect(() => {
    reload && checkIsUserEntrollToCourse();
  }, [reload])
 
  // Check the User Enroll Course
  const checkIsUserEntrollToCourse = (course) => {
    course && GlobalApi.checkUserCourseEntrollment(course?.slug, userDetail?.email).then(resp => {
      // console.log("checkUserEntrolltoCourse :", resp);
      setUserEntrollment(resp.userEntrollCourses);
    })
  }

  // Enroll Course are Save the Database
  const onEntrollmentPress = () => {
    GlobalApi.saveUserCourseEnroll(course?.slug, userDetail?.email).then(resp => {
      console.log(resp);
      if (resp) {
        Alert.alert('You are Successfully Entroll this Course!');
        checkIsUserEntrollToCourse(course);
      } 
    })
  }

  return (
    <ScrollView style={{ padding: 10, marginTop: 30 }}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 70 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle-sharp" size={45} color="black" />
        </TouchableOpacity>

        <Text style={{ fontWeight:'bold', fontSize: 20, color: 'black', marginLeft:-10 }}>Course Details</Text>
      </View>

      <CourseStart course={course}/>

      {/* Entrollment Section */}
      <EntrollSection 
        course={course}
        userEntrollment={userEntrollment}
        onEntrollmentPress={() => onEntrollmentPress()}
        onContinuePress={() => navigation.navigate('watch-lesson', {
          course: course,
          userEntrollment: userEntrollment
        })} />

    </ScrollView>
  )
}