import React, { useContext, useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { userDeatailsContext } from '../../App'
import GlobalApi from '../Shared/GlobalApi';
import ProgressCourseItem from '../Component/ProgressCourseItem';

function Course() {

  const {userDetail, setUserDeatail} = useContext(userDeatailsContext);
  const [entrollCoursesList,setEntrollCoursesList] = useState();

  const [isLoading,setIsLoading] = useState(false)

useEffect(()=>{
    userDetail&&getAllUserEntrollCourses();
}, [userDetail])
 
const getAllUserEntrollCourses=()=>{
    GlobalApi.getAllUserEntrollCourses(userDetail.email).then(resp=>{
      // console.log(resp);
     setEntrollCoursesList(resp.userEntrollCourses);
     setIsLoading(false)
    })
}

  return (
    <View style={{margin:28}}>
      <Text style={{fontSize:19, fontWeight:'bold',marginTop:20,backgroundColor:'#cccccc',padding:10,textAlign:'center',borderRadius:15,marginBottom:1}}>Entrolled Courses</Text> 

      <FlatList 
      data={entrollCoursesList}
      refreshing={isLoading}
      onRefresh={()=>getAllUserEntrollCourses()}
     showsVerticalScrollIndicator={false}
      renderItem={({item, index})=>( 
         <ProgressCourseItem 
         completedChapter = {item?.completedChapter?.length}
         course={item?.courseList} />
  )}  
      />
   
    </View>

  )
}

export default Course