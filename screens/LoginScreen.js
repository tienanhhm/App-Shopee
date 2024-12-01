import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground } from 'react-native';

const LoginScreen = ({ navigation, users }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      Alert.alert('Thành công', 'Đăng nhập thành công!');
      navigation.navigate('Profile', { fullName: user.fullName, phone: user.phone, username: user.username });
    } else {
      Alert.alert('Lỗi', 'Sai tài khoản hoặc mật khẩu!');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')} // Đảm bảo bạn có hình ảnh background trong thư mục assets
      style={styles.container}
    >
      <Text style={styles.title}>Đăng Nhập</Text>
      <TextInput
        style={styles.input}
        placeholder="Tài khoản"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Đăng nhập" onPress={handleLogin} />
      <Button title="Quay lại" onPress={() => navigation.goBack()} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Để input dễ nhìn trên nền tối
    color: 'black',
  },
});

export default LoginScreen;
