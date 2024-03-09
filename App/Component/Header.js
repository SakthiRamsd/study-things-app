import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Button } from 'react-native';
import { client } from '../Shared/KindConfig';
import { useNavigation } from '@react-navigation/native';

function Header() {
    const [userDetail, setUserDetail] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = async () => {
        const user = await client.getUserDetails();
        setUserDetail(user);
    };

    const handleProfilePress = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleProfileScreenPress = () => {
        setModalVisible(false);
        navigation.navigate('profile');
    };

    const handleCourseScreenPress = () =>{
        setModalVisible(false);
        navigation.navigate('course')
    }
    const handleFaveScreenPress = () =>{
        setModalVisible(false);
        navigation.navigate('favorite')
    }
    const handleQuizScreenPress = () =>{
        setModalVisible(false);
        navigation.navigate('quiz')
    }

    return (
        <View style={styles.container}>
            <View style={styles.profileInfo}>
                <Text style={styles.greeting}>HELLO!</Text>
                <Text style={styles.userName}>{userDetail?.given_name}</Text>
            </View>
            <TouchableOpacity onPress={handleProfilePress}>
                
                <Image source={{ uri: userDetail?.picture }} style={styles.profileImage} />
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <TouchableOpacity onPress={closeModal} style={{borderColor:'#ffffff',borderWidth:4,width:60,alignSelf:'center',borderRadius:99,marginBottom:30}}/>
                <View style={{height:20,}}/>
                    <View style={styles.modalContent}>
                        <Button title="Profile" onPress={handleProfileScreenPress}/>
                        <Button title='My Course' onPress={handleCourseScreenPress}/>
                        <Button title='Favorite' onPress={handleFaveScreenPress}/>
                        <Button title='Quiz' onPress={handleQuizScreenPress}/>
                        <Button title="Close" onPress={closeModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 12,
        width: '100%',
    },
    profileInfo: {
        flex: 1,
    },
    greeting: {
        fontSize: 21,
        fontWeight: 'bold',
    },
    userName: {
        fontWeight: '500',
        color: '#ffffff',
        fontSize: 15,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius:25,
        marginTop:190,
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 15,
        gap:15,
        marginBottom:200,
        width:'80%',
    },
});

export default Header;
