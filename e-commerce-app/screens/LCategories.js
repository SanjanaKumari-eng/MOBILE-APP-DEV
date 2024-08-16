// LCategories.js
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const backgroundImage = { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/01fce958b7023ed55d3b7f02ca9c7329' };

const LCategories = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Ladies Categories</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('LProducts', { category: 'Ladies Kurta' })}
          >
            <Text style={styles.buttonText}>Ladies Kurta</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('LProducts', { category: 'Watches' })}
          >
            <Text style={styles.buttonText}>Watches</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('LProducts', { category: 'Lipstick' })}
          >
            <Text style={styles.buttonText}>Lipstick</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('LProducts', { category: 'Handbag' })}
          >
            <Text style={styles.buttonText}>Handbag</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add an overlay for better text visibility
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
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

export default LCategories;