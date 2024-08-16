import React, { useState, useContext } from 'react';
import { View, Text, SectionList, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GlobalContext } from './GlobalContext'; // Adjust the import path as needed

const TProducts = [
  {
    category: 'Action figure and construction toys',
    data: [
      { id: 1, name: 'Hasbro toy', description: 'A leading global toy company known for its popular action figures such as G.I. Joe and Transformers.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/5a543a0d658d22ba3049fe382359fccb', price: '₹13.45', rating: 4.5 },
      { id: 2, name: 'Lego toy', description: 'The world leading manufacturer of interlocking brick construction toys, offering sets that inspire creativity and imagination.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/21af57c2ca20f598246ee9b35fb9d72f', price: '₹17.87', rating: 4.7 },
      { id: 3, name: 'Mega Bloks', description: 'Provides large interlocking brick sets aimed at younger children, with themes ranging from everyday life to popular franchises.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/a05dd37786c62772eb222b2f0fbd0f7e', price: '₹36.25', rating: 4.8 }
    ]
  },
  {
    category: 'Fantasy and adventure playset',
    data: [
      { id: 4, name: 'Playmobil Pirate ship playset', description: 'Offers highly detailed pirate ship playsets with figures and accessories, known for their durability and imaginative play.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2d903cd7389ea1131378fed3b79202b7', price: '₹62.99', rating: 4.6 },
      { id: 5, name: 'Fisher Price Space station playset', description: 'Produces space station playsets designed for younger children, featuring interactive elements and durable construction.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/b9b967e19918085d96e7e7b9006d8fee', price: '₹33.49', rating: 4.8 },
      { id: 6, name: 'Scleich Dinosaur playset', description: 'Known for high-quality, hand-painted dinosaur figures and playsets that encourage imaginative play and learning.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/f2d1d2c550dd92c60f8db5cfba4c8dbf', price: '₹44.29', rating: 4.8 }
    ]
  },
  {
    category: 'Outdoor and educational toys',
    data: [
      { id: 7, name: 'Thames & Kosmos chemistry kit', description: 'Offers a wide range of high-quality science kits and chemistry sets designed to engage children in STEM learning.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/1935767b6c7c8cf30a6e4c0c92891a55', price: '₹23.99', rating: 4.4 },
      { id: 8, name: 'Sphero auto robot kit', description: 'Known for its programmable robots that teach coding and robotics through engaging, interactive play.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/ce5dfc78e19ccb347ebc701ebb7eb611', price: '₹58.99', rating: 4.5 },
      { id: 9, name: 'Wilson Sporting Goods soccer ball', description: 'Offers high-quality sports equipment, including soccer balls and basketballs, for both casual and competitive play.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d0c51f23061fc66f2bcc4b9cb9786920', price: '₹19.49', rating: 4.4 },
    ]
  },
  {
    category: 'Board games and puzzles',
    data: [
      { id: 10, name: 'Mattel scrabble gameset', description: 'Distributes Scrabble outside of North America, providing a range of editions including travel and junior versions.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/9734cc682d2b496a52d07061571d32f1', price: '₹33.99', rating: 4.9 },
      { id: 11, name: 'Ravensburger jigsaw puzzle set', description: 'A leading producer of high-quality jigsaw puzzles known for their precision-cut pieces and diverse themes.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/56118cd7ec5ee880947ac3eab862e527', price: '₹48.29', rating: 4.8 },
      { id: 12, name: 'Asmodee strategy gameset', description: 'A major publisher of popular strategy games such as Catan, Ticket to Ride, and Carcassonne.', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/bcaf6193e957024950c654eaf5ff0603', price: '₹51.79', rating: 4.9 }
    ]
  },
];

const ProductPage = ({ route }) => {
  const { category } = route.params;
  const selectedCategory = TProducts.find(section => section.category === category);
  const { state, dispatch } = useContext(GlobalContext); // Assuming you have a global context setup

  const [cartItems, setCartItems] = useState(state.cart.map(item => item.id));
  const [favoriteItems, setFavoriteItems] = useState(state.favorites.map(item => item.id));

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
                  name={cartItems.includes(item.id) ? "cart" : "cart-outline"}
                  size={30}
                  color={cartItems.includes(item.id) ? "#32cd32" : "#32cd32"}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleFavorites(item)}>
                <Ionicons
                  name={favoriteItems.includes(item.id) ? "heart" : "heart-outline"}
                  size={30}
                  color={favoriteItems.includes(item.id) ? "#FF6347" : "#FF6347"}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        renderSectionHeader={({ section: { category } }) => (
          <Text style={styles.category}>{category}</Text>
        )}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: 'red',
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
  },
  productContainer: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 10,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default ProductPage;
