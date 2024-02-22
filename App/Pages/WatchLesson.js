import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Video, ResizeMode } from 'expo-av';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import LessonInfo from '../Component/LessonInfo';
import { ScrollView } from 'react-native-gesture-handler';
import GlobalApi from '../Shared/GlobalApi';
import { ReloadContext } from '../../App';

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

    <ScrollView style={{ padding: 10, marginTop: 30 }}>

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 70 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle-sharp" size={50} color="black" />
        </TouchableOpacity>
        <View style={{ color: 'black', borderRadius: 8, marginLeft: 15 }}>
          <Text style={{ fontSize: 21, color: 'black', fontWeight: 'bold', }}>LESSON</Text>
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 3, elevation: 5 }} />
        </View>
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

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 18, flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{selectedChapter?.name}</Text>

        <TouchableOpacity onPress={() => onChapterCompleted()}>
          <Text style={{ fontSize: 15, backgroundColor: '#b3d9ff', padding: 10, borderTopRightRadius: 12, borderBottomLeftRadius: 12, paddingHorizontal: 15, textAlign: 'center', fontWeight: '400' }}>Mark Completed</Text>
        </TouchableOpacity>
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