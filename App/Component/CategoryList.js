import React, { useState } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'


function CategoryList({ categories, setSelectedCategory }) {

  const [activeIndex, setActiveIndex] = useState();


  return (
    <View style={{marginLeft:3}}>
      <View style={{color: 'black', borderRadius: 8, padding: 10, marginBottom: 13, marginTop: 2}}>
        <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold'}}>Category</Text>
      </View>

      <FlatList
        data={categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
           <TouchableOpacity style={[styles.container, activeIndex == index && { backgroundColor:'#f2f2f2',borderWidth: 1, borderColor: '#808080', }]}
            onPress={() => { setActiveIndex(index);
              setSelectedCategory(item.slug)
             }}
            >
            <Image source={{ uri: item?.icon?.url }}
              style={{ width: 45, height: 45 }} />

            <Text style={{ fontSize: 13, textAlign: 'center', marginTop: 4, color: 'black' }}>{item?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: 80,
    marginLeft:8
  }
})

export default CategoryList