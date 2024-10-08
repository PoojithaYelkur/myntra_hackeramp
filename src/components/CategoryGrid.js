//src/components/CategoryGrid.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width: screenWidth } = Dimensions.get('window');

const categories = [
  {
    name: "Bollywood",
    screen: "BollywoodScreen",
    image: require("../../assets/images/bollywood.jpg"),
  },
  {
    name: "Anime",
    screen: "AnimeScreen",
    image: require("../../assets/images/anime.jpeg"),
  },
  {
    name: "K-Pop",
    screen: "KpopScreen",
    image: require("../../assets/images/k-pop.jpg"),
  },
  {
    name: "Hollywood",
    screen: "HollywoodScreen",
    image: require("../../assets/images/hollywood.jpg"),
  },
  {
    name: "K-Drama",
    screen: "KdramaScreen",
    image: require("../../assets/images/k-drama.jpg"),
  },
  {
    name: "Tollywood",
    screen: "TollywoodScreen",
    image: require("../../assets/images/Tollywood.jpg"),
  },
];

const CategoryGrid = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.gridContainer}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={styles.categoryItem}
          onPress={() => navigation.navigate(category.screen)}
        >
          <Image
            source={category.image}
            style={styles.categoryImage}
            resizeMode="cover"
          />
          <Text style={styles.categoryText}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: screenWidth * 0.05,
    paddingHorizontal: screenWidth * 0.02,
  },
  categoryItem: {
    width: screenWidth * 0.28, // Approximately 30% of screen width
    aspectRatio: 0.7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginBottom: screenWidth * 0.05,
    
    borderWidth: 1,
    borderColor: "#ccc",
    paddingTop: screenWidth * 0.03,
    paddingBottom:screenWidth * 0.02,
    padding: screenWidth * 0.02,
    borderRadius: screenWidth * 0.015,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  categoryImage: {
    width: "100%",
    height: "96%",
    borderRadius: screenWidth * 0.01,
  },
  categoryText: {
    fontSize: screenWidth * 0.03,
    fontWeight: "bold",
    marginTop: screenWidth * 0.01,
    textAlign: "center",
  },
});

export default CategoryGrid;