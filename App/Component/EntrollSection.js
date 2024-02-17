import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'
import React, { useEffect } from 'react'

export default function EntrollSection({ userEntrollment, course, onEntrollmentPress, onContinuePress }) {

  useEffect(() => {
    console.log("--", userEntrollment)
  }, [])

  const onSourceClick = (url) => { Linking.openURL(course?.youtubeUrl) }

  return course && (

    // Entrollment Button on User Press Entroll and Contine to Course
    <View>
      {!course?.chapter[0] && <View style={{ alignItems: 'center', backgroundColor: '#bfbfbf', borderRadius: 8, marginTop: 10 }}>
        <TouchableOpacity onPress={() => onSourceClick(course.youtubeUrl)} style={{ padding: 8, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <Image source={require('./../Assets/Images/youtube (1).png')}
            style={{ width: 38, height: 40 }}
          />
          <Text style={{ fontWeight: 'bold' }}>Watch on YouTube</Text>
        </TouchableOpacity>
      </View>}

      {course?.chapter[0] && userEntrollment?.length>0?
        <TouchableOpacity onPress={() => onContinuePress()} style={{ padding: 18, backgroundColor: '#ff4d4d', borderRadius: 8, marginTop: 10 }}><Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>Continue</Text>
        </TouchableOpacity> :
        course?.chapter[0] && <TouchableOpacity onPress={() => onEntrollmentPress()} style={{ padding: 19, backgroundColor: '#ff4d4d', borderRadius: 8, marginTop: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>Entroll to Course</Text>
        </TouchableOpacity>}
    </View>
  )
} 