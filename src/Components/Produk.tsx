// src/Pages/ProductPage.tsx
import React from 'react';
import { View, Alert } from 'react-native';
import ProductGrid from '../Components/ProductGrid';

const products = [
  {
    productName: 'Produk 1',
    productPrice: 'Rp 100.000',
    productImage: 'https://via.placeholder.com/150',
  },
  {
    productName: 'Produk 2',
    productPrice: 'Rp 200.000',
    productImage: 'https://via.placeholder.com/150',
  },
  {
    productName: 'Produk 3',
    productPrice: 'Rp 300.000',
    productImage: 'https://via.placeholder.com/150',
  },
  {
    productName: 'Produk 4',
    productPrice: 'Rp 400.000',
    productImage: 'https://via.placeholder.com/150',
  },
];

const ProductPage: React.FC = () => {
  const handleAddToCart = (index: number) => {
    Alert.alert(`Produk ${index + 1} ditambahkan ke keranjang!`);
  };

  return (
    <View style={{ flex: 1 }}>
      <ProductGrid products={products} onAddToCart={handleAddToCart} />
    </View>
  );
};

export default ProductPage;
