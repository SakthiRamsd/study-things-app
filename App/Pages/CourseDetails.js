import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import CourseStart from '../Component/CourseStart';
import EntrollSection from '../Component/EntrollSection';
import { ReloadContext, userDeatailsContext } from '../../App';
import GlobalApi from '../Shared/GlobalApi';
import QuizScreen from './QuizScreen';
import Course from './Course';


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
      console.log("checkUserEntrolltoCourse :", resp);
      setUserEntrollment(resp?.userEntrollCourses);
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
    <ScrollView style={{ flex:1,backgroundColor:'#e6e6e6',padding: 15, marginTop: 35 }}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 70 }}>
       

      </View>

      <CourseStart course={course} />

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