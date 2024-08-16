// ForgotPassword.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Add your email submission logic here
    alert(`Instructions sent to ${email}`);
    // Navigate back to the login screen after submission
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.text}>
        Please enter your email address and we'll send you instructions on how to reset your password.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  backButton: {
    padding: 15,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#6200EE',
    fontSize: 16,
  },
});

export default ForgotPassword;
