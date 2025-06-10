import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListMahasiswa = () => {
  const [mahasiswa, setMahasiswa] = useState([
    { id: '1', nama: 'Adi Saputra', npm: '23230001', gender: 'L' },
    { id: '2', nama: 'Azzahra K.Z.S', npm: '23230002', gender: 'P' },
    { id: '3', nama: 'Luthfi Mayoga', npm: '23230003', gender: 'L' },
    { id: '4', nama: 'Helena Jemima W.', npm: '23230004', gender: 'p' },
    { id: '5', nama: 'Steven Gyasi', npm: '23230005', gender: 'L' },
    { id: '6', nama: 'Maulana Fatullah', npm: '23230006', gender: 'L' },
  ]);

  const renderItem = ({ item }) => {
    // Set warna berdasarkan gender
    const bgColor = item.gender === 'L' ? '#bbdefb' : '#e0f7fa';          // biru muda / hijau muda
    const textColor = item.gender === 'L' ? '#0d47a1' : '#00796b';        // biru tua / hijauu tua

    return (
      <View style={[styles.card, { backgroundColor: bgColor }]}>
        <Text style={[styles.nama, { color: textColor }]}>{item.nama}</Text>
        <Text style={[styles.npm, { color: textColor }]}>NPM: {item.npm}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Mahasiswa</Text>
      <FlatList
        data={mahasiswa}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  nama: {
    fontSize: 18,
    fontWeight: '600',
  },
  npm: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default ListMahasiswa;
