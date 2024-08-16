import React, { useState, useContext } from 'react';
import { View, Text, SectionList, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GlobalContext } from './GlobalContext'; // Ensure this path is correct

const KProducts = [
  {
    category: 'Dress',
    data: [
      { id: 1, name: 'Shirt For Small Kids Boys', description: 'Pure Cotton & Good Fabric', imageUrl: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/c9e06d5b-d888-4810-b0e3-ac5793d0735b._CR440,293,1169,1463_PT0_SX362_V1.jpeg', price: '₹989', rating: 4.5 },
      { id: 2, name: 'Frock Design Dress for Small Girls', description: 'Very Comfortable To wear', imageUrl: 'https://images.meesho.com/images/products/339516716/tk6v2_256.webp', price: '₹768', rating: 4.7 },
      { id: 3, name: 'Gowns For Small Kids', description: 'Beautiful Dress', imageUrl: 'https://static3.azafashions.com/tr:w-317/uploads/product_gallery/1689002192257_1.jpg?noopt=true', price: '₹980', rating: 4.8 }
    ]
  },
  {
    category: 'Watches',
    data: [
      { id: 4, name: 'Spiky Kids Watch', description: 'Unisex Kids Watch', imageUrl: 'https://www.spikyonline.com/cdn/shop/files/Light_Rab_Pink_1_1a2857c2-c01d-4059-9434-0e244f2cece7_1200x.jpg?v=1709791691', price: '₹321', rating: 4.9 },
      { id: 5, name: 'Shochnshop kids watch', description: 'Unisex Kids Watch', imageUrl: 'https://m.media-amazon.com/images/I/8174TrHYrJL.AC_UY1000.jpg', price: '₹211', rating: 4.8 }
    ]
  },
  {
    category: 'Toys',
    data: [
      { id: 6, name: 'Panda box Kids Hanuman Soft Toy', description: 'Small Musical Soft Toy', imageUrl: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/29644296/2024/5/20/d454d11c-cf57-4e7f-aebd-8c533886f8a91716201385649PandasBoxPolyesterFilledNon-AllergicSoftToySoftToysandDolls1.jpg', price: '$84', rating: 4.4 },
      { id: 7, name: 'Opina Ice Cream Toy', description: 'Ice Cream Toy With light', imageUrl: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/26827748/2024/1/8/94f7b558-e6ad-44fb-83b3-0bedfd0477d51704704611880OPINAIceCreamToywithMusicLight1.jpg', price: '₹335', rating: 4.5 },
    ]
  },
  {
    category: 'Backpack',
    data: [
      { id: 8, name: 'Genie Kids Floral Print backpack', description: 'Unisex Back pack & waterproof also', imageUrl: 'https://genietravel.com/cdn/shop/files/2_3622f223-9d15-4183-965e-59a861c9d3c1_1024x.jpg?v=1702550154', price: '₹899', rating: 4.9 },
      { id: 9, name: 'Skybags Kids printed Backpack', description: 'Unisex Backpack & Waterproof Also', imageUrl: 'https://skybags.co.in/cdn/shop/files/BPPOPI1BLU.png?v=1698143362', price: '₹883', rating: 4.8 },
    ]
  },
];

const ProductPage = ({ route }) => {
  const { category } = route.params;
  const selectedCategory = KProducts.find(section => section.category === category);
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
