import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { Link, useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useTheme } from '@/hooks/use-theme';

export default function RegisterScreen() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.card}>
        <Pressable accessibilityRole="button" onPress={() => router.replace('/')} style={styles.backButton}>
          <ThemedText style={styles.backButtonText}>← Back to home</ThemedText>
        </Pressable>
        <ThemedText type="subtitle" style={styles.title}>Create an account</ThemedText>
        <ThemedText themeColor="textSecondary" style={styles.description}>Join Ceptric and start organising your reading.</ThemedText>
        <TextInput accessibilityLabel="Email address" autoCapitalize="none" autoComplete="email" keyboardType="email-address" placeholder="Email address" placeholderTextColor={theme.textSecondary} style={[styles.input, { backgroundColor: theme.backgroundElement, color: theme.text }]} />
        <TextInput accessibilityLabel="Password" autoComplete="new-password" placeholder="Password" placeholderTextColor={theme.textSecondary} secureTextEntry style={[styles.input, { backgroundColor: theme.backgroundElement, color: theme.text }]} />
        <Pressable accessibilityRole="button" style={styles.button}>
          <ThemedText style={styles.buttonText}>Register</ThemedText>
        </Pressable>
        <View style={styles.switchRow}>
          <ThemedText themeColor="textSecondary">Already have an account?</ThemedText>
          <Link href="/login" asChild>
            <Pressable accessibilityRole="link">
              <ThemedText style={styles.link}>Log in</ThemedText>
            </Pressable>
          </Link>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  card: { width: '100%', maxWidth: 400, alignSelf: 'center' },
  backButton: { alignSelf: 'flex-start', marginBottom: 24 },
  backButtonText: { color: '#3c87f7', fontWeight: 700 },
  title: { textAlign: 'center' },
  description: { textAlign: 'center', marginTop: 8, marginBottom: 28 },
  input: { borderRadius: 10, fontSize: 16, marginBottom: 12, paddingHorizontal: 16, paddingVertical: 14 },
  button: { alignItems: 'center', backgroundColor: '#1a0a29', borderRadius: 10, marginTop: 8, paddingVertical: 14 },
  buttonText: { color: '#ffffff', fontWeight: 700 },
  switchRow: { alignItems: 'center', flexDirection: 'row', gap: 6, justifyContent: 'center', marginTop: 20 },
  link: { color: '#3c87f7', fontWeight: 700 },
});
