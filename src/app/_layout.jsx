import { StatusBar } from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';



export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='#1a0a29' />
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: '#1a0a29' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: 'bold' },
          sceneStyle: { backgroundColor: '#1a0a29' },
          tabBarStyle: { backgroundColor: '#1a0a29' },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#faf9f9',
          tabBarLabelStyle: { fontWeight: 'bold' },
        }}
      >
        <Tabs.Screen name="index" options={{ title: 'Home', tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} /> }} />
        <Tabs.Screen name="books" options={{ title: 'Books', tabBarLabel: 'Books', tabBarIcon: ({ color, size }) => <Ionicons name="book-outline" color={color} size={size} /> }} />
        <Tabs.Screen name="create" options={{ title: 'Create', tabBarLabel: 'Create', tabBarIcon: ({ color, size }) => <Ionicons name="add-circle-outline" color={color} size={size} /> }} />
        <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarLabel: 'Profile', tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} /> }} />
        <Tabs.Screen name="settings" options={{ title: 'Settings', tabBarLabel: 'Settings', tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" color={color} size={size} /> }} />
        <Tabs.Screen name="(auth)" options={{ href: null, headerShown: false, tabBarStyle: { display: 'none' } }} />
        <Tabs.Screen name="about" options={{ href: null }} />
        <Tabs.Screen name="contact" options={{ href: null }} />
      </Tabs>
    </>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#1a0a29',
    borderWidth: 2,
    padding: 20,
  },
};
