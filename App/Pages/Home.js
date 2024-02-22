import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../Component/Header';
import GlobalApi from './../Shared/GlobalApi'
import CategoryList from '../Component/CategoryList';
import CourseList from '../Component/CourseList';
import { ScrollView } from 'react-native';
import CourseListVertical from '../Component/CourseListVertical';
import { TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


function Home() {

  const [categories, setCategories] = useState();
  const [courseList, setCourseList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    getCategory();
    getCourseList();
  }, []);

  //Get Category List Function
  const getCategory = () => {
    GlobalApi.getCategory().then(resp => {
      setCategories(resp.categories);
    })
  };

  // Get Course List Function
  const getCourseList = () => {
    GlobalApi.getCourseList().then(resp => {
      console.log(resp)
      setCourseList(resp.courseLists)
    })
  }

  // Get Filter Course List Function //
  // const getFilterCourseList = (tag) => {
  //   if (courseList) {
  //     return courseList.filter((item) => item.tag.includes(tag));
  //   }
  //   return [];
  // }

  const getFilteredCourseList = () => {
    return courseList.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };


  return (

    <ScrollView style={styles.home}>

      <Header />

      <View style={styles.input}>
        <FontAwesome name="search" size={24} color="black" />
        <TextInput style={{ fontWeight: 'normal', color: 'black' }}
          placeholder='Search Here' value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)} />
      </View>

      {/* Category List */}
      <CategoryList categories={categories} />


      {/* Course List */}
      <View style={{ color: 'black', borderRadius: 8, marginTop: 16, padding: 9, margin: 4 }}>
        <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold', }}>Latest Cousre</Text>
        <View style={styles.line} />
      </View>

      <CourseList courseList={getFilteredCourseList()} />

      {/*HTML Course List */}
      {/* <View style={{ color: 'black', borderRadius: 8, marginTop: 10, padding: 10, margin: 4 }}>
        <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold', }}>HTML Course</Text>
      </View>
      <CourseList courseList={getFilterCourseList('HTML')} /> */}

      {/*All Course List */}
      <View style={{ color: 'black', borderRadius: 8, marginTop: 10, padding: 10, margin: 4 }}>
        <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold', }}>All Course</Text>
        <View style={styles.line} />
      </View>
      <CourseListVertical courseList={getFilteredCourseList()} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  btn: {
    paddingTop: 60,
    color: 'red',
  },
  home: {
    backgroundColor: '#f2f2f2'
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    marginTop: 15,
    margin: 7,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
    borderWidth: 2,
    borderColor: '#a6a6a6',
    borderLeftWidth: 13,
    borderRightWidth: 13,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  line: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 3,
    elevation: 5
  },
})

export default Home

