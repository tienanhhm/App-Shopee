import React from 'react';
import { View, Text, ImageBackground, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => (
  <ImageBackground source={require('../assets/background.jpg')} style={styles.container}>
    <View style={styles.content}>
      <Button title="Đăng nhập" onPress={() => navigation.navigate('Login')} />
      <Button title="Đăng ký" onPress={() => navigation.navigate('SignUp')} />
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  content: { width: '80%', justifyContent: 'space-around', height: 150 },
});

export default WelcomeScreen;
