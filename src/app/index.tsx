import { Pressable, StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.logo}>
          <Ionicons name="book" size={80} color="#ffffff" />
        </View>
        <ThemedText type="subtitle" style={styles.brand}>Ceptric</ThemedText>
        <ThemedText themeColor="textSecondary" style={styles.description}>
          Your reading life more organised.
        </ThemedText>
        <View style={styles.actions}>
          <Link href="/login" asChild>
            <Pressable style={styles.primaryButton}>
              <ThemedText style={styles.primaryButtonText}>Log in</ThemedText>
            </Pressable>
          </Link>
          <Link href="/register" asChild>
            <Pressable style={styles.secondaryButton}>
              <ThemedText style={styles.secondaryButtonText}>Register</ThemedText>
            </Pressable>
          </Link>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    width: 96,
    height: 96,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a0a29',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
    marginBottom: 20,
  },
  brand: {
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginTop: 8,
    maxWidth: 300,
  },
  actions: {
    width: '100%',
    maxWidth: 300,
    marginTop: 32,
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#1a0a29',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 15,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontWeight: 700,
  },
  secondaryButton: {
    borderColor: '#1a0a29',
    backgroundColor: '#1a0a29',
    borderWidth: 10,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 15,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#ffffff',
    fontWeight: 700,
  },
});
