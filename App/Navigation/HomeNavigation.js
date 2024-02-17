import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CourseDetails from './../Pages/CourseDetails';
import TabNavigation from './TabNavigation';
import WatchLesson from '../Pages/WatchLesson';

const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='home' component={TabNavigation} />
      <Stack.Screen name='course-details' component={CourseDetails} />
      <Stack.Screen name='watch-lesson' component={WatchLesson} />
    </Stack.Navigator>
  )
}