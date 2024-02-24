import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from './ProgressBar';

export default function ProgressCourseItem({ course, completedChapter }) {

  const navigation = useNavigation();

  useEffect(() => {

  }, [])



  const calculatePerCompleted = () => {

    const perc = (completedChapter / course?.chapter?.length)
    return perc.toFixed(2);
  }

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('course-details', { course: course })}
      style={{
        backgroundColor: '#e6f2ff', height: 300, padding: 13, gap: 4, marginTop: 18, borderWidth: 3.5, borderColor: '#80bfff', borderTopLeftRadius: 45,
        borderBottomRightRadius: 45, borderRightWidth: 13, borderLeftWidth: 10, elevation: 5
      }} >

      <Image source={{ uri: course?.banner?.url }}
        style={{ height: 150, borderRadius: 10 }} />

      <Text style={{ Color: 'black', fontSize: 14, fontWeight: 'bold' }}>{course?.name}</Text>
      <Text style={{ color: 'black', fontSize: 13, fontStyle: 'italic' }}>{course?.author}</Text>

      <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
        <Text style={{ fontWeight: 'bold' }}>{calculatePerCompleted() * 100}%</Text>

        <Text style={{ fontWeight: 'bold', marginRight: -170 }}>{completedChapter}/{course?.chapter?.length}</Text>
        <FontAwesome5 name="book-open" size={18} color="black" />
      </View>

      <ProgressBar perc={calculatePerCompleted()} />

    </TouchableOpacity>
  )
}