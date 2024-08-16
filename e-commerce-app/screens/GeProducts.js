import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, SectionList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GlobalContext } from './GlobalContext';

const GeProducts = [
    {
    category: 'Shirts',
    data: [
      { id: 1, name: 'Brooks Brothers', description: 'Timeless American style and quality craftsmanship in men\'s and women\'s clothing since 1818.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/1ed860c071fbdb41830366c5578300c1', price: '₹50', rating: 4.5 },
      { id: 2, name: 'Ralph Lauren', description: 'Signature Polo shirts that combine refined style with superior quality.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8eb5e1579da12fe24b414afeaed9137c', price: '₹60', rating: 4.7 },
      { id: 3, name: 'Uniqlo', description: 'Versatile and affordable shirts featuring simplicity and innovative fabrics.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/5e93fa00e3a5f71c01c2e608cba4a5e5', price: '₹70', rating: 4.8 }
    ]
  },
  {
    category: 'Trousers',
    data: [
      { id: 4, name: 'Levis', description: 'Iconic denim trousers known for their classic fit and durable quality.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/51c2d0b048f8f2ae4711b4e0d5ace7a7', price: '₹125', rating: 4.6 },
      { id: 5, name: 'Dockers', description: 'Versatile chinos offering comfort and style for both casual and business wear.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c0e477107006c913adef7f91b2106373', price: '₹135', rating: 4.8 },
      { id: 6, name: 'Bonobos', description: 'Premium trousers with a perfect fit and modern, stylish designs.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/52e20b4b020cb3c799b4d37d982436e9', price: '₹145', rating: 4.8 }
    ]
  },
  {
    category: 'Shoes',
    data: [
      { id: 7, name: 'Nike', description: 'Innovative athletic shoes designed for top performance and comfort.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/9434046dcb8032efdb3b2d48ae89e38c', price: '₹85', rating: 4.4 },
      { id: 8, name: 'Clarks', description: 'Timeless and comfortable shoes crafted with premium materials.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6abedeeb9a0b1620e3fb0740645de9fc', price: '₹70', rating: 4.5 },
      { id: 9, name: 'Timberland', description: 'Durable and stylish footwear perfect for outdoor and casual wear.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8db3dc5d070b48e4c52c019fe1a37f0b', price: '₹95', rating: 4.4 },
    ]
  },
  {
    category: 'Watches',
    data: [
      { id: 10, name: 'Rolex', description: 'Luxury watches renowned for their precision, elegance, and timeless design.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/3c9a7c101ba351a58e279ae615ec1507', price: '₹50', rating: 4.9 },
      { id: 11, name: 'Seiko', description: 'Innovative and reliable watches offering advanced technology and style.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/9f5d2c81d2f22857e3a1358cfd8617f0', price: '₹60', rating: 4.8 },
      { id: 12, name: 'Tag Heuer', description: 'High-performance sports watches combining functionality with sophisticated design.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/5e585aff2939270a4e08aa56e36d0cba', price: '₹50', rating: 4.9 },
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

  const selectedCategory = GeProducts.find(section => section.category === category);

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
      dispatch({ type: 'ADD_FAVORITE', payload: product });
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
    height: 150,
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
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ProductPage;
