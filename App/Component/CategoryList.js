import React, { useState } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel';


function CategoryList({ categories }) {

  const [activeIndex, setActiveIndex] = useState(0);

  const renderCarouselItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.container,
        activeIndex === index && {
          backgroundColor: '#b3d9ff',
          borderWidth: 1,
          borderColor: '#80bfff',
        },
      ]}
      onPress={() => {
        setActiveIndex(index);
      }}>
      <Image source={{ uri: item?.icon?.url }} style={{ width: 45, height: 45 }} />
      <Text style={{ fontSize: 13, textAlign: 'center', marginTop: 4, color: 'black' }}>
        {item?.name}
      </Text>
    </TouchableOpacity>
  );

  return (

    <View style={{ marginLeft: 3 }}>
      <View style={{ color: 'black', borderRadius: 8, padding: 10, marginBottom: 13, marginTop: 2 }}>
        <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold' }}>Category</Text>
        <View style={styles.line} />
      </View>

      <Carousel
        data={categories}
        renderItem={renderCarouselItem}
        sliderWidth={370}
        itemWidth={130}
        onSnapToItem={(index) => setActiveIndex(index)}
        loop
        autoplay
        autoplayInterval={3000}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6f2ff',
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    height: 120,
    width: 120,
    marginLeft: 8,
    borderWidth: 2,
    borderColor: '#66b3ff',
    borderEndWidth: 12,
    elevation: 5,
    borderLeftWidth: 10
  },
  line: {
    borderBottomColor: 'gray', // Change the color as needed
    borderBottomWidth: 1,
    marginTop: 3,
    elevation: 4

  },
})

export default CategoryList