import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ProfileRFC from './components/ProfileRFC';
import ProfileRCC from './components/ProfileRCC';

const App = () => {
  const profileData = {
    name: "Maulana Fatullah",
    npm: "232310006",
    major: "Teknologi Informasi",
    hobbies: "Mendengarkan Musik"
  };

  return (
    <View style={styles.mainContainer}>
      <ProfileRFC {...profileData} />
      <ProfileRCC {...profileData} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 20,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0'
  },
});

export default App;