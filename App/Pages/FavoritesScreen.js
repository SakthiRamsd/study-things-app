import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, RefreshControl,Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

function FavoriteScreen({course}) {
  const [favoriteCourses, setFavoriteCourses] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    loadFavoriteCourses();
  }, []);

  const loadFavoriteCourses = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      if (favorites) {
        setFavoriteCourses(JSON.parse(favorites));
      }
    } catch (error) {
      console.error('Error loading favorite courses:', error);
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Fetch new data here or reload existing data
    loadFavoriteCourses().then(() => setRefreshing(false));
  }, []);

  const renderCourseItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('course-details', { course: item })}
      style={{ backgroundColor: '#ffffff', padding: 20, width: 340, margin: 10, gap: 8, display: 'flex', flexDirection: 'row', alignItems: 'center', elevation: 8, borderRadius:10, borderWidth:0.4, borderColor:'#008ae6' }}>

      <Image source={{ uri: item?.banner?.url }}
        style={{ width: 160, height: 90, borderRadius: 5 }} />

      <View style={{ justifyContent: 'center', flexShrink: 2, gap: 8}}>
        <Text numberOfLines={3} style={{ color: 'black', fontSize: 12.5, fontWeight: 'bold', }}>{item.name}</Text>
        <Text numberOfLines={1} style={{ color: 'black', fontSize: 13, fontStyle: 'italic' }}>{item.author}</Text>

      </View>

    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
   <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',marginLeft:15,marginTop:15}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-undo" size={30} color="black" style={{marginTop:5,marginBottom:-10}} />
        </TouchableOpacity>
    
        <View style={{ color: 'black', borderRadius: 8, marginTop: 28, padding: 9, margin: 2 }}>
          <Text style={{ fontSize: 21, color: 'black', fontWeight: 'bold', }}>FAVORITES</Text>
        </View>
      </View>
     <FlatList
  data={favoriteCourses}
  renderItem={renderCourseItem}
  keyExtractor={(item, index) => index.toString()}
  contentContainerStyle={{ flexGrow: 1 }}
  ListEmptyComponent={() => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>No favorite courses yet!</Text>
    </View>
  )}
  refreshControl={
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  }
/>

    </View>
  );
}

export default FavoriteScreen;
