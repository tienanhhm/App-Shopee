import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, StyleSheet, Alert, Image, Modal, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Nếu bạn dùng Expo
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import TabBar from '../components/TabBar';
import Icon from 'react-native-vector-icons/Ionicons'; // Thêm icon library

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([
    { id: '1', name: 'Sản phẩm A', price: '100000', description: 'Mô tả sản phẩm A', image: require('../assets/sp1.jpg') },
    { id: '2', name: 'Sản phẩm B', price: '200000', description: 'Mô tả sản phẩm B', image: require('../assets/sp2.jpg') },
    { id: '3', name: 'Sản phẩm C', price: '300000', description: 'Mô tả sản phẩm C', image: require('../assets/sp3.jpg') },
  ]);
  const [cart, setCart] = useState([]);
  const [image, setImage] = useState(null); // Lưu ảnh đã chọn
  const [isModalVisible, setIsModalVisible] = useState(false); // Trạng thái hiển thị popup
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductDescription, setNewProductDescription] = useState('');

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert('Thêm vào giỏ hàng thành công!');
  };

  const handleUploadImage = async () => {
    // Kiểm tra quyền truy cập ảnh
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permission.granted) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri); // Lưu ảnh đã chọn
      }
    } else {
      Alert.alert('Quyền truy cập ảnh bị từ chối!');
    }
  };

  const handleAddProduct = () => {
    if (!image) {
      Alert.alert("Vui lòng tải lên ảnh sản phẩm!");
      return;
    }
    const newProduct = {
      id: (products.length + 1).toString(),
      name: newProductName,
      price: newProductPrice,
      description: newProductDescription,
      image: { uri: image },
    };
    setProducts([...products, newProduct]);
    setIsModalVisible(false); // Đóng modal sau khi thêm sản phẩm
    setImage(null); // Reset lại hình ảnh
    setNewProductName('');
    setNewProductPrice('');
    setNewProductDescription('');
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <Navbar title="Trang Chủ" />
      <TextInput
        style={styles.searchBar}
        placeholder="Tìm kiếm sản phẩm"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard product={item} onAddToCart={handleAddToCart} />
        )}
        contentContainerStyle={styles.list}
      />
      
      {/* Nút tải lên sản phẩm */}
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => setIsModalVisible(true)} // Mở modal khi bấm nút
      >
        <Icon name="cloud-upload-outline" size={40} color="white" />
      </TouchableOpacity>

      {/* Modal - Popup thêm sản phẩm */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Thêm Sản Phẩm</Text>
            <TextInput
              style={styles.input}
              placeholder="Tên sản phẩm"
              value={newProductName}
              onChangeText={setNewProductName}
            />
            <TextInput
              style={styles.input}
              placeholder="Giá sản phẩm"
              value={newProductPrice}
              onChangeText={setNewProductPrice}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Mô tả sản phẩm"
              value={newProductDescription}
              onChangeText={setNewProductDescription}
            />
            
            {/* Tải ảnh lên */}
            <Button title="Tải ảnh lên" onPress={handleUploadImage} />
            {image && <Image source={{ uri: image }} style={styles.uploadedImage} />}
            
            {/* Thêm sản phẩm */}
            <Button title="Thêm Sản Phẩm" onPress={handleAddProduct} />
            <Button title="Đóng" onPress={() => setIsModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <TabBar state={{ index: 0 }} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 10,
  },
  list: {
    paddingHorizontal: 10,
  },
  uploadButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    width: '80%',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  uploadedImage: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 8,
  },
});

export default HomeScreen;
