import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CourseDetails from '../Pages/CourseDetails';
import WatchLesson from '../Pages/WatchLesson';
import PlayGround from '../Pages/PlayGround';
import SearchResult from '../Pages/SearchResult';
import Profile from '../Pages/Profile';
import QuizScreen from '../Pages/QuizScreen';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>      
      <Stack.Screen name='tab' component={TabNavigation}/>
      <Stack.Screen name='quiz' component={QuizScreen}/>
      <Stack.Screen name='profile' component={Profile}/>
      <Stack.Screen name='course-details' component={CourseDetails} />
      <Stack.Screen name='watch-lesson' component={WatchLesson} /> 
      <Stack.Screen name='playground'  component={PlayGround}/> 
      <Stack.Screen name='search'  component={SearchResult}/>
    </Stack.Navigator>
  )
}