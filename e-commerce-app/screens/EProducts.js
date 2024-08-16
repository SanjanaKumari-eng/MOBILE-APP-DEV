import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GlobalContext } from './GlobalContext';

const EProductsData = [
  {
    category: 'TV',
    data: [
      { id: 1, name: 'Samsung', description: 'Innovative electronics brand offering cutting-edge TVs with stunning picture quality and smart features.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/7239c23300c31c5e116afadaad47cab8', price: '₹500', rating: 4.5 },
      { id: 2, name: 'Sony', description: 'Renowned for premium TVs that deliver exceptional visual and audio performance with advanced technology.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/a8bc6f53a9359c0006436ddc299415ae', price: '₹600', rating: 4.7 },
      { id: 3, name: 'LG', description: 'Leading manufacturer of smart TVs known for vibrant displays and innovative features like OLED and AI technology.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/ffdb7a30c370ef2ef204245fe0ba42af', price: '₹700', rating: 4.8 }
    ]
  },
  {
    category: 'Camera',
    data: [
      { id: 4, name: 'Canon', description: 'Renowned for its high-performance cameras and lenses, Canon offers a wide range of options for both amateur and professional photographers.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d3e650218c992865554ac4e267126e33', price: '₹425', rating: 4.6 },
      { id: 5, name: 'Nikon', description: 'Nikon provides innovative imaging solutions with cutting-edge technology, known for its reliable cameras and superior image quality.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/1427384773e45b37022e53cca5b98007', price: '₹435', rating: 4.8 },
      { id: 6, name: 'Sony', description: 'Sony delivers advanced mirrorless and compact cameras with exceptional features, perfect for capturing stunning visuals with ease.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/4cd8b180896e350f7d5f5f522f162b6f', price: '₹445', rating: 4.8 }
    ]
  },
  {
    category: 'Laptop',
    data: [
      { id: 7, name: 'Apple', description: 'Premium laptops with sleek design, cutting-edge performance, and a seamless ecosystem.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/772f85e6eddcfc8b5ca1f9914daa9ef6', price: '₹885', rating: 4.4 },
      { id: 8, name: 'Dell', description: 'Versatile laptops offering robust performance and innovation for both business and personal use.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6cd70db6a608b70c740be889b365223a', price: '₹570', rating: 4.5 },
      { id: 9, name: 'Lenovo', description: 'Reliable laptops with advanced features and durability, ideal for various professional and everyday needs.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/18a5c960928884a38dd92ad34bd8e92b', price: '₹695', rating: 4.4 },
    ]
  },
  {
    category: 'Smart Watch',
    data: [
      { id: 10, name: 'Apple', description: 'Innovative smartwatches featuring seamless integration with Apple’s ecosystem and advanced health tracking.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/93b6d589777fa919dd0f9d83862f0bfd', price: '₹100', rating: 4.9 },
      { id: 11, name: 'Samsung', description: 'High-performance smartwatches with cutting-edge technology and customizable features for Android users.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/5ade486c05adb6f81f7dc064cb66ea60', price: '₹60', rating: 4.8 },
      { id: 12, name: 'Garmin', description: 'Durable smartwatches designed for fitness enthusiasts, offering precise tracking and long battery life.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/593d58a82e72874d9c11f986242c5760', price: '₹70', rating: 4.9 }
    ]
  },
];

const EProducts = ({ route }) => {
  const { category } = route.params;
  const { state, dispatch } = useContext(GlobalContext);

  if (!dispatch) {
    console.error("GlobalContext is not properly set up.");
    return null;
  }

  const isFavorite = (productId) => state.favorites.some((item) => item.id === productId);
  const isInCart = (productId) => state.cart.some((item) => item.id === productId);

  const handleAddToFavorites = (product) => {
    if (isFavorite(product.id)) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: product });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: product });
    }
  };

  const handleAddToCart = (product) => {
    if (isInCart(product.id)) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.name}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <Text style={styles.productRating}>Rating: {item.rating}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleAddToFavorites(item)}>
          <Ionicons
            name={isFavorite(item.id) ? 'heart' : 'heart-outline'}
            size={30}
            color="red"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAddToCart(item)}>
          <Ionicons
            name={isInCart(item.id) ? 'cart' : 'cart-outline'}
            size={30}
            color="blue"
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const filteredProducts = EProductsData.find((prod) => prod.category === category)?.data || [];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{category} Products</Text>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  productContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productRating: {
    fontSize: 14,
    color: '#888',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default EProducts;
