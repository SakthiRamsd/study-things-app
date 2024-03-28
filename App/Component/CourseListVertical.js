import { View, FlatList } from 'react-native'
import React from 'react'
import CourseItemVertical from './CourseItemVertical'

export default function CourseListVertical({ courseList }) {
  return (
   <FlatList
        data={courseList}
        renderItem={({ item, index }) => (
          <CourseItemVertical course={item} />
        )} />
   
  )
}