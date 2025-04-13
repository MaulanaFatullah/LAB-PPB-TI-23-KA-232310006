import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import Car from './components/Car';
import Motor from './components/Motor';
import Bicycle from './components/Bicycle';

export default function App() {
  return (
    <ImageBackground source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/LOGO_IBIK.png/1200px-LOGO_IBIK.png",}} resizeMode="cover" style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <SafeAreaView>
        <Bicycle />
      </SafeAreaView>
    </ImageBackground>
    // <View style={styles.container}>
    //   <Text>Masukkan Nama</Text>
    //   <TextInput style={styles.input}></TextInput>
    //   <Car />
    //   <Motor />
    //   <Bicycle />
    //   <StatusBar style="auto" />
    // </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: "50%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 12,
  },
});
