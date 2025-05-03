import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ColorChanger = () => {
    const [boxColor, setBoxColor] = useState('#4CAF50'); // Hijau
    const [buttonText, setButtonText] = useState('Ubah ke Pink');

    const changeColor = () => {
        if (boxColor === '#4CAF50') { // Hijau
            setBoxColor('#E91E63');  // Pink
            setButtonText('Ubah ke Hijau');
        } else {
            setBoxColor('#4CAF50'); // Hijau
            setButtonText('Ubah ke Pink');
        }
    };

    return (
        <View style={styles.container}>
            <View style={[styles.colorBox, { backgroundColor: boxColor }]} />

            <TouchableOpacity
                style={styles.button}
                onPress={changeColor}
            >
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    colorBox: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        backgroundColor: '#2196F3',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        elevation: 3,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ColorChanger;