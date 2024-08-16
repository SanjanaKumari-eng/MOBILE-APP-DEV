import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Animated, { Easing, useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

const backgroundImage = { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d338dece2ada51f3e0fe15fae2b34d3b' };

const GettingStarted = ({ navigation }) => {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(1);
  const rotateY = useSharedValue(0);
  const rotateX = useSharedValue(0);
  const shadowOpacity = useSharedValue(0.5); // Initial shadow opacity

  useEffect(() => {
    // Initial fade-in animation
    opacity.value = withTiming(1, {
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    });

    // 3D rotation and scaling with shadow animation
    setTimeout(() => {
      scale.value = withTiming(1.2, {
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
      });
      rotateY.value = withTiming(360, {
        duration: 2000,
        easing: Easing.linear,
      });
      rotateX.value = withTiming(360, {
        duration: 2000,
        easing: Easing.linear,
      });
      shadowOpacity.value = withTiming(0.8, {
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
      });
    }, 1000);

    // Reset to final position with shadow reset
    setTimeout(() => {
      scale.value = withTiming(1, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      });
      rotateY.value = withTiming(0, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      });
      rotateX.value = withTiming(0, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      });
      shadowOpacity.value = withTiming(0.5, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      });
    }, 3000);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        { scale: scale.value },
        { perspective: 1000 }, // Adding perspective for 3D effect
        { rotateY: `${rotateY.value}deg` },
        { rotateX: `${rotateX.value}deg` },
      ],
      shadowColor: '#000',
      shadowOffset: { width: 10, height: 10 },
      shadowOpacity: shadowOpacity.value,
      shadowRadius: 15,
    };
  });

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay} />
      <Animated.View style={[styles.container, animatedStyle]}>
        <Text style={styles.text}>
          WELCOME TO BUY'NJOY WORLD!!
        </Text>
      </Animated.View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    position: 'absolute',
    bottom: '35%', // Adjust this value to control the vertical position of the text above the button
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white', // Adjust text color for better visibility
    marginBottom: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GettingStarted;
