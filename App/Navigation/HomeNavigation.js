import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './../Pages/Home';
import CourseDetails from './../Pages/CourseDetails';
import TabNavigation from './TabNavigation';

 const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='home' component={TabNavigation}/>
      <Stack.Screen name='course-details' component={CourseDetails}/>
    </Stack.Navigator>
  )
}