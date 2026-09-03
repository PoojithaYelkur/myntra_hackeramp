import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import ImageCarousel from '../components/ImageCarousel';
import CategoryGrid from '../components/CategoryGrid';
import Footer from '../components/Footer';

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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 18,
    backgroundColor: 'rgba(255, 192, 203, 0.3)',
    padding: 10,
    borderRadius: 8,
    width: '90%', // Take up most of the width
    maxWidth: 900,
    alignSelf: 'center', // Center the caption
  },
});

export default ThemeSelectionScreen;
