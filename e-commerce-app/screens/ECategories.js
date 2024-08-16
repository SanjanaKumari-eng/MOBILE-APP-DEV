import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const backgroundImage = { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/a9368e9e39b441094fac1b5198376e22' };

const ECategories = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Electronics Categories</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('EProducts', { category: 'TV' })}
          >
            <Text style={styles.buttonText}>TV</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('EProducts', { category: 'Camera' })}
          >
            <Text style={styles.buttonText}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('EProducts', { category: 'Laptop' })}
          >
            <Text style={styles.buttonText}>Laptop</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('EProducts', { category: 'Smart Watch' })}
          >
            <Text style={styles.buttonText}>Smart Watch</Text>
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
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(245, 245, 245, 0.7)', // Add a semi-transparent background
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

export default ECategories;
