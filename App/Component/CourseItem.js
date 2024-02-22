import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

function CourseItem({ course }) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('course-details', { course: course })}
      style={{ backgroundColor: '#e6f2ff', width: 280, height: 280, padding: 20, borderWidth: 2.5, borderTopLeftRadius: 55, borderBottomRightRadius: 55, margin: 10, gap: 5, borderColor: '#80bfff', borderLeftWidth: 15, borderStartColor: '#80bfff', elevation: 10 }} >

      <Image source={{ uri: course?.banner?.url }}
        style={{ width: '100%', height: 120, borderRadius: 10 }} />

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