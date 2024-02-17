import React, { useContext, useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { userDeatailsContext } from '../../App'
import GlobalApi from '../Shared/GlobalApi';
import CourseItem from '../Component/CourseItem';

function Course() {

  const {userDetail, setUserDeatail} = useContext(userDeatailsContext);
  const [entrollCoursesList,setEntrollCoursesList] = useState();

useEffect(()=>{
    userDetail&&getAllUserEntrollCourses();
}, [userDetail])

const getAllUserEntrollCourses=()=>{
    GlobalApi.getAllUserEntrollCourses(userDetail.email).then(resp=>{
      console.log(resp);
     setEntrollCoursesList(resp.userEntrollCourses);
    })
}

  return (
    <View style={{padding:10,margin:45,marginLeft:13}}>
      <Text style={{fontSize:17, fontWeight:'bold'}}>Entrolled Courses</Text> 

      <FlatList 
      data={entrollCoursesList}
      renderItem={({item, index})=>( 
         <CourseItem course={item?.courseList} />
  )}  
      />
   
    </View>

  )
}

export default Course