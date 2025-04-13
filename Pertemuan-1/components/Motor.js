import React, { Component } from 'react';
import { Text, View } from 'react-native';
var name = 'Honda';
name = "Yamahaaaa";
const types = {
    type: 'Matic',
    model: 'Vario',
    harga: 15000000
}
const Motor  = () => {
        return (
            <View>
                <Text>Hi, I'm a motorcycle</Text>
                <Text>Merek: {name}</Text>

                <Text>Model: {types.type}</Text>
                <Text>Model: {types.model}</Text>
                <Text>Harga: {types.harga}</Text>
            </View>
        );
}

export default Motor;
