import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

const products = [
  {
    id: '1',
    name: 'Sản phẩm 1',
    images: [require('../assets/sp1.jpg'), require('../assets/sp2.jpg'), require('../assets/sp3.jpg')],
    price: '500,000',
    description: 'Mô tả chi tiết của sản phẩm 1.',
  },
  {
    id: '2',
    name: 'Sản phẩm 2',
    images: [require('../assets/sp2.jpg'), require('../assets/sp1.jpg')],
    price: '700,000',
    description: 'Mô tả chi tiết của sản phẩm 2.',
  },
  {
    id: '3',
    name: 'Sản phẩm 3',
    images: [require('../assets/sp3.jpg'), require('../assets/sp2.jpg')],
    price: '700,000',
    description: 'Mô tả chi tiết của sản phẩm 3.',
  },
  {
    id: '4',
    name: 'Sản phẩm 4',
    images: [require('../assets/sp1.jpg'), require('../assets/sp3.jpg')],
    price: '700,000',
    description: 'Mô tả chi tiết của sản phẩm 4.',
  },
  {
    id: '5',
    name: 'Sản phẩm 5',
    images: [require('../assets/sp1.jpg'), require('../assets/sp2.jpg'), require('../assets/sp3.jpg')],
    price: '500,000',
    description: 'Mô tả chi tiết của sản phẩm 5.',
  },
  {
    id: '6',
    name: 'Sản phẩm 6',
    images: [require('../assets/sp2.jpg'), require('../assets/sp1.jpg')],
    price: '700,000',
    description: 'Mô tả chi tiết của sản phẩm 6.',
  },
  {
    id: '7',
    name: 'Sản phẩm 7',
    images: [require('../assets/sp3.jpg'), require('../assets/sp2.jpg')],
    price: '700,000',
    description: 'Mô tả chi tiết của sản phẩm 7.',
  },
  {
    id: '8',
    name: 'Sản phẩm 8',
    images: [require('../assets/sp1.jpg'), require('../assets/sp3.jpg')],
    price: '700,000',
    description: 'Mô tả chi tiết của sản phẩm 8.',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Trang Chủ</Text>
        <TextInput style={styles.searchBar} placeholder="Tìm kiếm sản phẩm..." />
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productContainer}
            onPress={() => navigation.navigate('Product', { product: item })}
          >
            <Image source={item.images[0]} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#6200ea',
    padding: 15,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  productContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productName: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  menuBar: {
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
