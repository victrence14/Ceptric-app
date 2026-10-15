import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useTheme } from '@/hooks/use-theme';
import { StackScreen } from 'expo-router/build/layouts/stack-utils';

export default function LoginScreen() {
  const theme = useTheme();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.card}>
        <ThemedText type="subtitle" style={styles.title}>Welcome back</ThemedText>
        <ThemedText themeColor="textSecondary" style={styles.description}>Log in to continue to Ceptric.</ThemedText>
        <TextInput accessibilityLabel="Email address" autoCapitalize="none" autoComplete="email" keyboardType="email-address" placeholder="Email address" placeholderTextColor={theme.textSecondary} style={[styles.input, { backgroundColor: theme.backgroundElement, color: theme.text }]} />
        <TextInput accessibilityLabel="Password" autoComplete="password" placeholder="Password" placeholderTextColor={theme.textSecondary} secureTextEntry style={[styles.input, { backgroundColor: theme.backgroundElement, color: theme.text }]} />
        <Pressable accessibilityRole="button" style={styles.button}>
          <ThemedText style={styles.buttonText}>Log in</ThemedText>
        </Pressable>
        
        <View style={styles.switchRow}>
          <ThemedText themeColor="textSecondary">New to Ceptric?</ThemedText>
          <Link href="/register" asChild>
            <Pressable accessibilityRole="link">
              <ThemedText style={styles.link}>Register</ThemedText>
            
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
  title: { textAlign: 'center' },
  description: { textAlign: 'center', marginTop: 8, marginBottom: 28 },
  input: { borderRadius: 10, fontSize: 20, marginBottom: 12, paddingHorizontal: 16, paddingVertical: 14 },
  button: { alignItems: 'center', backgroundColor: '#1a0a29', borderRadius: 15, marginTop: 8, paddingVertical: 14 },
  buttonText: { color: '#ffffff', fontWeight: 700 },
  switchRow: { alignItems: 'center', flexDirection: 'row', gap: 6, justifyContent: 'center', marginTop: 20 },
  link: { color: '#3c87f7', fontWeight: 700 },
});
