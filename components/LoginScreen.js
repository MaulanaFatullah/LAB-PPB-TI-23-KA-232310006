import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import Users from './const-data/User';
import processLogin from './utils/loginUtils';

const LoginScreen = () => {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const result = processLogin(userID, password, Users);
    if (result.success) {
      Alert.alert('Login Berhasil', result.message);
    } else {
      Alert.alert('Login gagal', result.message);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>

      <View style={styles.container}>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Image source={require("../assets/web-development.png")} style={{ width: 512, height: 256, resizeMode: 'center' }} />
        </View>
        <Text style={{ fontSize: 24, marginBottom: 20, textAlign: 'center' }}>Let's Happy Code !🫡</Text>
        <Text style={{ fontWeight: 600, marginBottom: 4 }}>UserID</Text>
        <TextInput style={styles.input} placeholder="Masukkan userID ..." value={userID} onChangeText={setUserID} autoCapitalize="none" />
        <Text style={{ fontWeight: 600, marginBottom: 4 }}>Password</Text>
        <TextInput style={styles.input} placeholder="Masukkan password..." value={password} onChangeText={setPassword} secureTextEntry autoCapitalize="none" />
        <TouchableOpacity style={styles.TouchableOpacity} onPress={handleLogin} activeOpacity={0.7}>
          <Text style={{ color: 'white', fontWeight: 600 }}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  TouchableOpacity: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
});

export default LoginScreen;
