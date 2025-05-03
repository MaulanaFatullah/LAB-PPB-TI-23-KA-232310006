import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class ProfileRCC extends Component {
  render() {
    return (
      <View style={[styles.container, styles.shadow]}>
        <Image source={require('../assets/avatar.png')} style={styles.avatar} />
        <Text style={styles.title}>Class Component</Text>
        <Text style={styles.text}>Nama: {this.props.name}</Text>
        <Text style={styles.text}>NPM: {this.props.npm}</Text>
        <Text style={styles.text}>Jurusan: {this.props.major}</Text>
        <Text style={styles.text}>Hobi: {this.props.hobbies}</Text>
      </View>
    );
  }
}

export default ProfileRCC;

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