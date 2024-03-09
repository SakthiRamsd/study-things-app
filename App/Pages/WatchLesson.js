import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Video, ResizeMode } from 'expo-av';
import { useNavigation, useRoute } from '@react-navigation/native'
import LessonInfo from '../Component/LessonInfo';
import { ScrollView } from 'react-native-gesture-handler';
import GlobalApi from '../Shared/GlobalApi';
import { ReloadContext } from '../../App';
import { Ionicons } from '@expo/vector-icons';

export default function WatchLesson() {
  const { params } = useRoute();
  const [userEntrollment, setUserEntrollment] = useState(params?.userEntrollment);
  const [course, setCourse] = useState(params?.course);
  const [selectedChapter, setSelectedChapter] = useState();
  const { reload, setReload } = useContext(ReloadContext)
  const navigation = useNavigation();

  useEffect(() => {
    console.log("--", userEntrollment)
    params && setSelectedChapter(params?.course?.chapter[0]);
    params && setUserEntrollment(params?.userEntrollment)
  }, [params && userEntrollment])

  // onChapterComplete Function
  const onChapterCompleted = () => {
    GlobalApi.markChapterCompleted(userEntrollment[0]?.id, selectedChapter?.id).then(resp => {
      console.log("Completed Chapter :", resp)
      setReload("Update Entrollment")
      ToastAndroid.show("Chapter Mark Completed", ToastAndroid.SHORT);
    })
  }

  return selectedChapter && (

    <ScrollView style={{backgroundColor:'#e6e6e6',padding:13}}>

    <View style={{ padding: 15, marginTop: 40,backgroundColor:'#ffffff',borderRadius:13}}>

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 70 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-undo" size={30} color="black" style={{marginTop:5,marginBottom:-10}} />
        </TouchableOpacity>
      </View>

      {/* Video Screening */}
      {selectedChapter && <Video
        shouldPlay={true}
        style={{ width: '100%', height: 240 }}
        source={{
          uri: selectedChapter.video?.url,
        }}
        useNativeControls={true}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
      />}

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15,marginBottom:10}}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{selectedChapter?.name}</Text>

        <TouchableOpacity onPress={() => onChapterCompleted()}>
          <Text style={{ fontSize: 15, backgroundColor: '#66c2ff', padding: 8, textAlign: 'center', fontWeight: '400',borderRadius:8 }}>Mark Completed</Text>
        </TouchableOpacity>
      </View>

      

    </View>
    <LessonInfo
        course={course}
        userEntrollment={userEntrollment}
        onChapterSelect={(chapter) => setSelectedChapter(chapter)}
        selectedChapter={selectedChapter}
      />
    </ScrollView>
  )
}