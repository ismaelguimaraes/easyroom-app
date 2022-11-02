import React from 'react';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './src/contexts/AuthContext';
import { Routes } from './src/routes';

import theme from './src/global/styles/theme';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  );
}