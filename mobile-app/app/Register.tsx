import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Importar useRouter para la navegación

const logo = require('../assets/images/transparent_logo.png'); // Cambia el path si es necesario

const Register = () => {
  const router = useRouter(); // Hook para navegar entre pantallas
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Aquí puedes agregar la lógica para registrar al usuario
    alert(`Nombre: ${name}, Correo: ${email}, Contraseña: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Ingrese nombre"
        placeholderTextColor="#AAA"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese correo"
        placeholderTextColor="#AAA"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese contraseña"
        placeholderTextColor="#AAA"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Enviar</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>
        ¿Ya tienes una cuenta?{' '}
        <Text style={styles.loginLink} onPress={() => router.push('/login')}>
          Inicia Sesión
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    color: '#333',
  },
  registerButton: {
    backgroundColor: '#FF6C00',
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 14,
    color: '#333',
  },
  loginLink: {
    color: '#FF6C00',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default Register;
