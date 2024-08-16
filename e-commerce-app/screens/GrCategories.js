import React from 'react';

import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const backgroundImage = { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/01a3329616274720ca4194332df98bd0' };

const GrCategories = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Groceries Categories</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('GrProducts', { category: 'Condiments and Sauce' })}
          >
            <Text style={styles.buttonText}>Condiments and Sauce</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('GrProducts', { category: 'Snacks' })}
          >
            <Text style={styles.buttonText}>Snacks</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('GrProducts', { category: 'Pasta and Rice' })}
          >
            <Text style={styles.buttonText}>Pasta and Rice</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('GrProducts', { category: 'Baking Items' })}
          >
            <Text style={styles.buttonText}>Baking Items</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // This will ensure the image covers the whole screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(245, 245, 245, 0.7)', // Semi-transparent background for readability
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6200EE',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-around',
    height: 300,
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    borderRadius: 30,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GrCategories;