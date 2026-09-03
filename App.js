import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faBell, faShoppingBag, faAngleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faBell, faShoppingBag, faAngleDown);
// library.add(faHeart, faBell, faShoppingBag, faAngleDown);


export default function App() {
  useEffect(() => {
    if (Platform.OS !== 'web') {
      return undefined;
    }

    document.documentElement.style.height = 'auto';
    document.documentElement.style.overflow = 'auto';
    document.body.style.height = 'auto';
    document.body.style.overflow = 'auto';
    const root = document.getElementById('root');
    root.style.height = 'auto';
    root.style.minHeight = '100vh';

    return () => {
      document.documentElement.style.height = '';
      document.documentElement.style.overflow = '';
      document.body.style.height = '';
      document.body.style.overflow = '';
      root.style.height = '';
      root.style.minHeight = '';
    };
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}



