import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { client } from '../Shared/KindConfig';
import { useNavigation } from '@react-navigation/native';


function Header() {
    const [userDetail, setUserDetail] = useState();
    const navigation = useNavigation();

    useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = async () => {
        const user = await client.getUserDetails();
        setUserDetail(user);
    };

    const getProfile = () => {
        navigation.navigate('profile');
    };


    return (
        <View style={styles.container}>

             <View style={styles.profileInfo}>
                <Text style={styles.greeting}>HELLO!</Text>
                <Text style={styles.userName}>{userDetail?.given_name}</Text>
            </View>

            <View>
                {userDetail && (
                    <TouchableOpacity onPress={getProfile}>
                        <Image source={{ uri: userDetail.picture }} style={styles.profileImage} />
                    </TouchableOpacity>
                )}
            </View>
           
    
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 12,
        width: '100%',
        gap: 10
    },
    profileInfo: {
        flex: 1,
        padding:10
    },
    greeting: {
        fontSize: 18,
        fontWeight: '600',
        fontStyle:'italic',
        marginTop:20
    },
    userName: {
        fontWeight: '500',
        color: '#ffffff',
        fontSize: 28,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginTop:-30
    },
});

export default Header;
