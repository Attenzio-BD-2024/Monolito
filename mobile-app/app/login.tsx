import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Importar useRouter de expo-router

const image = require('../assets/images/transparent_logo.png');

const Login = () => {
  const router = useRouter(); // Usamos el hook useRouter de expo-router
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí deberías hacer la validación real de login
    if (email === 'julieta@gmail.com' && password === '12345') {
      // Si el login es exitoso, redirigir al escáner de QR
      router.push('/QRScanner');  // Redirige a la pantalla QRScanner usando expo-router
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Usuario o correo"
        placeholderTextColor="#333"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese contraseña"
        placeholderTextColor="#333"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.forgotPassword} onPress={() => alert('Recuperar contraseña')}>
        <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <Text style={styles.registerText}>
        ¿Aún no tienes cuenta?{' '}
        <Text style={styles.registerLink} onPress={() => router.push('/Register')}>  {/* Cambiar a router.push */}
          Regístrate
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
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#f9f9f9',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#FF6C00',
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  registerText: {
    fontSize: 14,
    color: '#333',
  },
  registerLink: {
    color: '#007BFF',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default Login;