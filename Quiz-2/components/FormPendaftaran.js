import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const FormPendaftaran = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [nomorHP, setNomorHP] = useState('');

  const handleSubmit = () => {
    if (nama === '' || email === '' || nomorHP === '') {
      Alert.alert('Peringatan', 'Semua field harus diisi!');
    } else {
      Alert.alert(
        'Data Pendaftaran',
        `Nama: ${nama}\nEmail: ${email}\nNomor HP: ${nomorHP}`
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Pendaftaran</Text>

      <TextInput
        style={styles.input}
        placeholder="Nama Lengkap"
        value={nama}
        onChangeText={setNama}
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
        placeholder="Nomor HP"
        value={nomorHP}
        onChangeText={setNomorHP}
        keyboardType="phone-pad"
      />

      <Button title="Kirim" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
});

export default FormPendaftaran;
