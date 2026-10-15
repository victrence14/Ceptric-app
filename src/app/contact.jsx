import { StyleSheet, Text, View } from 'react-native'
import { ThemedText } from '@/components/themed-text';

import {Link} from 'expo-router'
import React from 'react'

const contact = () => {
  return (
    <View style={styles.container}>
      <ThemedText themeColor="textSecondary">
        Contact information will appear here.
      </ThemedText>
    </View>
  )
}

export default contact

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  link: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },
})
