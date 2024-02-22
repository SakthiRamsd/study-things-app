import React, { useContext, useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { userDeatailsContext } from '../../App'
import GlobalApi from '../Shared/GlobalApi';
import ProgressCourseItem from '../Component/ProgressCourseItem';

function Course() {

  const { userDetail, setUserDeatail } = useContext(userDeatailsContext);
  const [entrollCoursesList, setEntrollCoursesList] = useState();

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    userDetail && getAllUserEntrollCourses();
  }, [userDetail])

  const getAllUserEntrollCourses = () => {
    GlobalApi.getAllUserEntrollCourses(userDetail?.email).then(resp => {
      setEntrollCoursesList(resp.userEntrollCourses);
      setIsLoading(false)
    })
  }

  return (
    <View style={{ margin: 21 }}>
      <View style={{ marginLeft: -20, marginRight: -22, marginTop: 15 }}>
        <View style={{ color: 'black', borderRadius: 8, marginTop: 16, padding: 9, margin: 3 }}>
          <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold', }}>ENROLL COURSES</Text>
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 3, elevation: 5 }} />
        </View>
      </View>

      <FlatList
        data={entrollCoursesList}
        refreshing={isLoading}
        onRefresh={() => getAllUserEntrollCourses()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ProgressCourseItem
            completedChapter={item?.completedChapter?.length}
            course={item?.courseList} />
        )} />

    </View>

  )
}

export default Course