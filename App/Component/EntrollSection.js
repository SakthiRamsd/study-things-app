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
        <TouchableOpacity onPress={() => onSourceClick(course.youtubeUrl)} style={{ backgroundColor: 'white', borderTopLeftRadius: 40, borderBottomRightRadius: 40, borderLeftWidth: 13, borderLeftColor: '#80bfff', borderRightWidth: 13, borderRightColor: '#80bfff', borderWidth: 2, borderColor: '#80bfff', elevation: 5, height: 60, justifyContent: 'center', width: 340, display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <Image source={require('./../Assets/Images/youtube (1).png')}
            style={{ width: 40, height: 38 }}
          />
          <Text style={{ fontWeight: 'bold' }}>Watch on YouTube</Text>
        </TouchableOpacity>
      </View>}

      {course?.chapter[0] && userEntrollment?.length > 0 ?
        <TouchableOpacity onPress={() => onContinuePress()} style={{ backgroundColor: 'white', padding: 12, borderTopLeftRadius: 40, borderBottomRightRadius: 40, borderLeftWidth: 13, borderLeftColor: '#80bfff', borderRightWidth: 13, borderRightColor: '#80bfff', borderWidth: 2, borderColor: '#80bfff', elevation: 5, height: 60, marginTop: 10, justifyContent: 'center' }}><Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>Continue</Text>
        </TouchableOpacity> :
        course?.chapter[0] && <TouchableOpacity onPress={() => onEntrollmentPress()} style={{ backgroundColor: 'white', padding: 12, borderTopLeftRadius: 40, borderBottomRightRadius: 40, borderLeftWidth: 13, borderLeftColor: '#80bfff', borderRightWidth: 13, borderRightColor: '#80bfff', borderWidth: 2, borderColor: '#80bfff', elevation: 6, height: 60, marginTop: 10, justifyContent: 'center' }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>Entroll to Course</Text>
        </TouchableOpacity>}
    </View>
  )
} 