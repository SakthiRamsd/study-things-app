  import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
  import { useState } from 'react';
  import React from 'react'
  import HeadingSection from './HeadingSection'
  import { Ionicons } from '@expo/vector-icons';
  import { Entypo } from '@expo/vector-icons';

  export default function LessonInfo({course}) {

    const [isEntrolled,setIsEntrolled] = useState(false)
    return (
      <View style={{padding:5,backgroundColor:'#e6e6e6',borderRadius:5,marginTop:10}}>
      
          <HeadingSection heading={'Lesson'}/>

          <FlatList 
              data={course?.chapter}
              renderItem={({item, index})=> (
                 
                 <TouchableOpacity style={{display:'flex',flexDirection:'row',justifyContent:'space-between', gap:5, padding:10, borderWidth:1, alignItems:'center',marginBottom:10,borderRadius:5}}>
                      
                      <View style={{display:'flex',flexDirection:'row',gap:18,alignItems:'center',margin:5}}>
                            <Text style={{fontSize:16,padding:5, backgroundColor:'#80b3ff',borderRadius:99,width:40,height:30,textAlign:'center'}}>{index+1}</Text>
                            <Text style={{fontSize:13,fontWeight:'500'}}>{item.name}</Text>
                      </View>

                      {isEntrolled || index==[0]? <Ionicons name="play-circle" size={30} color="black" />
                      : <Entypo name="lock" size={28} color="gray" />}
                     
      
                  </TouchableOpacity>
          )}
          />

            <View style={{height:30}}>
              </View>

      </View>
    )
  }