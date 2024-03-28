import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native'

export default function QuizScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-undo" size={30} color="black" style={{ marginTop: 5, marginBottom: -10 }} />
                </TouchableOpacity>

                <View style={{ color: 'black', borderRadius: 8, marginTop: 28, padding: 9, margin: 4 }}>
                    <Text style={{ fontSize: 21, color: 'black', fontWeight: 'bold', }}>QUIZ</Text>
                </View>
            </View>
            <View style={styles.categoryContainer}>

                <TouchableOpacity
                    style={styles.category}
                    onPress={() => navigation.navigate('playground', { category: 'science' })}
                >
                    <Image
                        source={require('./../Assets/Images/html.png')}
                        style={styles.img}
                    />
                    <Text style={styles.categoryText}>HTML</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.category}
                    onPress={() => navigation.navigate('playground', { category: 'technology' })}
                >
                    <Image
                        source={require('./../Assets/Images/css.png')}
                        style={styles.img}
                    />
                    <Text style={styles.categoryText}>CSS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.category}
                    onPress={() => navigation.navigate('playground', { category: 'sports' })}
                >
                    <Image
                        source={require('./../Assets/Images/javascript.png')}
                        style={styles.img}
                    />
                    <Text style={styles.categoryText}>JAVASCRIPT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.category}
                    onPress={() => navigation.navigate('playground', { category: 'literature' })}
                >
                    <Image
                        source={require('./../Assets/Images/react.png')}
                        style={styles.img}
                    />
                    <Text style={styles.categoryText}>REACT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginLeft: 10
    },
    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
       
    },
    category: {
        padding: 10,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.4,
        borderColor: '#008ae6',
        borderRadius:10

    },
    categoryText: {
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        padding: 5
    },
    img: {
        height: 90,
        width: 90,
        borderRadius: 10,

    }
})