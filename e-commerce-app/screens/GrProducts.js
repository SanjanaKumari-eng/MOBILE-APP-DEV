import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, SectionList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GlobalContext } from './GlobalContext'; // Ensure this path is correct

const GrProducts = [
  {
    category: 'Condiments and Sauce',
    data: [
      { id: 1, name: 'Heinz ketchup', description: 'A globally recognized brand known for its iconic ketchup, offering a rich and tangy tomato flavor.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6cd6b3d671a240d82aa5296b38ea6f23', price: '₹6.26', rating: 4.5 },
      { id: 2, name: 'Hellmann Mayonnaise', description: 'A leading mayonnaise brand renowned for its creamy texture and balanced taste, ideal for sandwiches and salads.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/b5694796da107f3a51d02e90a1220a07', price: '₹5.30', rating: 4.7 },
      { id: 3, name: 'Kikkoman Soysauce', description: 'A traditional soy sauce manufacturer famous for its naturally brewed soy sauce, widely used in Asian cuisine.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8a144bfba3d418850f527df196be2164', price: '₹4.08', rating: 4.8 }
    ]
  },
  {
    category: 'Snacks',
    data: [
      { id: 4, name: 'Lays chips', description: 'Lays offers a wide variety of classic and unique flavored potato chips, renowned for their crispy texture and quality ingredients.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6ee1c08484c97ce819f4cc5d95f3d73e', price: '₹0.99', rating: 4.6 },
      { id: 5, name: 'Planters mixed nuts', description: 'Planters is a trusted brand known for its premium quality nuts, including a diverse range of mixed nuts perfect for snacking and cooking.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/99ae1c9d62ef2303f1eff1a7a41bfee8', price: '₹6.49', rating: 4.8 },
      { id: 6, name: 'Nature valley Granola bar', description: 'Nature Valley provides wholesome granola bars made with natural ingredients, ideal for a healthy, on-the-go snack.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/3ac0114bcef6d675102909559b6b773c', price: '₹4.29', rating: 4.8 }
    ]
  },
  {
    category: 'Pasta and Rice',
    data: [
      { id: 7, name: 'Pasta Prima', description: 'Artisan-crafted spaghetti made from the finest durum wheat.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/5b58208371ab8c3f8af65f5570f0a35c', price: '₹2.99', rating: 4.4 },
      { id: 8, name: 'Rice Harmony', description: 'Premium organic brown rice, rich in nutrients and flavor.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/9a5b0b71418c1ede9be843fd0866785c', price: '₹25.99', rating: 4.5 },
      { id: 9, name: 'Quinoa Pure', description: 'Sustainably sourced, high-protein quinoa for healthy meals.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/b02532e3517bd271cef518eb58fa5e45', price: '₹6.49', rating: 4.4 },
    ]
  },
  {
    category: 'Baking Items',
    data: [
      { id: 10, name: 'King Arthur Flour', description: 'King Arthur Flour offers high-quality, unbleached all-purpose flour perfect for all your baking needs.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d7fec1484223b79aa801e78b809be482', price: '₹4.99', rating: 4.9 },
      { id: 11, name: 'Arm and Hammer Baking Soda', description: 'Arm & Hammer provides pure, versatile baking soda for baking, cleaning, and deodorizing.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/5616a0522f320f51d11a0a8c60ff16a0', price: '₹1.29', rating: 4.8 },
      { id: 12, name: 'Ghirardelli chocolate chips', description: 'Ghirardelli offers premium chocolate chips known for their rich flavor and smooth texture, ideal for baking.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/4688bbf38009f43e4bb712b1a5f5e242', price: '₹8.79', rating: 4.9 }
    ]
  },
];

const ProductPage = ({ route }) => {
  const { category } = route.params;
  const { state, dispatch } = useContext(GlobalContext);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const isFavorite = (productId) => state.favorites.some((item) => item.id === productId);
  const isInCart = (productId) => state.cart.some((item) => item.id === productId);

  useEffect(() => {
    setCartItems(state.cart.map(item => item.id));
    setFavoriteItems(state.favorites.map(item => item.id));
  }, [state.cart, state.favorites]);

  const selectedCategory = GrProducts.find(section => section.category === category);

  if (!selectedCategory) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Category not found</Text>
      </SafeAreaView>
    );
  }

  const toggleCart = (product) => {
    const isInCart = cartItems.includes(product.id);
    const updatedCartItems = isInCart
      ? cartItems.filter(item => item !== product.id)
      : [...cartItems, product.id];
    
    if (isInCart) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: product.id });
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
    }
    
    setCartItems(updatedCartItems);
  };

  const toggleFavorites = (product) => {
    const isFavorite = favoriteItems.includes(product.id);
    const updatedFavoriteItems = isFavorite
      ? favoriteItems.filter(item => item !== product.id)
      : [...favoriteItems, product.id];
    
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: product.id });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: { ...product, imageUrl: product.imageUrl } });
    }
    
    setFavoriteItems(updatedFavoriteItems);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={[selectedCategory]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => toggleCart(item)}>
                <Ionicons
                  name={isInCart(item.id) ? "cart" : "cart-outline"}
                  size={30}
                  color={isInCart(item.id) ? "#32cd32" : "#32cd32"}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleFavorites(item)}>
                <Ionicons
                  name={isFavorite(item.id) ? "heart" : "heart-outline"}
                  size={30}
                  color={isFavorite(item.id) ? "#FF6347" : "#FF6347"}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        renderSectionHeader={({ section: { category } }) => (
          <Text style={styles.category}>{category}</Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  category: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200EE',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  productContainer: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6200EE',
    marginTop: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  errorText: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ProductPage;
