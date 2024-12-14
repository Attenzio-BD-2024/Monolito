import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();  // Usar el esquema de color que defines en tu hook
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),  // Carga de fuentes
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();  // Ocultar la pantalla de carga cuando se haya cargado todo
    }
  }, [loaded]);

  // Si la fuente aún no está cargada, no se muestra nada
  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* Usamos el stack navigator de expo-router */}
      <Stack>
        {/* Pantalla principal que maneja las rutas definidas */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* Pantalla de error para manejar rutas no encontradas */}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />  {/* Asegura que el estatus de la barra de estado sea adecuado */}
    </ThemeProvider>
  );
}
