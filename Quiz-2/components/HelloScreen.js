
import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, SafeAreaView, } from 'react-native';
const HelloScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.text}>Hello,Selamat Datang di Kuis React Native!</Text>
                <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.image} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => alert('Tombol berhasil ditekan!')}>
                <Text style={styles.buttonText}>Klik Saya!</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fcfcfc',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#555ddd',
        borderRadius: 12,
        padding: 10,
        width: '50%',
        marginHorizontal: 'auto',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    contentContainer: {
        alignItems: 'center',
        padding: 10,
    },
    image: {
        padding: 10,
        margin: 10,
        width: 100,
        height: 100,
    }
});

export default HelloScreen;
