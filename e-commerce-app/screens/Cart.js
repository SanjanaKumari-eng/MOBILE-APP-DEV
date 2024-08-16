import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, ImageBackground , Image} from 'react-native';
import { GlobalContext } from './GlobalContext';

const backgroundImage = { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c1a7f7fbd12928576c8fd8934f407aab' }; 

const Cart = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        <FlatList
          data={state.cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.product}>
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Button title="Remove from Cart" onPress={() => removeFromCart(item.id)} color="#ff6347" />
              </View>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  product: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
});

export default Cart;