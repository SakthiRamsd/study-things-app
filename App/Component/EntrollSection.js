import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'
import React, { useEffect } from 'react'

export default function EntrollSection({ userEntrollment, course, onEntrollmentPress, onContinuePress }) {

  useEffect(() => {

  }, [])

  const onSourceClick = (url) => { Linking.openURL(course?.youtubeUrl) }

  return course && (

    // Entrollment Button on User Press Entroll and Contine to Course
    <View>
      {!course?.chapter[0] && <View style={{ alignItems: 'center', marginTop: 10 }}>
        <TouchableOpacity onPress={() => onSourceClick(course.youtubeUrl)} style={{ backgroundColor: '#008ae6', height: 60, justifyContent: 'center', display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', borderRadius:12,width:'100%' }}>
          <Image source={require('./../Assets/Images/youtube (1).png')}
            style={{ width: 40, height: 38 }}
          />
          <Text style={{ fontWeight: 'bold', color:'#ffffff' }}>Watch on YouTube</Text>
        </TouchableOpacity>
      </View>}

      {course?.chapter[0] && userEntrollment?.length > 0 ?
        <TouchableOpacity onPress={() => onContinuePress()} style={{ backgroundColor: '#008ae6', padding: 10, height: 55, marginTop: 15, justifyContent: 'center',borderRadius:10}}><Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center',color:'#ffffff' }}>Continue</Text>
        </TouchableOpacity> :
        course?.chapter[0] && <TouchableOpacity onPress={() => onEntrollmentPress()} style={{ backgroundColor: '#008ae6', padding: 11, height: 60, marginTop: 13, justifyContent: 'center', borderRadius:10}}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center',color:'#ffffff' }}>Entroll to Course</Text>
        </TouchableOpacity>}
    </View>
  )
} 