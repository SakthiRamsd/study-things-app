import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function LessonInfo({ course, userEntrollment, onChapterSelect, selectedChapter = {} }) {

  console.log("userEntrollment", userEntrollment);

  const checkIsChapterCompleted = (chapterId) => {
    const result = userEntrollment && userEntrollment[0].completedChapter?.find(item => item?.chapterId == chapterId)
    return result;
  }

  return course && (
    <View style={{ marginTop: 10 }}>

<FlatList
  data={course?.chapter}
  showsVerticalScrollIndicator={false}
  renderItem={({ item, index }) => (
    <TouchableOpacity
      onPress={() => onChapterSelect(item)}
      style={[
        styles.container,
        selectedChapter == item && checkIsChapterCompleted(item?.id)
      ]}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#008ae6',
          padding: 10,
          borderRadius: 15,
          marginBottom: 10,
        }}
      >
        <Text
          style={[
            styles.numberText,
            checkIsChapterCompleted(item?.id) && { color: 'green' }
          ]}
        >
          {index + 1}
        </Text>
        <Text style={styles.chapterName}>{item?.name}</Text>
        {checkIsChapterCompleted(item?.id) ? (
          <AntDesign name="checkcircle" size={28} color="#33cc33" />
        ) : (
          userEntrollment != [] || index == 0 ? (
            <Ionicons name="play-circle" size={35} color="#ffffff" />
          ) : (
            <Entypo name="lock" size={28} color="#ffffff" />
          )
        )}
      </View>
    </TouchableOpacity>
  )}
/>


      <View style={{ height: 30 }} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin:3
  },
  numberText: {
    fontSize: 15,
    opacity: 0.9,
    padding: 5,
    backgroundColor: '#ffffff',
    borderRadius: 99,
    width: 30,
    height: 29,
    textAlign: 'center',
    marginRight: 10,
  },
  chapterName: {
    flex: 1,
    fontSize: 13,
    fontWeight: '500',
    color: '#ffffff',
    marginRight: 10,
  },
});
