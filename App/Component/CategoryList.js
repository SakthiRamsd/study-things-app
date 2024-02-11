  import React, { useState } from 'react'
  import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
  import { FlatList } from 'react-native'
import HeadingSection from './HeadingSection'

  function CategoryList({categories}) {

    const [activeIndex,setActiveIndex]=useState()
    return (
     <View style={{marginTop:15}}>
        <HeadingSection heading={'Category'}/>
        
        <FlatList
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item,index}) =>(
            <TouchableOpacity style={[styles.container,activeIndex==index&&{borderWidth:1,borderColor:'#004080'}]}
            onPress={()=>{setActiveIndex(index)}}
            >
              <Image source={{uri:item?.icon?.url}}
                style={{width:45,height:45}}
              />
              <Text style={{fontSize:13,textAlign:'center',marginTop:4}}>{item?.name}</Text>
             </TouchableOpacity>
        )}
        />
        </View>
        )
      }

    
    const styles=StyleSheet.create({
      container:{
        backgroundColor:'#e6f2ff',
        padding:15,
        marginRight:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        width:80,
    
      }
    })

  export default CategoryList