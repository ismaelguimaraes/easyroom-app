import React, { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import { AuthProvider } from './src/contexts/AuthContext';
import { Routes } from './src/routes';

import theme from './src/global/styles/theme';
import { View } from 'react-native';

export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_700Bold
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  
  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
      </AuthProvider>
    </View>
  );
}