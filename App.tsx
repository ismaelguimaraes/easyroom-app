import React from 'react';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './src/contexts/AuthContext';

import theme from './src/global/styles/theme';
import { SignIn } from './src/screens/SignIn';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <SignIn />
      </ThemeProvider>
    </AuthProvider>
  );
}