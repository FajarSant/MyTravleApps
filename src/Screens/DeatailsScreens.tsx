// src/Screens/DetailScreens.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailScreens: React.FC = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Screens</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Profile')} // Kembali ke layar sebelumnya (HomeScreen)
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DetailScreens;
