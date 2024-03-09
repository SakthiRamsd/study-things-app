import React, { useContext, useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { userDeatailsContext } from '../../App'
import GlobalApi from '../Shared/GlobalApi';
import ProgressCourseItem from '../Component/ProgressCourseItem';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Course() {

  const Navigation = useNavigation();
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
    <View style={{flex:1}}>
    <View style={{ margin: 21 }}>
    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',marginLeft:-15}}>
        <TouchableOpacity onPress={() => Navigation.goBack()}>
        <Ionicons name="arrow-undo" size={30} color="black" style={{marginTop:5,marginBottom:-10}} />
        </TouchableOpacity>
    
        <View style={{ color: 'black', borderRadius: 8, marginTop: 28, padding: 9, margin: 3 }}>
          <Text style={{ fontSize: 21, color: 'black', fontWeight: 'bold', }}>MY COURSE</Text>
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
    </View>

  )
}

export default Course