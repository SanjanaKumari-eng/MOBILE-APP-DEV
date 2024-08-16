import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';

const backgroundImage = { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/aac705ff3a014e8af72223edc1099683' };

const Categories = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Categories</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LCategories')}>
            <Text style={styles.buttonText}>Ladies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GeCategories')}>
            <Text style={styles.buttonText}>Gents</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('KCategories')}>
            <Text style={styles.buttonText}>Kids</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ECategories')}>
            <Text style={styles.buttonText}>Electronic Gadgets</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GrCategories')}>
            <Text style={styles.buttonText}>Groceries</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TCategories')}>
            <Text style={styles.buttonText}>Toys</Text>
          </TouchableOpacity>
          {/* Other buttons */}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // This will ensure the image covers the whole screen
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20, // Added padding to ensure the content doesn't touch the edges
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

export default Categories;