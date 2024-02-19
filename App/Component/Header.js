import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { client } from '../Shared/KindConfig'
import { TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function Header() {

    const [userDetail, setUserDetail] = useState();
    useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = async () => {
        const user = await client.getUserDetails();
        setUserDetail(user)
    }

    return (
        <>
            <View style={styles.view}>

                <Image source={{ uri: userDetail?.picture }}
                    style={styles.img}
                />
                <View>
                    <Text style={styles.text1}>Welcome</Text>
                    <Text style={styles.text2}>Hello, {userDetail?.given_name}</Text>
                </View>
            </View>

            <View style={styles.input}>
                <FontAwesome name="search" size={24} color="black" />
                <TextInput style={{ fontWeight:'normal' }} placeholder='Search Here' />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    view: {
        paddingTop: 20,
        marginTop: 25,
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    },
    text1: {
        fontSize: 20,
        fontWeight:'bold',
    },
    text2: {
        fontSize: 13,
        color: '#ff3300',
        fontWeight:'500'
    },
    input: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 20,
        marginTop:15,
        margin: 5,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        gap: 7,
        borderWidth: 0.5,
        borderColor: 'black'
    }
})

export default Header