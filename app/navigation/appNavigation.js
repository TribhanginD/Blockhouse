import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { AuthContext } from '../AuthContext';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const { isAuthenticated } = useContext(AuthContext);

  return (

      <Stack.Navigator>
   
          <>
            <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUpScreen} />
          </>
       
      </Stack.Navigator>
  
  );
}
