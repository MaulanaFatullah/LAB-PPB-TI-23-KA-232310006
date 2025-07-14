import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image,
    Alert,
    SafeAreaView
} from 'react-native';

const products = [
    { id: 1, name: 'Nasi Goreng', price: 15000, category: 'makanan', image: require('../assets/nasi_goreng.jpg') },
    { id: 2, name: 'Mie Ayam', price: 12000, category: 'makanan', image: require('../assets/mie_ayam.jpg') },
    { id: 3, name: 'Sate Ayam', price: 20000, category: 'makanan', image: require('../assets/sate_ayam.jpg') },
    { id: 4, name: 'Bakso', price: 15000, category: 'makanan', image: require('../assets/bakso.jpg') },
    { id: 5, name: 'Ayam Geprek', price: 18000, category: 'makanan', image: require('../assets/ayam_geprek.jpg') },
    { id: 6, name: 'Nasi Uduk', price: 13000, category: 'makanan', image: require('../assets/nasi_uduk.jpg') },

    { id: 7, name: 'Es Teh', price: 5000, category: 'minuman', image: require('../assets/es_teh.jpg') },
    { id: 8, name: 'Es Jeruk', price: 7000, category: 'minuman', image: require('../assets/es_jeruk.jpg') },
    { id: 9, name: 'Jus Alpukat', price: 10000, category: 'minuman', image: require('../assets/jus_alpukat.jpg') },
    { id: 10, name: 'Kopi', price: 8000, category: 'minuman', image: require('../assets/kopi.jpg') },
    { id: 11, name: 'Air Mineral', price: 4000, category: 'minuman', image: require('../assets/air_mineral.jpg') },
];

const HomeScreen = ({ route }) => {
    const { username } = route.params;
    const [orders, setOrders] = useState({});

    const handleBuy = (productId) => {
        Alert.alert(
            'Konfirmasi Pembelian',
            `Beli ${products.find(p => p.id === productId).name}?`,
            [
                {
                    text: 'Batal',
                    style: 'cancel'
                },
                {
                    text: 'Beli',
                    onPress: () => {
                        setOrders(prev => ({
                            ...prev,
                            [productId]: {
                                status: 'Diproses',
                                timestamp: new Date().toLocaleTimeString()
                            }
                        }));

                        setTimeout(() => {
                            setOrders(prev => ({
                                ...prev,
                                [productId]: {
                                    ...prev[productId],
                                    status: 'Selesai'
                                }
                            }));
                        }, 5000);

                        Alert.alert(
                            'Pembelian Berhasil',
                            'Silakan lakukan pembayaran cash di kasir',
                            [{ text: 'OK' }]
                        );
                    }
                }
            ]
        );
    };

    return (
        <ScrollView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.welcome}>Selamat datang, {username}!</Text>
                    <Text style={styles.subtitle}>Silakan pilih menu favorit Anda</Text>
                </View>

                {/* Menu Makanan */}
                <Text style={styles.sectionTitle}>🍔 Menu Makanan</Text>
                <View style={styles.productGrid}>
                    {products
                        .filter(product => product.category === 'makanan')
                        .map(product => (
                            <View key={product.id} style={styles.productCard}>
                                <Image source={product.image} style={styles.productImage} />
                                <Text style={styles.productName}>{product.name}</Text>
                                <Text style={styles.productPrice}>Rp{product.price.toLocaleString()}</Text>

                                <TouchableOpacity
                                    style={styles.buyButton}
                                    onPress={() => handleBuy(product.id)}
                                >
                                    <Text style={styles.buyButtonText}>Beli</Text>
                                </TouchableOpacity>

                                {orders[product.id] && (
                                    <Text style={[
                                        styles.orderStatus,
                                        orders[product.id].status === 'Selesai'
                                            ? styles.statusCompleted
                                            : styles.statusProcessing
                                    ]}>
                                        {orders[product.id].status}
                                    </Text>
                                )}
                            </View>
                        ))}
                </View>

                {/* Menu Minuman */}
                <Text style={styles.sectionTitle}>🥤 Menu Minuman</Text>
                <View style={styles.productGrid}>
                    {products
                        .filter(product => product.category === 'minuman')
                        .map(product => (
                            <View key={product.id} style={styles.productCard}>
                                <Image source={product.image} style={styles.productImage} />
                                <Text style={styles.productName}>{product.name}</Text>
                                <Text style={styles.productPrice}>Rp{product.price.toLocaleString()}</Text>

                                <TouchableOpacity
                                    style={styles.buyButton}
                                    onPress={() => handleBuy(product.id)}
                                >
                                    <Text style={styles.buyButtonText}>Beli</Text>
                                </TouchableOpacity>

                                {orders[product.id] && (
                                    <Text style={[
                                        styles.orderStatus,
                                        orders[product.id].status === 'Selesai'
                                            ? styles.statusCompleted
                                            : styles.statusProcessing
                                    ]}>
                                        {orders[product.id].status}
                                    </Text>
                                )}
                            </View>
                        ))}
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f2f6',
        padding: 15,
    },
    header: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        elevation: 2,
    },
    welcome: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1e272e',
    },
    subtitle: {
        fontSize: 16,
        color: '#808e9b',
        marginTop: 5,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 15,
        color: '#ff6b6b',
    },
    productGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    productCard: {
        width: '48%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        elevation: 3,
        alignItems: 'center',
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 14,
        color: '#ff6b6b',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    buyButton: {
        backgroundColor: '#0be881',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    buyButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    orderStatus: {
        marginTop: 8,
        fontSize: 12,
        fontWeight: 'bold',
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    statusProcessing: {
        backgroundColor: '#ffdd59',
        color: '#cc8e35',
    },
    statusCompleted: {
        backgroundColor: '#05c46b',
        color: '#ffffff',
    },
});

export default HomeScreen;