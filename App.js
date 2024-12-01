import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import PaymentScreen from './screens/PaymentScreen';

const Stack = createStackNavigator();

export default function App() {
  const [users, setUsers] = useState([
    { username: 'admin', password: '123456' }, // Tài khoản mặc định
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login">
          {props => <LoginScreen {...props} users={users} />}
        </Stack.Screen>
        <Stack.Screen name="SignUp">
          {props => <SignUpScreen {...props} users={users} setUsers={setUsers} />}
        </Stack.Screen>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
