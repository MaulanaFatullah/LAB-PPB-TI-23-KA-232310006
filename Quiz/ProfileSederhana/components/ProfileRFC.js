import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileRFC = (props) => {
    return (
        <View style={[styles.container, styles.shadow]}>
            <Image source={require('../assets/avatar.png')} style={styles.avatar} />
            <Text style={styles.title}>Function Component</Text>
            <Text style={styles.text}>Nama: {props.name}</Text>
            <Text style={styles.text}>NPM: {props.npm}</Text>
            <Text style={styles.text}>Jurusan: {props.major}</Text>
            <Text style={styles.text}>Hobi: {props.hobbies}</Text>
        </View>
    );
};

export default ProfileRFC;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center'
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333'
    },
    text: {
        fontSize: 14,
        marginBottom: 5,
        textAlign: 'center',
        color: '#666'
    }
});