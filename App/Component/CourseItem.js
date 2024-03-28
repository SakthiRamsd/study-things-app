import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function CourseItem({ course }) {
  const navigation = useNavigation();
 
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('course-details', { course: course })}
      style={{ backgroundColor: '#ffffff', width: 300, height: 280, padding: 20, margin: 10, elevation: 8, borderRadius: 10, borderWidth: 0.4, borderColor: '#008ae6',marginLeft:-3 }} >
      <Image source={{ uri: course?.banner?.url }} style={{ width: '100%', height: 140, borderRadius: 10 }} />
      <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>{course.name}</Text>
      <Text style={{ color: 'black', fontSize: 13, fontStyle: 'italic' }}>{course.author}</Text>
      <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' ,marginTop:10}}>
        <FontAwesome5 name="book-open" size={24} color="#008ae6" />
        <Text style={{ fontWeight: 'bold', color: '#008ae6' }}>{course.course ? 'Course' : 'Project'}</Text>
      </View>
    </TouchableOpacity>
  )
}


export default CourseItem;