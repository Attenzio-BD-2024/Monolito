// /pregunta.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSearchParams } from 'expo-router';

const Pregunta = () => {
  const { pregunta } = useSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pregunta</Text>
      <Text style={styles.question}>{pregunta || 'No se encontró información válida.'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
});

export default Pregunta;
