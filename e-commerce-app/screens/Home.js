import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const backgroundImage = { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e872c6764625a3c7dcb4148930d5aee4' };


const Home = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.text}>Let's Start</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Categories')}
        >
          <Text style={styles.buttonText}>Go to Categories</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ensure the image covers the whole screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(245, 245, 245, 0.7)', // Semi-transparent background for readability
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: '#000', // Ensure text is readable against the background
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;