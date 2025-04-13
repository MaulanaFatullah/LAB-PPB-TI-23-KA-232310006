import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ImageBox = () => {
  return (
    <View style={styles.imageBox}>
      <FontAwesome name="user-circle" size={100} color="#555" style={styles.avatar} />

    </View>
  );
};

const styles = StyleSheet.create({
  imageBox: {
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
  },
});

export default ImageBox;
