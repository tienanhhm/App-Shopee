import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Navbar = ({ title }) => (
  <View style={styles.navbar}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  navbar: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
});

export default Navbar;
