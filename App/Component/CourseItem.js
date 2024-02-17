import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function CourseItem({ course }) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('course-details', { course: course })}
      style={{ backgroundColor: 'white', width: 280, height: 280, padding: 10, borderRadius: 10, margin: 10, gap: 5, }} >

      <Image source={{ uri: course?.banner?.url }}
        style={{ width: '100%', height: 150, borderRadius: 10 }} />

      <Text style={{ Color: 'black', fontSize: 14, fontWeight: 'bold' }}>{course.name}</Text>
      <Text style={{ color: 'black', fontSize: 13, fontStyle: 'italic' }}>{course.author}</Text>

      <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <FontAwesome5 name="book-open" size={24} color="black" />
        <Text style={{ fontWeight: 'bold', color: 'black' }}>{course.course ? 'Course' : 'Project'}</Text>
      </View>

    </TouchableOpacity>
  )
}

export default CourseItem