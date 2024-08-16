// TCategories.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TCategories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Toys Categories</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('TProducts', { category: 'Action figure and construction toys' })}
        >
          <Text style={styles.buttonText}>Action figure and construction toys</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('TProducts', { category: 'Fantasy and adventure playset' })}
        >
          <Text style={styles.buttonText}>Fantasy and adventure playset</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('TProducts', { category: 'Outdoor and educational toys' })}
        >
          <Text style={styles.buttonText}>Outdoor and educational toys</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('TProducts', { category: 'Board games and puzzles' })}
        >
          <Text style={styles.buttonText}>Board games and puzzles</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
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

export default TCategories;