import React from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import TabBar from '../components/TabBar';

const ProfileScreen = ({ navigation, route }) => {
  const { fullName, phone, username } = route.params || {}; // Nhận thông tin từ navigation

  const handleLogout = () => {
    navigation.replace('Welcome');
  };

  return (
    <View style={{ flex: 1 }}>
      <Navbar title="Cá Nhân" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.info}>
          <Text style={styles.text}>Tên: {fullName || 'Chưa cập nhật'}</Text>
          <Text style={styles.text}>Số điện thoại: {phone || 'Chưa cập nhật'}</Text>
          <Text style={styles.text}>Tài khoản: {username}</Text>
        </View>
        <Button title="Lịch sử mua hàng" onPress={() => Alert.alert('Chưa có lịch sử mua hàng!')} />
        <Button title="Đăng xuất" color="red" onPress={handleLogout} />
      </View>
      <TabBar state={{ index: 2 }} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    padding: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ProfileScreen;
