import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from './ProgressBar';

export default function ProgressCourseItem({ course, completedChapter }) {

  const navigation = useNavigation();

  const calculatePerCompleted = () => {
    const perc = (completedChapter / course?.chapter?.length)
    return perc.toFixed(2);
  }

  return (
    <ScrollView>
    <TouchableOpacity
      onPress={() => navigation.navigate('course-details', { course: course })}
      style={{
        backgroundColor: '#ffffff', height: 300, padding: 25, gap: 4, marginTop: 15, borderRadius:15, borderWidth:0.4 , borderColor:'#008ae6'}} >

      <Image source={{ uri: course?.banner?.url }}
        style={{ height: 150, borderRadius: 10 }} />

      <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>{course?.name}</Text>
      <Text style={{ color: 'black', fontSize: 13, fontStyle: 'italic' }}>{course?.author}</Text>

      <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
        <Text style={{ fontWeight: 'bold',color:'#008ae6' }}>{calculatePerCompleted() * 100}%</Text>

        <Text style={{ fontWeight: 'bold', marginRight: -170 }}>{completedChapter}/{course?.chapter?.length}</Text>
        <FontAwesome5 name="book-open" size={18} color="#008ae6" />
      </View>

      <ProgressBar perc={calculatePerCompleted()} />

    </TouchableOpacity>
    </ScrollView>
  )
}