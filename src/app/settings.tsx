import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const SettingsScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText themeColor="textSecondary">
        Settings information will appear here.
      </ThemedText>
    </ThemedView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});

