import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import GlobalApi from './../Shared/GlobalApi';
import CourseItemVertical from '../Component/CourseItemVertical';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

function SearchResult({ route }) {
  const { searchQuery } = route.params;
  const [searchResults, setSearchResults] = useState([]);
  const navigation=useNavigation()

  useEffect(() => {
    // Fetch and filter course list based on search query
    GlobalApi.getCourseList()
      .then(resp => {
        const filteredResults = resp.courseLists.filter(course => course.name.toLowerCase().includes(searchQuery.toLowerCase()));
        setSearchResults(filteredResults);
      })
      .catch(error => {
        console.error('Error fetching course list:', error);
      });
  }, [searchQuery]);

  return (
    <View style={{display:'flex',marginTop:25}}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',marginLeft:10}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-undo" size={30} color="black" style={{marginTop:5,marginBottom:-10}} />
        </TouchableOpacity>
    
        <View style={{ color: 'black', borderRadius: 8, marginTop: 30, padding: 9, margin: 3 }}>
          <Text style={{ fontSize: 21, color: 'black', fontWeight: 'bold', }}>Search Results for : {searchQuery}</Text>
        </View>
      </View>
      <FlatList
        data={searchResults}
        renderItem={({ item }) => <CourseItemVertical course={item} />}
        keyExtractor={item => item.id.toString()}
        style={{marginBottom:50}}
      />
    </View>
  );
}

export default SearchResult;
