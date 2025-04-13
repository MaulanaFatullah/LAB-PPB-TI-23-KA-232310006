import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ItemTypograph = () => {
    return (
        <View style={styles.box}>
            <Text
                style={styles.title}>
                History of Bicycle
            </Text>

            <Text style={styles.paragraph}>
                A bicycle, also called a <Text style={{ ...styles.paragraph, color: "red" }}>pedal cycle</Text>, <Text style={{ ...styles.paragraph, fontWeight: "bold" }}>bike</Text>, or <Text style={{ ...styles.paragraph, fontStyle: "italic" }}>cycle</Text>, is a human-powered or motor-powered assisted, pedal-driven, single-track vihicl, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist or bicyclist.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        padding: 40,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'brown',
        color: 'white',
        textAlign: 'center',
        textDecorationLine: 'underline',
        padding: 10,
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'justify',
    },
});

export default ItemTypograph;
