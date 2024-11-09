import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type CategoryButtonProps = {
  title: string;
  iconName: string;
  onPress: () => void;
  active?: boolean;
};

const CategoryButton: React.FC<CategoryButtonProps> = ({ title, iconName, onPress, active = false }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, active && styles.activeButton]}
    >
      <View style={styles.iconContainer}>
        <Icon name={iconName} size={30} color={active ? '#fff' : '#3498db'} />
      </View>
      <Text style={[styles.buttonText, active && styles.activeButtonText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1, // Tombol akan mengisi ruang yang tersedia
    height: 120,  // Tinggi tombol yang tetap
    backgroundColor: '#eee',
    marginHorizontal: 5, // Menambahkan jarak horizontal antar tombol
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', // Ikon di atas teks
    aspectRatio: 1, // Membuat lebar dan tinggi tombol proporsional
  },
  activeButton: {
    backgroundColor: '#3498db',
  },
  iconContainer: {
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  activeButtonText: {
    color: '#fff',
  },
});

export default CategoryButton;
