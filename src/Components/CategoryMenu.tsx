import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CategoryButton from './CategoryButton';

type CategoryMenuProps = {
  categories: { name: string; icon: string }[];
  onSelectCategory: (category: string) => void;
};

const CategoryMenu: React.FC<CategoryMenuProps> = ({ categories, onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState<string>('');

  const handlePress = (category: string) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };

  // Membagi kategori menjadi dua baris dan tiga kolom
  const rows = [];
  for (let i = 0; i < categories.length; i += 3) {
    rows.push(categories.slice(i, i + 3)); // Setiap baris berisi 3 kategori
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((category) => (
              <CategoryButton
                key={category.name}
                title={category.name}
                iconName={category.icon}
                onPress={() => handlePress(category.name)}
                active={category.name === activeCategory}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15, // Jarak antar baris
  },
});

export default CategoryMenu;
