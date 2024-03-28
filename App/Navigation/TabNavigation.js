import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from '../Pages/Home';
import Course from '../Pages/Course';
import { Entypo } from '@expo/vector-icons';
import { Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import FavoriteScreen from '../Pages/FavoritesScreen';
import QuizScreen from '../Pages/QuizScreen';
import { Ionicons } from '@expo/vector-icons';

function TabNavigation() {

    const Tab = createBottomTabNavigator();

    return (

        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#0099ff',

        }}>
            <Tab.Screen name='home' component={Home} options={{
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="home" size={20} color={color} />
                ),
                tabBarLabel: ({ color }) => (
                    <Text style={{ color: color, fontSize: 12 }}>HOME</Text>
                )
            }} />

            <Tab.Screen name='Course' component={Course}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="book" size={20} color={color} />
                    ),
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12 }}>MY COURSE</Text>
                    ),
                }} />

        <Tab.Screen name='favorite' component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="heart" size={20} color={color} />
                    ),
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12 }}>FAVORITE</Text>
                    )
                }} />

            <Tab.Screen name='quiz' component={QuizScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="bulb-outline" size={22} color={color}/>
                    ),
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12 }}>QUIZ</Text>
                    )
                }} />
            

        </Tab.Navigator>
    )
}

export default TabNavigation