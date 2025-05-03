import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Latihan = () => {
    return (
        <View style={Styles.container}>
            <Image source={require = ("../../assets/icons/icon-boy.png")} />
            <View>
                <Text></Text>
                <TextInput></TextInput>
            </View>
            <View>
                <Text></Text>
                <TextInput></TextInput>
            </View>
            <TouchableOpacity />
            <Text>Or</Text>
            <TouchableOpacity />
        </View>
    );
}

export default Latihan;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    
});