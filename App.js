import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faBell, faShoppingBag, faAngleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faBell, faShoppingBag, faAngleDown);
// library.add(faHeart, faBell, faShoppingBag, faAngleDown);


export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}



