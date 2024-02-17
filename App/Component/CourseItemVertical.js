import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CourseItemVertical({ course }) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('course-details', { course: course })}
      style={{ backgroundColor: 'white', padding: 10, width: 340, borderRadius: 10, margin: 10, gap: 8, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

      <Image source={{ uri: course?.banner?.url }}
        style={{ width: 150, height: 80, borderRadius: 5 }} />

      <View style={{ justifyContent: 'center', flexShrink: 2, gap: 4 }}>
        <Text style={{ color: 'black', fontSize: 12.5, fontWeight: 'bold' }}>{course.name}</Text>
        <Text style={{ color: 'black', fontSize: 13, fontStyle: 'italic' }}>{course.author}</Text>
        
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <FontAwesome5 name="book-open" size={18} color="black" />
          <Text style={{ fontWeight: 'bold', color: 'black' }}>{course.course ? 'Course' : 'Project'}</Text>
        </View>
        
      </View>

    </TouchableOpacity>
  )
}