import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground } from 'react-native';

const SignUpScreen = ({ navigation, users, setUsers }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignUp = () => {
    if (users.some(u => u.username === username)) {
      Alert.alert('Lỗi', 'Tài khoản đã tồn tại!');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Lỗi', 'Mật khẩu không khớp!');
      return;
    }
    const newUser = { username, password, fullName, phone };
    setUsers([...users, newUser]);
    Alert.alert('Thành công', 'Đăng ký thành công!');
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')} // Đảm bảo bạn có hình ảnh background trong thư mục assets
      style={styles.container}
    >
      <Text style={styles.title}>Đăng Ký</Text>
      <TextInput
        style={styles.input}
        placeholder="Tên người dùng"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Số điện thoại"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
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
      <TextInput
        style={styles.input}
        placeholder="Xác nhận mật khẩu"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Đăng ký" onPress={handleSignUp} />
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

export default SignUpScreen;
