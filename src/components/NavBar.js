// // src/components/NavBar.js
// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import {
//   faHeart as faHeartRegular,
//   faBell as faBellRegular,
//   faAngleDown,
// } from "@fortawesome/free-solid-svg-icons"; // Updated import
// import { useNavigation } from "@react-navigation/native"; // Import navigation hook
// import ShoppingBagIcon from "../../assets/shopping_bag.png"; // Adjust the path as per your project structure

// const NavBar = () => {
//   const navigation = useNavigation();

//   const handleLogoPress = () => {
//     navigation.navigate('ThemeSelectionScreen'); // Navigate to ThemeSelectionScreen
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.leftSection}>
//         <TouchableOpacity style={styles.logoContainer} onPress={handleLogoPress}>
//           <Text style={styles.logo}>Myntra</Text>
//           <FontAwesomeIcon
//             icon={faAngleDown} // Changed icon here
//             size={12}
//             color="#FF69B4"
//             style={styles.chevron}
//           />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.rightSection}>
//         <TouchableOpacity style={styles.iconContainer}>
//           <FontAwesomeIcon icon={faBellRegular} size={22} color="#000" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconContainer}>
//           <FontAwesomeIcon icon={faHeartRegular} size={22} color="#000" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.shoppingBagContainer}>
//           <Image source={ShoppingBagIcon} style={styles.shoppingBagIcon} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginTop:23,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 10,
//     backgroundColor: "#FFF",
//     borderBottomWidth: 1,
//     borderBottomColor: "#E0E0E0",
//   },
//   leftSection: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   logoContainer: {
//     backgroundColor: "#FFF8DC",
//     borderWidth: 1,
//     borderColor: "#FFD700",
//     borderRadius: 5,
//     padding: 7,
//     marginRight: 5,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   logo: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#000",
//   },
//   chevron: {
//     marginLeft: 5,
//   },
//   rightSection: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   iconContainer: {
//     marginLeft: 18,
//     marginRight: 5,
//   },
//   shoppingBagContainer: {
//     marginLeft: 18,
//     marginRight: 5,
//     alignItems: "flex-start",
//     justifyContent: "center",
//   },
//   shoppingBagIcon: {
//     width: 27,
//     height: 30,
//     resizeMode: "contain",
//   },
// });

// export default NavBar;

// src/components/NavBar.js
// src/components/NavBar.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHeart,
  faBell,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as faHeartRegular,
  faBell as faBellRegular,
} from "@fortawesome/free-regular-svg-icons";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook
import ShoppingBagIcon from "../../assets/shopping_bag.png"; // Adjust the path as per your project structure

const NavBar = () => {
  const navigation = useNavigation(); // Access navigation object

  const handleLogoPress = () => {
    navigation.navigate("ThemeSelection"); // Navigate to ThemeSelectionScreen
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <TouchableOpacity
          style={styles.logoContainer}
          onPress={handleLogoPress}
        >
          <Text style={styles.logo}>Myntra</Text>
          <FontAwesomeIcon
            icon={faAngleDown}
            size={12}
            color="#FF69B4"
            style={styles.chevron}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesomeIcon icon={faBellRegular} size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesomeIcon icon={faHeartRegular} size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shoppingBagContainer}>
          <Image source={ShoppingBagIcon} style={styles.shoppingBagIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 23,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoContainer: {
    backgroundColor: "#FFF8DC",
    borderWidth: 1,
    borderColor: "#FFD700",
    borderRadius: 5,
    padding: 7,
    marginRight: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  chevron: {
    marginLeft: 5,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginLeft: 18,
    marginRight: 5,
  },
  shoppingBagContainer: {
    marginLeft: 18,
    marginRight: 5,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  shoppingBagIcon: {
    width: 27,
    height: 30,
    resizeMode: "contain",
  },
});

export default NavBar;
