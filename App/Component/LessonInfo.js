import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function LessonInfo({ course, userEntrollment, onChapterSelect, selectedChapter = {} }) {

  console.log("userEntrollment", userEntrollment);

  const checkIsChapterCompleted = (chapterId) => {
    const result = userEntrollment && userEntrollment[0].completedChapter?.find(item => item?.chapterId == chapterId)
    console.log(result);
    return result;
  }

  return course&&(
    <View style={{ padding: 5, backgroundColor: 'whitesmoke', borderRadius: 5, marginTop: 10 }}>

      <View style={{backgroundColor:'#999999', color:'white',borderRadius:10,marginRight:-1,marginLeft:-1,marginTop:3,padding:10,marginBottom:10}}>
            <Text style={{fontSize:22, color:'white',fontWeight:'bold',}}>Lesson</Text>
      </View>

      <FlatList
        data={course?.chapter}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => onChapterSelect(item)}
            style={[styles.container, selectedChapter == item && { backgroundColor: 'lightblue' }, checkIsChapterCompleted(item?.id) && { backgroundColor: 'lightgreen' }]}>

            <View style={{ display: 'flex', flexDirection: 'row', gap: 18, alignItems: 'center', margin: 5 }}>
              <Text style={[{
                fontSize: 16,
                padding: 5,
                backgroundColor: '#80b3ff',
                borderRadius: 99,
                width: 40,
                height: 30,
                textAlign: 'center'
              }, checkIsChapterCompleted(item?.id) && { color: 'green' }]}>{index + 1}</Text>
              <Text style={{ fontSize: 13, fontWeight: '500' }}>{item?.name}</Text>
            </View>

            {checkIsChapterCompleted(item?.id) ? <AntDesign name="checkcircle" size={28} color="green" /> :
              userEntrollment != [] || index == 0 ? <Ionicons name="play-circle" size={30} color="black" />
                : <Entypo name="lock" size={28} color="gray" />}
          </TouchableOpacity>
        )}
      />

      <View style={{ height: 30 }} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5, padding: 10,
    borderWidth: 1, alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white'
  }
})