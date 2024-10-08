//src/screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const scaleValue = new Animated.Value(0); // Initialize animated value

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('ThemeSelection');
    }, 5000);

    // Animate the logo from 0 to 1 (full size) over 5 seconds
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false, // Set to true if possible
    }).start();

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/logo.png')}
        style={[
          styles.logo,
          { transform: [{ scale: scaleValue }] }, // Apply the scale animation
        ]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '30%',
    height: '30%',
  },
});

export default SplashScreen;

