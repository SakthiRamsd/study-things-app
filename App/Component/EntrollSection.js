import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

export default function EntrollSection({ userEntrollment, course, onEntrollmentPress, onContinuePress }) {

  return course && (

    // Entrollment Button on User Press Entroll and Contine to Course
    <View>
      {course?.chapter[0] && userEntrollment?.length > 0 ?
        <TouchableOpacity onPress={() => onContinuePress()} style={{ backgroundColor: '#008ae6', padding: 10, height: 55, marginTop: 15, justifyContent: 'center',borderRadius:10}}><Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center',color:'#ffffff' }}>Continue</Text>
        </TouchableOpacity> :
        course?.chapter[0] && <TouchableOpacity onPress={() => onEntrollmentPress()} style={{ backgroundColor: '#008ae6', padding: 11, height: 60, marginTop: 13, justifyContent: 'center', borderRadius:10}}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center',color:'#ffffff' }}>Entroll to Course</Text>
        </TouchableOpacity>}
    </View>
  )
} 