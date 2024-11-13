import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/Wellcome.jpg')} // Thay "your-image-name.jpg" bằng tên ảnh của bạn
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Chào Mừng Đến Với Trang Của Tôi</Text>

          {/* Các nút Đăng Ký và Đăng Nhập */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Đăng Ký')}
          >
            <Text style={styles.buttonText}>Đăng Ký</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Đăng Nhập')}
          >
            <Text style={styles.buttonText}>Đăng Nhập</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Menu Bar */}
      <View style={styles.menuBar}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.menuText}>Trang Chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.menuText}>Sản Phẩm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.menuText}>Tôi</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1, // Đảm bảo ScrollView có thể mở rộng
    justifyContent: 'center', // Căn giữa nội dung
    alignItems: 'center', // Căn giữa nội dung
    paddingBottom: 80, // Đảm bảo có đủ không gian cho menu bar ở dưới
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    marginTop: 20, // Để tạo khoảng cách từ trên xuống
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuBar: {
    position: 'absolute', // Đặt menu bar cố định ở dưới cùng
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#6200ea',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
  },
});
