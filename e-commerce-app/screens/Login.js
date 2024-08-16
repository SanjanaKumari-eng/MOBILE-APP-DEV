import React, { useState } from 'react';
import { View, Text, TextInput, Alert, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

const backgroundImage = { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/65a6425f57539e21c329ce444c5530cd' };

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('sanjana');
  const [password, setPassword] = useState('aa12');
  const validUser = { username: 'sanjana', password: 'aa12' };

  const handleLogin = () => {
    if (username === validUser.username && password === validUser.password) {
      navigation.navigate('Welcome', { username });
    } else {
      Alert.alert('Invalid details', 'Please check your username and password');
    }
  };

  const handleForgotPassword = () => {
    // Navigate to a "Forgot Password" screen, or perform any other action
    navigation.navigate('ForgotPassword');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder="Username"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={handleForgotPassword}>
          <Text style={styles.linkText}>Forgot Password?</Text>
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
  link: {
    marginVertical: 5,
  },
  linkText: {
    color: '#6200EE',
    fontSize: 14,
  },
});

export default Login;