import React from 'react';
// Adjust the path to your AuthContext and AppNavigation
import { AuthProvider } from './AuthContext';
import AppNavigation from './navigation/appNavigation'; // Ensure this path is correct
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <AuthProvider>

        <AppNavigation />
 
    </AuthProvider>
  );
}
