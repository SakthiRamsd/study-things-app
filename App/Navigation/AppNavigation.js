import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CourseDetails from '../Pages/CourseDetails';
import WatchLesson from '../Pages/WatchLesson';
import PlayGround from '../Pages/PlayGround';
import SearchResult from '../Pages/SearchResult';
import Profile from '../Pages/Profile';
import Course from '../Pages/Course';
import Home from '../Pages/Home';
import FavoriteScreen from '../Pages/FavoritesScreen';
import QuizScreen from '../Pages/QuizScreen';


const Stack = createStackNavigator();


export default function AppNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>      
      <Stack.Screen name='home' component={Home}/>
      <Stack.Screen name='course' component={Course}/>
      <Stack.Screen name='favorite' component={FavoriteScreen}/>
      <Stack.Screen name='quiz' component={QuizScreen}/>
      <Stack.Screen name='profile' component={Profile}/>
      <Stack.Screen name='course-details' component={CourseDetails} />
      <Stack.Screen name='watch-lesson' component={WatchLesson} /> 
      <Stack.Screen name='playground'  component={PlayGround}/> 
      <Stack.Screen name='search'  component={SearchResult}/>
    </Stack.Navigator>
  )
}