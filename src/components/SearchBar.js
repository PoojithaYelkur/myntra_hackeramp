// // src/components/SearchBar.js
// import React from 'react';
// import { View, TextInput, StyleSheet } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faCamera, faMicrophone } from '@fortawesome/free-solid-svg-icons';

// const SearchBar = () => {
//   return (
//     <View style={styles.container}>
//       <FontAwesomeIcon icon={faSearch} size={20} color="#888" style={styles.icon} />
//       <TextInput
//         style={styles.input}
//         placeholder="Search for products!"
//         placeholderTextColor="#888"
//       />
//       <FontAwesomeIcon icon={faCamera} size={20} color="#888" style={styles.icon} />
//       <FontAwesomeIcon icon={faMicrophone} size={20} color="#888" style={styles.icon} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F0F0F0',
//     borderRadius: 25,
//     padding: 10,
//     margin: 10,
//   },
//   input: {
//     flex: 1,
//     marginLeft: 10,
//     fontSize: 16,
//   },
//   icon: {
//     // color: black,
//     marginHorizontal: 5,
//     marginLeft: 10,
//   },
// });

// export default SearchBar;
// src/components/SearchBar.js
// src/components/SearchBar.js
// src/components/SearchBar.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faCamera, faMicrophone } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faSearch} size={20} color="#000" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search for products!"
        placeholderTextColor="#888"
      />
      <FontAwesomeIcon icon={faCamera} size={20} color="#000" style={styles.icon} />
      <FontAwesomeIcon icon={faMicrophone} size={20} color="#000" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 25,
    padding: 10,
    margin: 10,
    marginTop: 15, // Added top margin
    width: '90%', // Reduced width
    alignSelf: 'center', // Center align the search bar
    // Adding box-shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // For Android
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  icon: {
    marginHorizontal: 5,
    marginLeft: 10,
  },
});

export default SearchBar;



