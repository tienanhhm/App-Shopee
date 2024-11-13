import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const ProductScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const switchImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % product.images.length);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <TouchableOpacity onPress={switchImage}>
          <Image source={product.images[currentImageIndex]} style={styles.productImage} />
        </TouchableOpacity>

        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>{product.price} VND</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
      </ScrollView>

      {/* Menu Bar */}
      <View style={styles.menuBar}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.menuText}>Trang Chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Sản Phẩm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.menuText}>Tôi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
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

export default ProductScreen;
