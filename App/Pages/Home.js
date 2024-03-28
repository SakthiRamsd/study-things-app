import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, RefreshControl } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import GlobalApi from './../Shared/GlobalApi';
import CategoryList from '../Component/CategoryList';
import CourseList from '../Component/CourseList';
import CourseListVertical from '../Component/CourseListVertical';
import Header from '../Component/Header';

function Home() {
  const navigation = useNavigation();

  const [categories, setCategories] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getCategory();
    getCourseList();
  }, []);

  const navigateToSearchResults = () => {
    navigation.navigate('search', { searchQuery });
  };

  const getCategory = () => {
    GlobalApi.getCategory().then(resp => {
      setCategories(resp.categories || []);
    });
  };

  const getCourseList = () => {
    GlobalApi.getCourseList().then(resp => {
      setCourseList(resp.courseLists || []);
    });
  };

  const handleRefresh = () => {
    setRefreshing(true);
    getCategory();
    getCourseList();
    setRefreshing(false);
  };

  return (
    <ScrollView
      style={styles.home}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
    >
      <View style={{ backgroundColor: '#66c2ff', paddingBottom: 25, borderRadius: 20, marginBottom: 10, padding: 8 ,margin:5}}>
        <Header />
        <View style={styles.inputContainer}>
          <FontAwesome name="search" size={24} color="#008ae6" />
          <TextInput
            style={{ fontWeight: 'normal', color: 'black', marginLeft: 10, flex: 1 }}
            placeholder='Search Here'
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          {searchQuery !== '' && (
            <TouchableOpacity onPress={navigateToSearchResults}>
              <Text style={{ backgroundColor: '#008ae6', padding: 6, borderRadius: 8, color: '#ffffff', marginRight: -10 }}>Search</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <CategoryList categories={categories} />

      <View style={{ color: 'black', borderRadius: 8, marginTop: 16, padding: 9, margin: 4 }}>
        <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold', }}>Latest Course</Text>
      </View>
      <CourseList courseList={courseList} />

      <View style={{ color: 'black', borderRadius: 8, marginTop: 10, padding: 10, margin: 4 }}>
        <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold', }}>All Course</Text>
      </View>
      <CourseListVertical courseList={courseList} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    marginTop: 40
  },
  inputContainer: {
    position: 'relative',
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
    borderRadius: 20,
    elevation: 8,
    borderColor: '#008ae6',
    borderWidth: 0.5,
    zIndex: 999,
    alignItems: 'center'
  },
});

export default Home;
