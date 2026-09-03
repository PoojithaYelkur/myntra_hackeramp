//src/components/CategoryGrid.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: '4%',
    alignSelf: 'center',
    width: '100%',
    maxWidth: 1100,
  },
  categoryItem: {
    flexBasis: '30%',
    flexGrow: 0,
    flexShrink: 0,
    maxWidth: 220,
    minWidth: 0,
    aspectRatio: 0.78,
    alignItems: "center",
    backgroundColor: "#FFF",
    marginBottom: 18,
    
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  categoryImage: {
    width: "100%",
    flex: 1,
    minHeight: 0,
    borderRadius: 5,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
});

export default CategoryGrid;