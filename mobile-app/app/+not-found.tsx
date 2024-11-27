import { useRouter, Stack } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  const router = useRouter();

  const navigateHome = () => {
    router.push('/App');
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This screen doesn't exist.</ThemedText>
        <ThemedText type="link" style={styles.link} onPress={navigateHome}>
          Go to home screen!
        </ThemedText>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    textDecorationLine: 'underline',  // Añade estilo de enlace si lo deseas
  },
});