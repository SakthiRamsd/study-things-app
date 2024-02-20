import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Video, ResizeMode } from 'expo-av';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CourseStart({ course }) {

  return course && (

    <View style={{ padding: 5, backgroundColor: '#e6e6e6', borderRadius: 5, marginTop: 10 }} >

      {course?.chapter[0] ?
        <Video
          shouldPlay={true}
          style={{ width: '100%', height: 240 }}
          source={{
            uri: course?.chapter[0]?.video?.url,
          }}
          useNativeControls={true}
          resizeMode={ResizeMode.CONTAIN}
          isLooping /> :
        <Image source={{ uri: course?.banner?.url }}
          style={{ padding: 10, width: 340, height: 200, borderRadius: 10, alignSelf: 'center', marginBottom: 5, marginTop: 5 }} />
      }

      <View style={{ display: 'flex', gap: 8 }}>
        <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>{course.name}</Text>
        <Text style={{ color: 'red', fontSize: 13, fontWeight: 'bold' }}>{course.author}</Text>

        <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <FontAwesome5 name="book-open" size={24} color="black" />
          <Text style={{ fontWeight: 'bold' }}>{course.course ? 'Course' : 'Project'}</Text>
        </View>

        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Description</Text>
        <Text style={{ fontSize: 13, marginTop: -12, fontWeight: '500' }}>{course?.description}</Text>
      </View>
    </View>
  )
}