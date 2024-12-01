import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TabBar = ({ state, navigation }) => {
  const tabs = [
    { name: 'Trang chủ', route: 'Home' },
    { name: 'Giỏ hàng', route: 'Cart' },
    { name: 'Cá nhân', route: 'Profile' },
  ];

  return (
    <View style={styles.tabBar}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={state.index === index ? styles.activeTab : styles.tab}
          onPress={() => navigation.navigate(tab.route)}
        >
          <Text style={styles.text}>{tab.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#4CAF50',
  },
  tab: {
    padding: 10,
  },
  activeTab: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  text: {
    color: 'white',
  },
});

export default TabBar;
