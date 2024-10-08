import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import ImageCarousel from '../components/ImageCarousel';
import CategoryGrid from '../components/CategoryGrid';
import Footer from '../components/Footer';

const { width } = Dimensions.get('window');

const ThemeSelectionScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <SearchBar />
        <Text style={styles.caption}>Top Picks for You!</Text>
        <ImageCarousel />
        <Text style={styles.caption}>Explore trendy trek!</Text>
        <CategoryGrid />
        {/* Add more components or content here as needed */}
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20, // Add some padding at the bottom
  },
  caption: {
    fontSize: width * 0.045, // Responsive font size
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: width * 0.025, // Responsive vertical margin
    backgroundColor: 'rgba(255, 192, 203, 0.3)',
    padding: width * 0.0125, // Responsive padding
    borderRadius: width * 0.0125, // Responsive border radius
    width: '90%', // Take up most of the width
    alignSelf: 'center', // Center the caption
  },
});

export default ThemeSelectionScreen;
