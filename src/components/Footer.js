// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faBolt, faStore, faArrowUp } from "@fortawesome/free-solid-svg-icons";
// import ShoppingBagIcon from "../../assets/shopping_bag.png"; // Adjust the path as per your project structure
// import LogoIcon from "../../assets/logo.png"; // Adjust the path to your logo image

// const Footer = () => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.iconContainer}>
//         <Image source={LogoIcon} style={styles.logoIcon} />
//         <Text style={styles.label}>Home</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.iconContainer}>
//         <FontAwesomeIcon icon={faBolt} size={24} />
//         <Text style={styles.label}>New</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.iconContainer}>
//         <FontAwesomeIcon icon={faStore} size={24} />
//         <Text style={styles.label}>Stores</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.iconContainer}>
//         <FontAwesomeIcon icon={faArrowUp} size={24} />
//         <Text style={styles.label}>TrendNxt</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.iconContainer}>
//         <Image source={ShoppingBagIcon} style={styles.shoppingBagIcon} />
//         <Text style={styles.label}>Bag</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     paddingVertical: 10,
//     backgroundColor: "#FFF",
//     borderTopWidth: 1,
//     borderTopColor: "#E0E0E0",
//   },
//   iconContainer: {
//     alignItems: "center",
//   },
//   label: {
//     fontSize: 12,
//   },
//   logoIcon: {
//     width: 24,
//     height: 24,
//     resizeMode: "contain",
//   },
//   shoppingBagIcon: {
//     width: 24,
//     height: 24,
//     resizeMode: "contain",
//   },
// });

// export default Footer;


// src/components/Footer.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBolt, faStore, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ShoppingBagIcon from "../../assets/shopping_bag.png"; // Adjust the path as per your project structure
import LogoIcon from "../../assets/logo.png"; // Adjust the path to your logo image
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('ThemeSelection')}>
        <Image source={LogoIcon} style={styles.logoIcon} />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesomeIcon icon={faBolt} size={24} />
        <Text style={styles.label}>New</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesomeIcon icon={faStore} size={24} />
        <Text style={styles.label}>Stores</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesomeIcon icon={faArrowUp} size={24} />
        <Text style={styles.label}>TrendNxt</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={ShoppingBagIcon} style={styles.shoppingBagIcon} />
        <Text style={styles.label}>Bag</Text>
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
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  iconContainer: {
    alignItems: "center",
  },
  label: {
    fontSize: 12,
  },
  logoIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  shoppingBagIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});

export default Footer;
