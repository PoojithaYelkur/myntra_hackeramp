import React from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";
import Swiper from "react-native-deck-swiper";
import { FontAwesome } from "@expo/vector-icons";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"; // Import the Footer component
import Nav2 from "../components/Nav2";
import TollywoodHoriZontalScroll from "../components/TollywoodHorizontalScroll";
import useSwipeActions from "../hooks/useSwipeActions";

const images = [
  require("../../assets/Tollywood/toll1.png"),
  require("../../assets/Tollywood/toll2.png"),
  require("../../assets/Tollywood/toll3.png"),
  require("../../assets/Tollywood/toll4.png"),
  require("../../assets/Tollywood/toll5.png"),
  require("../../assets/Tollywood/toll6.png"),
  require("../../assets/Tollywood/toll1.png"),
  require("../../assets/Tollywood/toll2.png"),
  
];

const TollywoodScreen = () => {
  const { liked, disliked, wishlist, lastAction, handleSwipe } = useSwipeActions(images);

  console.log("Rendering BollywoodScreen");

  return (
    <View style={styles.container}>
      <NavBar />
      <TollywoodHoriZontalScroll/>
      <Nav2 />
      <View style={styles.swiperContainer}>
        <Swiper
          cards={images}
          renderCard={(card) => (
            <View style={styles.card}>
              <Image source={card} style={styles.image} />
            </View>
          )}
          onSwipedLeft={(cardIndex) => handleSwipe("left", cardIndex)}
          onSwipedRight={(cardIndex) => handleSwipe("right", cardIndex)}
          onSwipedTop={(cardIndex) => handleSwipe("top", cardIndex)}
          cardIndex={0}
          backgroundColor={"#fff"}
          stackSize={3}
        />
        {!!lastAction && <Text style={styles.actionLabel}>{lastAction}</Text>}
        <Animated.View
          style={[
            styles.iconContainer,
            styles.dislikeIcon,
            { opacity: disliked },
          ]}
        >
          <FontAwesome name="times" size={30} style={styles.icon} />
        </Animated.View>
        <Animated.View
          style={[styles.iconContainer, styles.likeIcon, { opacity: liked }]}
        >
          <FontAwesome name="check" size={30} style={styles.icon} />
        </Animated.View>
        <Animated.View
          style={[
            styles.iconContainer,
            styles.wishlistIcon,
            { opacity: wishlist },
          ]}
        >
          <FontAwesome name="heart" size={30} style={styles.icon} />
        </Animated.View>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 0,
    backgroundColor: "#fff",
  },
  caption: {
    fontSize: 18,
    backgroundColor: "rgba(255, 192, 203, 0.3)",
    textAlign: "center",
    marginVertical: 10,
  },
  swiperContainer: {
    flex: 1,
    minHeight: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  card: {
    width: "92%",
    maxWidth: 420,
    height: 520,
    maxHeight: "72%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    resizeMode: "contain",
  },
  iconContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -15 }, { translateY: -15 }],
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  dislikeIcon: {
    top: 20,
    right: 20,
    // backgroundColor: "#ff6b6b",
    backgroundColor: "brown",
  },
  likeIcon: {
    top: 20,
    right: 80,
    backgroundColor: "#4ECDC4",
  },
  wishlistIcon: {
    top: 20,
    right: 140,
    backgroundColor: "#FC5C65",
  },
  icon: {
    color: "white",
  },
});

export default TollywoodScreen;
