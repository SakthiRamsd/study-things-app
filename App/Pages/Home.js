import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { client } from '../Shared/KindConfig';
import { AuthContext } from '../../App';
import Header from '../Component/Header';
import GlobalApi from './../Shared/GlobalApi'
import CategoryList from '../Component/CategoryList';
import CourseList from '../Component/CourseList';
import { ScrollView } from 'react-native';
import CourseListVertical from '../Component/CourseListVertical';


function Home() {

  const { auth, setAuth } = useContext(AuthContext)
  const [categories, setCategories] = useState();
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    getCategory();
    getCourseList();
  }, []);

  //Get Category List
  const getCategory = () => {
    GlobalApi.getCategory().then(resp => {
      setCategories(resp.categories);
    })
  };

  const getCourseList = () => {
    GlobalApi.getCourseList().then(resp => {
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

  const getFilterCourseList = (tag) => {
    const result = courseList.filter((item) => item.tag.includes(tag));
    return result
  }

  return (
    <ScrollView style={styles.home}>

      <Header />

      {/* Category List */}
      <CategoryList categories={categories} />

      {/* Course List */}
      <View style={{backgroundColor:'#999999', color:'white',borderRadius:8,marginTop:16,padding:9,margin:4}}>
      <Text style={{fontSize:22, color:'white',fontWeight:'bold',}}>Latest Cousre</Text>
      </View>
      <CourseList courseList={courseList} />

      {/*HTML Course List */}
      <View style={{backgroundColor:'#999999', color:'white',borderRadius:8,marginTop:10,padding:10,margin:4}}>
      <Text style={{fontSize:22, color:'white',fontWeight:'bold',}}>HTML Course</Text>
      </View>
      <CourseList courseList={getFilterCourseList('HTML')} />

      {/*All Course List */}
      <View style={{backgroundColor:'#999999', color:'white',borderRadius:8,marginTop:10,padding:10,margin:4}}>
      <Text style={{fontSize:22, color:'white',fontWeight:'bold',}}>All Course</Text>
      </View>
      
      <CourseListVertical courseList={courseList} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  btn: {
    paddingTop: 60,
    color: 'red',
  },
  home: {
    backgroundColor: '#d9d9d9'
  }
})

export default Home

