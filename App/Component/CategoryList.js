import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

function CategoryList({ categories }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderCategoryItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.container,
        activeIndex === index
      ]}
      onPress={() => {
        setActiveIndex(index);
      }}>
      <Image source={{ uri: item?.icon?.url }} style={{ width: 330, height: 180,borderRadius:15,marginTop:25 }} />
      <Text style={{ fontSize: 13, textAlign: 'center', marginTop: 4, color: 'black' }}>
        {item?.name}
      </Text>
    </TouchableOpacity>
  );

  // Check if categories is undefined or null
  if (!categories) {
    return null; // or display a loading indicator or some default content
  }

  return (
    <View style={styles.wrapper}>
      <Swiper
        style={styles.wrapper}
        loop={true}
        autoplay={true}
        onIndexChanged={index => setActiveIndex(index)}>
        {categories.map((category, index) => (
          <View key={index} style={styles.slide}>
            {renderCategoryItem({ item: category, index })}
          </View>
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 190,
    marginTop: 3
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 170,
    width: 310,
    marginLeft: 18,
    elevation: 1,
    borderRadius: 15,
  },
});

export default CategoryList;
