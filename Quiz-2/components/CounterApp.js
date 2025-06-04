import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const onPressIncrement = () => {
    if (count >= 10) {
      alert('Nilai maksimal tercapai');
    } else {
      setCount(count + 1);
    }
  };
  const onPressDecrement = () => {
    setCount(count - 1);
  }
  const onPressReset = () => {
    setCount(0);
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 700, marginBottom: 18 }}>CounterApp Component</Text>
      <Text style={{ fontSize: 18 }}>Count: {count}</Text>
      <View style={styles.btnCounterContainer} >
        <TouchableOpacity style={styles.btnIncrement}><Text onPress={onPressIncrement} style={styles.btnText}>Increment</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnDecrement}><Text onPress={onPressDecrement} style={styles.btnText}>Decrement</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnReset}><Text onPress={onPressReset} style={styles.btnText} >Reset</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCounterContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  btnIncrement: {
    backgroundColor: 'skyblue',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  btnDecrement: {
    backgroundColor: 'salmon',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  btnReset: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default CounterApp;
