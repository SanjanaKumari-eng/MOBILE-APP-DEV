// KCategories.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const KCategories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kids Categories</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('KProducts', { category: 'Dress' })}
        >
          <Text style={styles.buttonText}>Dress</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('KProducts', { category: 'Watches' })}
        >
          <Text style={styles.buttonText}>Watches</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('KProducts', { category: 'Toys' })}
        >
          <Text style={styles.buttonText}>Toys</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('KProducts', { category: 'Backpack' })}
        >
          <Text style={styles.buttonText}>Backpack</Text>
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

export default KCategories;