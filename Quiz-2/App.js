import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloScreen from './components/HelloScreen';
import CounterApp from './components/CounterApp';
import ListMahasiswa from './components/ListMahasiswa';

export default function App() {
  return (
    // <HelloScreen />
    // <CounterApp />
    <ListMahasiswa />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
