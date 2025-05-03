import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    setSubmittedData({ name, email, phone });
  };

  return (
      <View style={styles.container}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Formulir Pendaftaran</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama lengkap"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TextInput
        style={styles.input}
        placeholder="No telp"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Button 
        title="Submit" 
        onPress={handleSubmit} 
        color="#2196F3"
      />

      {submittedData && (
        <View style={styles.dataContainer}>
          <Text style={styles.dataTitle}>Data Terdaftar:</Text>
          <Text>Nama: {submittedData.name}</Text>
          <Text>Email: {submittedData.email}</Text>
          <Text>No Telp: {submittedData.phone}</Text>
        </View>
      )}
    </View>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  dataContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  dataTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  }
});

export default RegistrationForm;