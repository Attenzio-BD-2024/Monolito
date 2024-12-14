import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // Importa el hook useRouter de expo-router

// Asegúrate de que la ruta de la imagen sea correcta
const smallImage = require('../assets/images/small.png'); // Importa la imagen correctamente

const Bienvenida = () => {
  const router = useRouter(); // Usamos el hook useRouter de expo-router

  return (
    <View style={styles.container}>
      {/* Imagen superior */}
      <Image
        source={smallImage} // Cambia esto por tu imagen
        style={styles.image}
      />

      {/* Texto principal */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Lleva tu educación</Text>
        <Text style={styles.subtitle}>al máximo nivel</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullus luctus ornare lectus.
        </Text>
      </View>

      {/* Botones */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => router.push('/Register')} // Navega a la ruta de registro usando expo-router
        >
          <Text style={styles.registerButtonText}>Registrarse</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push('/Login')} // Navega a la ruta de inicio de sesión usando expo-router
        >
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',  // Ajusta la imagen para cubrir el área disponible
  },
  textContainer: {
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ff6600',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 30,
    width: '80%',
  },
  registerButton: {
    backgroundColor: '#ff6600',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButton: {
    borderWidth: 1,
    borderColor: '#ff6600',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#ff6600',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Bienvenida;