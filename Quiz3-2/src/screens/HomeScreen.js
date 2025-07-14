import { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image,
    Alert,
    SafeAreaView,
    Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-root-toast';

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
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState({});
    const [completedOrders, setCompletedOrders] = useState([]);
    const navigation = useNavigation();

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

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingIndex = prevCart.findIndex(item => item.id === product.id);
            if (existingIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingIndex].quantity += 1;
                return updatedCart;
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });

        Toast.show(`${product.name} ditambahkan ke keranjang`, {
            duration: Toast.durations.SHORT,
            position: 120,
            backgroundColor: '#2e86de',
            textColor: '#fff',
            shadow: true,
            animation: true,
            hideOnPress: true,
        });

    };

    return (
        <ScrollView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.welcome}>Selamat datang, {username}!</Text>
                    <View style={styles.cartContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart', { cart, products })}>
                            <Text style={styles.cartText}>🛒 Keranjang ({cart.length})</Text>
                        </TouchableOpacity>
                    </View>
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
                                    onPress={() => addToCart(product)}
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
                                    onPress={() => addToCart(product)}
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        elevation: 2,
    },
    cartContainer: {
        backgroundColor: '#ff9f43',
        padding: 10,
        borderRadius: 20,
    },
    cartText: {
        color: '#ffffff',
        fontWeight: 'bold',
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