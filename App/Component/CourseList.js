import React from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CourseItem from './CourseItem';

function CourseList({ courseList }) {
  const renderItem = ({ item }) => (
     <CourseItem course={item} />
  );

  return (
    <View>
      <Carousel
        data={courseList}
        renderItem={renderItem}
        sliderWidth={360}
        itemWidth={290}
        layout={'default'}
        loop={true}
        autoplay={true}
        autoplayInterval={3000}
      />
    </View>
  );
}

export default CourseList;
