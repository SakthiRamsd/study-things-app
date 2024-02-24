import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from '../Pages/Home';
import Course from '../Pages/Course';
import Profile from '../Pages/Profile';
import { Entypo } from '@expo/vector-icons';
import { Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Chatbot from '../Pages/Chatbot';

function TabNavigation() {

    const Tab = createBottomTabNavigator();

    return (

        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#0099ff',

        }}>
            <Tab.Screen name='Home' component={Home} options={{
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="home" size={22} color={color} />
                ),
                tabBarLabel: ({ color }) => (
                    <Text style={{ color: color, fontSize: 12 }}>HOME</Text>
                )
            }} />

            <Tab.Screen name='Course' component={Course}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="book" size={22} color={color} />
                    ),
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12 }}>MY COURSE</Text>
                    ),
                }} />

            <Tab.Screen name='profile' component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" size={22} color={color} />
                    ),
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12 }}>PROFILE</Text>
                    )
                }} />

            <Tab.Screen name='chat' component={Chatbot}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="chat" size={24} color={color} />
                    ),
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12 }}>CHATBOT</Text>
                    )
                }} />

        </Tab.Navigator>
    )
}

export default TabNavigation