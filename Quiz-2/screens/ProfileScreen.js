import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/profile.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Nama: Maulana Fatullah</Text>
      <Text style={styles.text}>Email: 202010006@student.ibik.ac.id</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  image: {
    width: 120, height: 120, borderRadius: 60, marginBottom: 20
  },
  text: {
    fontSize: 18, marginBottom: 10
  }
});

export default ProfileScreen;
