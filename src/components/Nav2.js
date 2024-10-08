import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSort, faFilter } from "@fortawesome/free-solid-svg-icons";

const Nav2 = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesomeIcon icon={faSort} size={24} style={styles.icon} />
        <Text style={styles.label}>SORT</Text>
      </TouchableOpacity>
      {/* Vertical line */}
      <View style={styles.verticalLine} />
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesomeIcon icon={faFilter} size={24} style={styles.icon} />
        <Text style={styles.label}>FILTER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 5,
  },
  iconContainer: {
    alignItems: "center",
  },
  label: {
    fontSize: 12,
  },
  verticalLine: {
    height: 24, // Adjust the height as needed
    width: 1,
    backgroundColor: "#E0E0E0",
  },
  icon: {
    color: "#A9A9A9", // Light grey color
  },
});

export default Nav2;
