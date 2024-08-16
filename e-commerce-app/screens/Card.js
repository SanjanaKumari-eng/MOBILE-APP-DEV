import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Card = ({ product, onAddToFavorite, onAddToCart }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => onAddToFavorite(product)}>
          <Icon name="heart-outline" size={30} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onAddToCart(product)}>
          <Icon name="cart-outline" size={30} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    color: '#000',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 10,
  },
});

export default Card;