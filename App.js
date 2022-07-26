import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {
  const [number, setNumber] = useState(0)
  function randomNumber() {
    const newNumber = Math.floor(Math.random() * 100)
    setNumber(newNumber)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.numero} >{number}</Text>
      <TouchableOpacity style={styles.btn} onPress={randomNumber}>
        <Text style={{ color: '#fff' }}>Gerar Número</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numero: {
    fontSize: 38,

  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#000',
    width: '80%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10
  }
});
