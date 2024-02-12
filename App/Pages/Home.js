import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { client } from '../Shared/KindConfig';
import { AuthContext } from '../../App';
import Header from '../Component/Header';
import GlobalApi from './../Shared/GlobalApi'
import CategoryList from '../Component/CategoryList';
import HeadingSection from '../Component/HeadingSection';
import CourseList from '../Component/CourseList';
import { ScrollView } from 'react-native';
import CourseListVertical from '../Component/CourseListVertical';


function Home() {

  const {auth,setAuth} = useContext(AuthContext)

  const [categories,setCategories] = useState();

  const [courseList,setCourseList] = useState([]);

  useEffect(()=>{
    getCategory();
    getCourseList();
  }, []);


  //Get Category List
  const getCategory =()=>{
    GlobalApi.getCategory().then(resp=>{
      setCategories(resp.categories);
    })
  };

  const getCourseList =() =>{
    GlobalApi.getCourseList().then(resp=>{
      setCourseList(resp?.courseLists)
      console.log(resp)
    })
  } 


  const handleLogout = async () => {
    const loggedOut = await client.logout();
    if (loggedOut) {
      setAuth(false)
        // User was logged out
    }
};

const getFilterCourseList=(tag)=>{
  const result =courseList.filter((item)=>item.tag.includes(tag));
  return result
}

  return (
   <ScrollView style={styles.home}>
      <Header/>

      {/* Category List */}
      <CategoryList categories={categories}/>

      {/* Course List */}
      <View style={{marginTop:12}}>
      <HeadingSection heading={'Latest Course'}/>
      <CourseList courseList={courseList}/>
      </View>

      {/*HTML Course List */}
      <HeadingSection heading={'HTML Course'}/>
      <CourseList courseList={getFilterCourseList('HTML')}/>

      {/*All Course List */}
      <HeadingSection heading={'All Course'}/>
      <CourseListVertical courseList={courseList}/>

   </ScrollView>
  )
}

const styles=StyleSheet.create({
  btn:{
    paddingTop:60,
    color:'red',
  },
  home:{
    backgroundColor:'whitesmoke'
  }
})

export default Home

