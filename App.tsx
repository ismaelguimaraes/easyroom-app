import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import { SignIn } from './src/screens/SignIn';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
}