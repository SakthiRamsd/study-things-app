import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet , TouchableOpacity} from 'react-native'
import Header from '../Component/Header';
import GlobalApi from './../Shared/GlobalApi'
import CategoryList from '../Component/CategoryList';
import CourseList from '../Component/CourseList';
import { ScrollView } from 'react-native';
import CourseListVertical from '../Component/CourseListVertical';
import { TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



function Home() {
  const navigation = useNavigation();

  const [categories, setCategories] = useState();
  const [courseList, setCourseList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getCategory();
    getCourseList();
  }, []);

  const navigateToSearchResults = () => {
    navigation.navigate('search', { searchQuery });
  };

  
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


  return (

    <ScrollView style={styles.home}>
       <View style={{backgroundColor:'#66c2ff',paddingBottom:25,borderRadius:15,marginBottom:10,padding:8}}>
      <Header />
        

      <View style={styles.inputContainer}>
        <FontAwesome name="search" size={24} color="#008ae6" />
        <TextInput style={{ fontWeight: 'normal', color: 'black', marginLeft: 10, flex: 1 }}
            placeholder='Search Here' value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)} />
          {searchQuery !== '' && (
            <TouchableOpacity onPress={navigateToSearchResults}>
              <Text style={{ backgroundColor: '#008ae6', padding: 6, borderRadius: 8, color: '#ffffff', marginRight: -10 }}>Search</Text>
            </TouchableOpacity>
          )}
      </View>
      </View>

      {/* Category List */}
      <CategoryList categories={categories} />


      {/* Course List */}
      <View style={{ color: 'black', borderRadius: 8, marginTop: 16, padding: 9, margin: 4 }}>
        <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold', }}>Latest Cousre</Text>
      </View>

      <CourseList courseList={courseList} />

      {/*HTML Course List */}
      {/* <View style={{ color: 'black', borderRadius: 8, marginTop: 10, padding: 10, margin: 4 }}>
        <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold', }}>HTML Course</Text>
      </View>
      <CourseList courseList={getFilterCourseList('HTML')} /> */}

      {/*All Course List */}
      <View style={{ color: 'black', borderRadius: 8, marginTop: 10, padding: 10, margin: 4 }}>
        <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold', }}>All Course</Text>
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
    flex:1,
    marginTop:40
  },
  inputContainer: {
    position:'relative',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    padding: 12,
    marginTop: 15,
    margin: 7,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    borderRadius:10,
    elevation:8,
    borderColor:'#008ae6',
    borderWidth:0.5,
    zIndex: 999,
    alignItems:'center'
  },
  line: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 3,
    elevation: 5
  },
})

export default Home