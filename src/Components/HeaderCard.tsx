import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';

const HeaderCard = () => {
  const [text, setText] = useState<string>('');

  return (
    <View style={styles.box}>
      <View>
        <Text>Wisata Alam</Text>
      </View>
      <View style={styles.aboveInputContainer}>
        <Text style={styles.aboveText}>Hallo Fajar</Text>

        <View style={styles.locationContainer}>
          <Icon2 name="location-sharp" size={20} color="#007BFF" />
          <Text style={styles.locationText}>Karanganyar</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Carilah Wisatamu Disini"
        />

        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="bars" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 150,
    marginBottom: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'red',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  aboveInputContainer: {
    width: '100%',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  aboveText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  locationText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#555',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingLeft: 10,
    color: '#333',
  },
  iconContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HeaderCard;
