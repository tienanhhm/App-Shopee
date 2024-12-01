  import React, { useState } from 'react';
  import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
  import Navbar from '../components/Navbar';

  const PaymentScreen = ({ navigation }) => {
    const [address, setAddress] = useState('');
    const total = 300000; // Tổng tiền (dùng giá trị động thay thế nếu có)

    const handlePayment = () => {
      if (!address) {
        Alert.alert('Lỗi', 'Vui lòng nhập địa chỉ giao hàng!');
        return;
      }
      Alert.alert('Thành công', 'Thanh toán thành công!');
      setTimeout(() => navigation.navigate('Home'), 2000);
    };

    return (
      <View style={{ flex: 1 }}>
        <Navbar title="Thanh Toán" />
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Nhập địa chỉ giao hàng"
            value={address}
            onChangeText={setAddress}
          />
          <Text style={styles.total}>Tổng tiền: {total} VND</Text>
          <Button title="Thanh toán" onPress={handlePayment} />
        </View>
        <TabBar state={{ index: 2 }} navigation={navigation} />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    input: {
      height: 40,
      borderWidth: 1,
      marginBottom: 15,
      padding: 10,
      borderColor: 'gray',
    },
    total: {
      fontSize: 18,
      marginBottom: 20,
    },
  });

  export default PaymentScreen;
