import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <View style={styles.card}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price} VND</Text>
        <Text style={styles.description}>{product.description}</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => onAddToCart(product)}>
          <Text style={styles.addButtonText}>Thêm vào giỏ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#4CAF50',
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProductCard;
