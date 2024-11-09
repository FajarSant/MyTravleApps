// src/Components/ProductGrid.tsx
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

type ProductGridProps = {
  products: {
    productName: string;
    productPrice: string;
    productImage: string;
  }[];
  onAddToCart: (index: number) => void; // Fungsi untuk menangani tombol "Tambah ke Keranjang"
};

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart }) => {
  // Fungsi untuk merender setiap item pada FlatList
  const renderItem = ({ item, index }: { item: typeof products[0]; index: number }) => (
    <ProductCard
      productName={item.productName}
      productPrice={item.productPrice}
      productImage={item.productImage}
      onAddToCart={() => onAddToCart(index)}
    />
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2} // Mengatur jumlah kolom menjadi 2
      contentContainerStyle={styles.gridContainer}
    />
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    padding: 10,
    alignItems: 'center', // Membuat konten center
  },
});

export default ProductGrid;
