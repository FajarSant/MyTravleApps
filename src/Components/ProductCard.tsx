// src/Components/ProductCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

type ProductCardProps = {
  productName: string;
  productPrice: string;
  productImage: string;
  onAddToCart: () => void; // Fungsi untuk menangani tombol "Tambah ke Keranjang"
};

const ProductCard: React.FC<ProductCardProps> = ({
  productName,
  productPrice,
  productImage,
  onAddToCart,
}) => {
  return (
    <View style={styles.card}>
      {/* Gambar Produk */}
      <Image source={{ uri: productImage }} style={styles.productImage} />

      {/* Nama Produk */}
      <Text style={styles.productName}>{productName}</Text>

      {/* Harga Produk */}
      <Text style={styles.productPrice}>{productPrice}</Text>

      {/* Tombol "Tambah ke Keranjang" */}
      <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCart}>
        <Text style={styles.addToCartText}>Tambah ke Keranjang</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 15,
    padding: 10,
    width: 150, // Ukuran lebar kartu
    marginHorizontal: 5,
    elevation: 5, // Efek bayangan untuk Android
  },
  productImage: {
    width: '100%',
    height: 120, // Ukuran gambar
    borderRadius: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e94e77',
    marginTop: 5,
  },
  addToCartButton: {
    marginTop: 10,
    backgroundColor: '#f7c51c',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ProductCard;
