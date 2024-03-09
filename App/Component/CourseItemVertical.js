import { View, Text, Image, TouchableOpacity, Share } from 'react-native'
import React, {useState,useEffect} from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { AntDesign } from '@expo/vector-icons';

export default function CourseItemVertical({ course }) {

  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    loadFavoriteStatus();
  }, []);

  const loadFavoriteStatus = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      if (favorites) {
        const favoritesArray = JSON.parse(favorites);
        const isFav = favoritesArray.some(c => c.id === course.id);
        setIsFavorite(isFav);
      }
    } catch (error) {
      console.error('Error loading favorite status:', error);
    }
  };

  const toggleFavorite = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      let favoritesArray = favorites ? JSON.parse(favorites) : [];

      if (favoritesArray.find(c => c.id === course.id)) {
        favoritesArray = favoritesArray.filter(c => c.id !== course.id);
        setIsFavorite(false);
      } else {
        favoritesArray.push(course);
        setIsFavorite(true);
      }

      await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  const shareCourse = async () => {
    try {
      const result = await Share.share({
        message: `${course.name}: ${course.author}\n${course.youtubeUrl}`,
        url: course.youtubeUrl,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type:', result.activityType);
        } else {
          console.log('Shared');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Dismissed');
      }
    } catch (error) {
      console.error('Error sharing course:', error.message);
    }
  };


  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('course-details', { course: course })}
      style={{ backgroundColor: '#ffffff', padding: 25, width: 340, margin: 10, gap: 8, display: 'flex', flexDirection: 'row', alignItems: 'center', elevation: 8, borderRadius:10, borderWidth:0.4, borderColor:'#008ae6' }}>

      <Image source={{ uri: course?.banner?.url }}
        style={{ width: 160, height: 90, borderRadius: 5 }} />

      <View style={{ justifyContent: 'center', flexShrink: 2, gap: 8}}>
        <Text numberOfLines={3} style={{ color: 'black', fontSize: 12.5, fontWeight: 'bold', }}>{course.name}</Text>
        <Text numberOfLines={1} style={{ color: 'black', fontSize: 13, fontStyle: 'italic' }}>{course.author}</Text>
        <Text style={{ fontWeight: 'bold', color: '#008ae6' }}>{course.course ? 'Course' : 'Project'}</Text>
      </View>

      <View style={{flexDirection:'column',gap:15,marginLeft:5}}>
          <TouchableOpacity onPress={toggleFavorite}>
          <AntDesign name={isFavorite ? "heart" : "hearto"} size={20} color="#FF0000" />
        </TouchableOpacity>
        <FontAwesome5 name="book-open" size={18} color="#008ae6" />
        <TouchableOpacity onPress={shareCourse}>
            <AntDesign name="sharealt" size={20} color="#008ae6" />
          </TouchableOpacity>
       </View>

    </TouchableOpacity>
  )
}