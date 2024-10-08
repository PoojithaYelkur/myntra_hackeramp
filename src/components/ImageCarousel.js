import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const images = [
  require('../../assets/ThemeSelection/kpop.png'),
  require('../../assets/ThemeSelection/bollywood1.png'),
  require('../../assets/ThemeSelection/kdrama.png'),
  require('../../assets/ThemeSelection/bollywood2.png'),
  // Add more images as needed
];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={images[currentImageIndex]} style={styles.image} resizeMode="cover" />
      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { opacity: index === currentImageIndex ? 1 : 0.5 },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 200, // Adjust height as needed
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '10%', // Add space on left and right
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add box-shadow
  },
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginHorizontal: 5,
  },
});

export default ImageCarousel;
