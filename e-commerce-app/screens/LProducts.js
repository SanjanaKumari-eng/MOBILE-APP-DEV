import React, { useState, useContext } from 'react';
import { View, Text, Image, SectionList, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GlobalContext } from './GlobalContext'; // Adjust the import path as needed

const LProducts = [
  {
    category: 'Ladies Kurta',
    data: [
      { id: 1, name: 'Floral Yoke Design Kurta Set', description: 'Pure Cotton Straight Kurta With patiala & dupatta', imageUrl: 'https://www.libas.in/cdn/shop/files/blue-yoke-design-cotton-anarkali-kurta-with-trousers-and-dupatta-libas-1.jpg?v=1713522725&width=1080', price: '₹1379', rating: 4.5 },
      { id: 2, name: 'Libas Pure Cotton Kurta Set', description: 'Very Comfortable To wear', imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20230916/nA5k/6504d872afa4cf41f5ea9290/-473Wx593H-466586735-mustard-MODEL.jpg', price: '₹2999', rating: 4.7 },
      { id: 3, name: 'Indo Western Kurta Set', description: 'beautiful product', imageUrl: 'https://d1f34ajap1v5tm.cloudfront.net/image/-Nu8SbFk5SUGAR%20Vineeta%27s%20Favourite%20Makeup%20Kit.jpg', price: '₹1799', rating: 4.8 }
    ]
  },
  {
    category: 'Watches',
    data: [
      { id: 4, name: 'Titan Raga Women White Brass Dial & Rose Gold Toned Straps Watch', description: 'Trending', imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQfvhNbGL3rjsJZ1GfYM0_fB3tLFNBZApYeSycBc_njtCRzxFwe6AM7b_QII0dWbDzClVKCRh9VCQa1cb1NbEl-T6mH59ScC6xG0AE8HbN5m_u2lioHtRNNZw', price: '₹15989', rating: 4.9 },
      { id: 5, name: 'Michael Kors watch', description: 'Silver Toned Analogue Watch', imageUrl: 'https://www.anguscoote.com.au/content/products/michael-kors-parker-ladies-watch-5555028-108930.jpg', price: '₹14157', rating: 4.8 }
    ]
  },
  {
    category: 'Lipstick',
    data: [
      { id: 6, name: 'Lakme 9 to 5 lipstick', description: 'Creamy Matte lipstick', imageUrl: 'https://www.lakmeindia.com/cdn/shop/files/29545_H-8901030953248_1000x.jpg?v=1689832173', price: '₹299', rating: 4.4 },
      { id: 7, name: 'Mamaearth Soft Matte Lipstick', description: 'Everyday Used,Long Stay For 24 Hours & Waterproof', imageUrl: 'https://m.media-amazon.com/images/I/61U3MLn4K1L.AC_UF1000,1000_QL80.jpg', price: '₹335', rating: 4.5 },
    ]
  },
  {
    category: 'Handbag',
    data: [
      { id: 8, name: 'Mango Handheld Bag ', description: 'For office goin bag', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVdxqHVXktJflPigTT_KvBLxG7kNoz1WGN31ds8nZDnUKQuTyZixZPrZ5M84SOlY-taw4&usqp=CAU', price: '₹4369', rating: 4.9 },
      { id: 9, name: 'Ross Brown Structured Sling Bag', description: 'For Everday used', imageUrl: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/sling-bag/y/5/a/women-classic-bag-pnkhndl-sling-bag-ross-brown-original-imaguyrgevtzsp2t.jpeg?q=90&crop=false', price: '₹1999', rating: 4.8 },
    ]
  },
];

const ProductPage = ({ route }) => {
  const { category } = route.params;
  const selectedCategory = LProducts.find(section => section.category === category);
  const { state, dispatch } = useContext(GlobalContext);
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
      <ScrollView>
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
        />
      </ScrollView>
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
    justifyContent: 'space-between',
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
