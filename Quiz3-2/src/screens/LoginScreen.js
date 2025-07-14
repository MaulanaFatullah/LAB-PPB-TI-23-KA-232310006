import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email.includes('@ibik.ac.id') && !email.includes('@student.ibik.ac.id')) {
      Alert.alert(
        'Email Tidak Valid',
        'Hanya menerima email dengan domain:\n- @ibik.ac.id\n- @student.ibik.ac.id',
        [{ text: 'Mengerti' }]
      );
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password harus minimal 6 karakter');
      return;
    }

    const username = email.split('@')[0];
    navigation.navigate('Home', { username });
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={require('../assets/ibik-logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Kantin IBI Kesatuan</Text>

        <TextInput
          style={styles.input}
          placeholder="Email (@ibik.ac.id atau @student.ibik.ac.id)"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            onPress={handleLogin}
            color="#2e86de"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#1e272e',
  },
  input: {
    height: 50,
    borderColor: '#dfe4ea',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#ffffff',
    fontSize: 16,
  },
  buttonContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 10,
  },
});

export default LoginScreen;