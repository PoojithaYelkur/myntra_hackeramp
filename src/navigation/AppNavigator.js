// // src/navigation/AppNavigator.js
// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from '../screens/SplashScreen';
// import ThemeSelectionScreen from '../screens/ThemeSelectionScreen';

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Splash" component={SplashScreen} />
//       <Stack.Screen name="ThemeSelection" component={ThemeSelectionScreen} />
//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;
// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import ThemeSelectionScreen from '../screens/ThemeSelectionScreen';
import BollywoodScreen from '../screens/BollywoodScreen';
import AnimeScreen from '../screens/AnimeScreen';
import KpopScreen from '../screens/KpopScreen';
import TollywoodScreen from '../screens/TollywoodScreen';
import HollywoodScreen from '../screens/HollywoodScreen';
import KdramaScreen from '../screens/KdramaScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="ThemeSelection" component={ThemeSelectionScreen} />
      <Stack.Screen name="BollywoodScreen" component={BollywoodScreen} />
      <Stack.Screen name="AnimeScreen" component={AnimeScreen} />
      <Stack.Screen name="KpopScreen" component={KpopScreen} />
      <Stack.Screen name="TollywoodScreen" component={TollywoodScreen} />
      <Stack.Screen name="HollywoodScreen" component={HollywoodScreen} />
      <Stack.Screen name="KdramaScreen" component={KdramaScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;


