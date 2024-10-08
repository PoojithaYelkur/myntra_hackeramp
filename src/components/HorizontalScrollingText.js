import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  useWindowDimensions,
  ScrollView,
} from "react-native";

const HorizontalText = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();

  const words = [
    "Bollywood fits",
    "Trendy styles",
    "Fashionable looks",
    "Stylish attire",
    "Trendy outfits",
    "Glamorous looks",
    "Bollywood fits",
    "Trendy styles",
    "Fashionable looks",
    "Fashionable looks",
    "Stylish attire",
    "Trendy outfits",
    "Glamorous looks",
    "Bollywood fits",
    "Trendy styles",
  ];

  useEffect(() => {
    const textWidth = words.join(" • ").length * 10; // Rough estimate of text width

    const startAnimation = () => {
      Animated.loop(
        Animated.timing(scrollX, {
          toValue: -textWidth,
          duration: 40000, // Adjust this value to control speed (higher = slower)
          useNativeDriver: true,
          easing: Animated.linear,
        })
      ).start();
    };

    startAnimation();

    return () => {
      scrollX.removeAllListeners();
    };
  }, [width]); // Re-run animation if width changes

  const renderWords = () => {
    return (
      <>
        {words.map((word, index) => (
          <Text key={index} style={styles.text}>
            {word} •{" "}
          </Text>
        ))}
        {words.map((word, index) => (
          <Text key={`repeat-${index}`} style={styles.text}>
            {word} •{" "}
          </Text>
        ))}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        scrollEnabled={false}
      >
        <Animated.View
          style={[
            styles.textContainer,
            {
              transform: [{ translateX: scrollX }],
            },
          ]}
        >
          {renderWords()}
        </Animated.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 192, 203, 0.3)",
    height: 40,
    justifyContent: "center",
  },
  scrollView: {
    flexGrow: 0,
  },
  scrollViewContent: {
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginHorizontal: 5,
  },
});

export default HorizontalText;
