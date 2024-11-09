import React, { Component } from 'react';
import { SafeAreaView, RefreshControl, StatusBar, StyleSheet, Text, View, FlatList } from 'react-native';
import HeaderCard from '../Components/HeaderCard';
import CategoryMenu from '../Components/CategoryMenu';
import ProductPage from '../Components/Produk';

export default class HomeScreens extends Component {
  state = {
    refreshing: false,
    activeCategory: '', // Menyimpan kategori aktif yang dipilih
  };

  // Handle pull-to-refresh
  onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 2000);
  };

  // Handle StatusBar color change based on scroll position
  handleScroll = (event: any) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    if (yOffset > 100) {
      StatusBar.setBackgroundColor('darkorange');
    } else {
      StatusBar.setBackgroundColor('red');
    }
  };

  // Callback ketika kategori dipilih
  handleCategorySelect = (category: string) => {
    this.setState({ activeCategory: category });
    console.log(`Kategori terpilih: ${category}`);
  };

  render() {
    const { refreshing, activeCategory } = this.state;

    const categories = [
      { name: 'Rumah-makan', icon: 'restaurant' },
      { name: 'Wisata', icon: 'map' },
      { name: 'Jeep', icon: 'car' },
      { name: 'Outbound', icon: 'flame' },
      { name: 'Kamp', icon: 'map' },
      { name: 'Hotel', icon: 'bed' },
    ];

    // Data untuk render ke FlatList
    const data = [
      { id: 'header', component: <HeaderCard /> },
      { id: 'category', component: (
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Pilih Kategori Produk</Text>
          <CategoryMenu categories={categories} onSelectCategory={this.handleCategorySelect} />
          <Text style={styles.selectedCategory}>Kategori Terpilih: {activeCategory}</Text>
        </View>
      ) },
      { id: 'products', component: <ProductPage /> },
    ];

    return (
      <SafeAreaView style={styles.container}>
        {/* StatusBar logic */}
        <StatusBar barStyle="dark-content" backgroundColor="red" animated={true} />

        {/* Main FlatList with RefreshControl */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => item.component}
          refreshing={refreshing}
          onRefresh={this.onRefresh}
          onScroll={this.handleScroll}
          scrollEventThrottle={16}
        />
      </SafeAreaView>
    );
  }
}

// Styles for the HomeScreens component
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectedCategory: {
    marginTop: 10,
    fontSize: 16,
    color: 'gray',
  },
});
