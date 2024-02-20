import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { client } from '../Shared/KindConfig'


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
            <View style={styles.view}>

                <Image source={{ uri: userDetail?.picture }}
                    style={styles.img}
                />
                <View>
                    <Text style={styles.text1}>Welcome!</Text>
                    <Text style={styles.text2}>Hello, {userDetail?.given_name}</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 50,
        height: 50,
        borderBottomLeftRadius: 13,
        borderTopRightRadius:13
    },
    view: {
        paddingTop: 20,
        marginTop: 25,
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'row',
        gap:7,
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
    }
})

export default Header