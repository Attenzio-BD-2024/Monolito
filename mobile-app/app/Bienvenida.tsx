import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';  // Importa useNavigate para la navegación

const Bienvenida = () => {
  const navigate = useNavigate();  // Hook para navegar

  // Función que se ejecuta al presionar el botón
  const handleLogin = () => {
    navigate('/login');  // Redirige a la pantalla de login
  };

  return (
    <View style={styles.container}>
      <Text>Bienvenida a la app</Text>
      <Button title="Ir al Login" onPress={handleLogin} />  {/* Botón para ir al login */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
  },
});

export default Bienvenida;