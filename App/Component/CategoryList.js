import React, { useState } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'


function CategoryList({ categories }) {

  const [activeIndex, setActiveIndex] = useState();

  return (
    <View style={{ marginTop: 3 }}>
      <View style={{ backgroundColor: '#999999', color: 'white', borderRadius: 8, margin: 4, padding: 10, marginBottom: 13, marginTop: 8 }}>
        <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold', }}>Categories</Text>
      </View>

      <FlatList
        data={categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
           <TouchableOpacity style={[styles.container, activeIndex == index && { borderWidth: 1, borderColor: 'black' }]}
            onPress={() => { setActiveIndex(index) }} >
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
    backgroundColor: 'white',
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