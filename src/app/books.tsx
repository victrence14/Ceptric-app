import { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { client } from '@/lib/appwrite';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function BooksScreen() {
  const [pingStatus, setPingStatus] = useState<string>();

  const pingAppwrite = async () => {
    setPingStatus('Checking connection…');

    try {
      await client.ping();
      setPingStatus('Connected to Appwrite.');
    } catch (error) {
      setPingStatus(error instanceof Error ? `Connection failed: ${error.message}` : 'Connection failed.');
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText themeColor="textSecondary">
        Your library and saved reading list will appear here.
      </ThemedText>
      <Pressable accessibilityRole="button" onPress={pingAppwrite} style={styles.button}>
        <ThemedText style={styles.buttonText}>Test Appwrite connection</ThemedText>
      </Pressable>
      {pingStatus && <ThemedText themeColor="textSecondary">{pingStatus}</ThemedText>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
  button: {
    backgroundColor: '#3c87f7',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 700,
  },
});
