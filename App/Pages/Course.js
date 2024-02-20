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
      <View style={{ marginLeft: -20, marginRight: -22 }}>
        <Text style={{
          fontSize: 17, fontWeight: '500', marginTop: 20, backgroundColor: '#e6e6e6', padding: 12, textAlign: 'center', marginBottom: 1, margin: 7, borderColor: '#b3d9ff', borderWidth: 3, color: 'black', borderLeftWidth: 13,
          borderRightWidth: 13,
          borderTopLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}>Entrolled Courses</Text>
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