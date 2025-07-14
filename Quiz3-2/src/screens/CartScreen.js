import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Alert, Button, TouchableOpacity } from 'react-native';

const CartScreen = ({ route }) => {
  const [cart, setCart] = useState(() => {
    const initialCart = route.params.cart || [];
    return initialCart.map(item => ({ ...item, quantity: item.quantity || 1 }));
  });

  const { products } = route.params;
  const [orders, setOrders] = useState({});
  const [completedOrders, setCompletedOrders] = useState([]);

  useEffect(() => {
    completedOrders.forEach(orderId => {
      const product = products.find(p => p.id === orderId);
      if (product) {
        Alert.alert(
          'Pesanan Siap!',
          `${product.name} sudah siap diambil di kantin`
        );
      }
    });
  }, [completedOrders]);

  const total = cart.reduce((sum, item) => {
    return sum + (item.price || 0) * item.quantity;
  }, 0);

  const increaseQty = (index) => {
    const updated = [...cart];
    updated[index].quantity += 1;
    setCart(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...cart];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      setCart(updated);
    } else {
      Alert.alert("Minimal 1 item", "Jumlah tidak boleh kurang dari 1");
    }
  };

  const removeItem = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      Alert.alert('Keranjang Kosong', 'Tambahkan produk terlebih dahulu');
      return;
    }

    const newOrders = { ...orders };
    cart.forEach(product => {
      newOrders[product.id] = {
        status: 'Diproses',
        timestamp: new Date().toLocaleTimeString()
      };
    });
    setOrders(newOrders);

    const orderIds = cart.map(item => item.id);
    setTimeout(() => {
      setCompletedOrders(prev => [...prev, ...orderIds]);
      setOrders(prev => {
        const updated = { ...prev };
        orderIds.forEach(id => {
          if (updated[id]) {
            updated[id].status = 'Selesai';
          }
        });
        return updated;
      });
    }, 5000);

    setCart([]);

    Alert.alert(
      'Pembelian Berhasil',
      'Silakan lakukan pembayaran cash di kasir'
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Keranjang Belanja</Text>

      {cart.length === 0 ? (
        <Text style={styles.emptyText}>Keranjang Anda kosong</Text>
      ) : (
        <>
          {cart.map((product, index) => (
            <View key={`${product.id}-${index}`} style={styles.cartItem}>
              {product.image && (
                <Image source={product.image} style={styles.cartImage} />
              )}
              <View style={styles.itemInfo}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>
                  Rp{product.price.toLocaleString()} x {product.quantity}
                </Text>

                <View style={styles.controls}>
                  <TouchableOpacity onPress={() => decreaseQty(index)} style={styles.qtyButton}>
                    <Text style={styles.qtyText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.qtyDisplay}>{product.quantity}</Text>
                  <TouchableOpacity onPress={() => increaseQty(index)} style={styles.qtyButton}>
                    <Text style={styles.qtyText}>+</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => removeItem(index)} style={styles.removeButton}>
                    <Text style={styles.removeText}>Hapus</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}

          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: Rp{total.toLocaleString()}</Text>
          </View>
        </>
      )}

      <View style={styles.checkoutContainer}>
        <Button
          title={`Beli Sekarang (${cart.length} item)`}
          onPress={handleCheckout}
          color="#2e86de"
          disabled={cart.length === 0}
        />
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f6',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1e272e',
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
    color: '#808e9b',
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 2,
  },
  cartImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#ff6b6b',
  },
  totalContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6
  },
  qtyButton: {
    backgroundColor: '#ccc',
    padding: 6,
    borderRadius: 4
  },
  qtyText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  qtyDisplay: {
    marginHorizontal: 10,
    fontSize: 16
  },
  removeButton: {
    marginLeft: 16
  },
  removeText: {
    color: 'red',
    fontSize: 14
  },
});

export default CartScreen;