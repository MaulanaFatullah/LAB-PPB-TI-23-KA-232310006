import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import { CartContext } from './../../App';

export default function CartScreen({ navigation }) {
  const { cartItems, clearCart } = useContext(CartContext);

  useEffect(() => {
    Notifications.requestPermissionsAsync();
  }, []);

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      Alert.alert('Keranjang kosong', 'Silakan tambahkan item terlebih dahulu.');
      return;
    }

    // Kirim notifikasi lokal
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Pesanan Diterima 🍱',
        body: 'Terima kasih! Pesanan kamu sedang diproses.',
      },
      trigger: null,
    });

    clearCart();
    Alert.alert('Checkout berhasil', 'Pesanan kamu sedang diproses.');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Isi Keranjang</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name} - Rp {item.price}</Text>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Keranjang masih kosong</Text>}
      />
      <Button title="Checkout" onPress={handleCheckout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  item: { fontSize: 16, marginBottom: 5 },
  empty: { fontStyle: 'italic', color: 'gray' },
});
