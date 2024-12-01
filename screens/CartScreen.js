import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet, Alert } from 'react-native';
import Navbar from '../components/Navbar';
import TabBar from '../components/TabBar';

const CartScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  const handleRemoveItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      Alert.alert('Giỏ hàng rỗng!', 'Hãy thêm sản phẩm trước khi thanh toán.');
      return;
    }
    navigation.navigate('Payment');
  };

  return (
    <View style={{ flex: 1 }}>
      <Navbar title="Giỏ Hàng" />
      <View style={{ flex: 1 }}>
        {cart.length === 0 ? (
          <Text style={styles.emptyText}>Chưa có mặt hàng nào</Text>
        ) : (
          <FlatList
            data={cart}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={styles.cartItem}
                onPress={() => Alert.alert(`Đã chọn: ${item.name}`)}
              >
                <Text>{item.name}</Text>
                <Button title="Xóa" onPress={() => handleRemoveItem(index)} />
              </TouchableOpacity>
            )}
          />
        )}
        <Button title="Thanh toán" onPress={handleCheckout} />
      </View>
      <TabBar state={{ index: 1 }} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  emptyText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default CartScreen;
