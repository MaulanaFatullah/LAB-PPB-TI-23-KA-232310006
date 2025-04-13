import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MyProfile = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <FontAwesome name="user-circle" size={100} color="#555" style={styles.avatar} />

            <Text style={styles.name}>Maulana Fatullah</Text>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.info}>232310006@student.ibik.ac.id</Text>
            <Text style={styles.label}>Telepon:</Text>
            <Text style={styles.info}>+62 8821 0482 377</Text>
            <Text style={styles.label}>Alamat:</Text>
            <Text style={styles.info}>Bogor Utara</Text>
            <Text style={styles.label}>Tanggal Lahir:</Text>
            <Text style={styles.info}>19 Juni 2001</Text>
            <Text style={styles.label}>Hobi:</Text>
            <Text style={styles.info}>Mendengarkan musik</Text>
        </ScrollView>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    avatar: {
      marginBottom: 20,
    },
    name: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      textAlign: 'center',
    },
    info: {
      fontSize: 18,
      textAlign: 'center',
    },
  });
  