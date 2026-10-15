import { StatusBar } from 'react-native';
import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1a0a29" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#1a0a29' },
          headerTintColor: '#ffffff',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: 'bold' },
          contentStyle: { backgroundColor: '#1a0a29' },
          sceneStyle: { backgroundColor: '#1a0a29' },
          
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#faf9f9',
          tabBarLabelStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="login" options={{ title: 'Log in', headerBackVisible: false }} />
        <Stack.Screen name="register" options={{ title: 'Register', headerBackVisible: false }} />
      </Stack>
    </>
  );
}

const styles = {container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#030102',
    borderWidth: 2,
    padding: 20,
  },
}
