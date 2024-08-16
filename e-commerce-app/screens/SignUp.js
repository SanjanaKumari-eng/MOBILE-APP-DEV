import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const backgroundImage = { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/65a6425f57539e21c329ce444c5530cd' };


const SignUp = ({ route = {}, navigation }) => {
  const { username = 'sanjana', password = '1234' } = route.params || {};
  const [email, setEmail] = useState('san@gmail.com');

  const handleSignUp = async () => {
    if (email === '') {
      Alert.alert('Invalid input', 'Please enter a valid email address');
      return;
    }

    try {
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
      Alert.alert('Success', 'You have signed up successfully');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'An error occurred while signing up');
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          placeholder="Username"
          value={username}
          style={styles.input}
          editable={false}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          style={styles.input}
          editable={false}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    width: '100%',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUp;