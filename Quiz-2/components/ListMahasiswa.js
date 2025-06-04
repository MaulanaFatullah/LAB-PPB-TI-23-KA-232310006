import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListMahasiswa = () => {
  const [mahasiswa, setMahasiswa] = useState([
    { id: '1', nama: 'Andi Saputra', npm: '210001', gender: 'L' },
    { id: '2', nama: 'Sari Melati', npm: '210002', gender: 'P' },
    { id: '3', nama: 'Budi Santoso', npm: '210003', gender: 'L' },
    { id: '4', nama: 'Dewi Lestari', npm: '210004', gender: 'P' },
    { id: '5', nama: 'Rizky Pratama', npm: '210005', gender: 'L' },
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
