import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { userDeatailsContext } from '../../App';
import GlobalApi from '../Shared/GlobalApi';
import ProgressCourseItem from '../Component/ProgressCourseItem';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


function Course() {
  const Navigation = useNavigation();
  const { userDetail } = useContext(userDeatailsContext);
  const [enrollCoursesList, setEnrollCoursesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (userDetail) {
      getAllUserEnrollCourses();
    }
  }, [userDetail]);

  const getAllUserEnrollCourses = () => {
    setIsLoading(true);
    GlobalApi.getAllUserEntrollCourses(userDetail?.email).then(resp => {
      setEnrollCoursesList(resp.userEntrollCourses);
      setIsLoading(false);
      setRefreshing(false); // Ensure to stop refreshing when data is fetched
    }).catch(error => {
      console.error('Error fetching user enroll courses:', error);
      setIsLoading(false);
      setRefreshing(false); // Stop refreshing in case of error
    });
  };

  const handleRefresh = () => {
    setRefreshing(true);
    getAllUserEnrollCourses();
  };

  return (
    <ScrollView style={{ flex: 1 }}  refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
    }>
      <View style={{ margin: 21 }}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: -15 }}>
          <TouchableOpacity onPress={() => Navigation.goBack()}>
            <Ionicons name="arrow-undo" size={30} color="black" style={{ marginTop: 5, marginBottom: -10 }} />
          </TouchableOpacity>

          <View style={{ color: 'black', borderRadius: 8, marginTop: 28, padding: 9, margin: 3 }}>
            <Text style={{ fontSize: 21, color: 'black', fontWeight: 'bold' }}>MY COURSE</Text>
          </View>
        </View>

        <FlatList
          data={enrollCoursesList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <ProgressCourseItem
              completedChapter={item?.completedChapter?.length}
              course={item?.courseList}
            />
          )}
          keyExtractor={(item, index) => index.toString()} // Ensure each item has a unique key
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      </View>
    </ScrollView>
  );
}

export default Course;
