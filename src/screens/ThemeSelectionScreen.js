import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Platform } from 'react-native';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import ImageCarousel from '../components/ImageCarousel';
import CategoryGrid from '../components/CategoryGrid';
import Footer from '../components/Footer';

const ThemeSelectionScreen = () => {
  const isWeb = Platform.OS === 'web';
  const Content = isWeb ? View : ScrollView;

  return (
    <SafeAreaView style={[styles.container, isWeb && styles.webContainer]}>
      <NavBar />
      <Content
        style={isWeb ? styles.webContent : styles.scrollView}
        contentContainerStyle={!isWeb ? styles.scrollContent : undefined}
        showsVerticalScrollIndicator={!isWeb}
      >
        <View style={styles.content}>
          <SearchBar />
          <Text style={styles.caption}>Top Picks for You!</Text>
          <ImageCarousel />
          <Text style={styles.caption}>Explore trendy trek!</Text>
          <CategoryGrid />
        </View>
      </Content>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 0,
    backgroundColor: '#FFF',
  },
  webContainer: {
    height: 'auto',
    overflow: 'visible',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  scrollView: {
    flex: 1,
    minHeight: 0,
  },
  webContent: {
    width: '100%',
  },
  content: {
    width: '100%',
    alignItems: 'stretch',
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 12,
    backgroundColor: 'rgba(255, 192, 203, 0.3)',
    padding: 10,
    borderRadius: 8,
    width: '92%',
    maxWidth: 900,
    alignSelf: 'center', // Center the caption
  },
});

export default ThemeSelectionScreen;
