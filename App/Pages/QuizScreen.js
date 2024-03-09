import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native'

export default function QuizScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-undo" size={30} color="black" style={{marginTop:5,marginBottom:-10}} />
        </TouchableOpacity>
    
        <View style={{ color: 'black', borderRadius: 8, marginTop: 28, padding: 9, margin: 4 }}>
          <Text style={{ fontSize: 21, color: 'black', fontWeight: 'bold', }}>QUIZ</Text>
        </View>
      </View>
     <View style={styles.categoryContainer}>
        <TouchableOpacity
            style={styles.category}
            onPress={()=>navigation.navigate('playground', {category :'world-affairs'})}
        >
            <Text style={styles.categoryText}>World Affairs</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.category}
            onPress={()=>navigation.navigate('playground', {category :'science'})}
        >
            <Text style={styles.categoryText}>Science</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.category}
            onPress={()=>navigation.navigate('playground', {category :'technology'})}
        >
            <Text style={styles.categoryText}>Technology</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.category}
            onPress={()=>navigation.navigate('playground', {category :'sports'})}
        >
            <Text style={styles.categoryText}>Technology</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.category}
            onPress={()=>navigation.navigate('playground', {category :'literature'})}
        >
            <Text style={styles.categoryText}>Literature</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.category}
            onPress={()=>navigation.navigate('playground', {category :'movies'})}
        >
            <Text style={styles.categoryText}>Movies</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        marginLeft:10
    },
    categoryContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
        marginTop:15
    },
    category:{
        width:130,
        height:130,
        borderRadius:20,
        backgroundColor:'white',
        margin:10,
        elevation:20,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0.4,
        borderColor:'#008ae6'
       
    },
    categoryText:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
        color:'black'
    }
})