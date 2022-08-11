import React from 'react'

import { THEME } from './src/styles/theme'

import { NativeBaseProvider } from 'native-base'

import { SignIn } from './src/screens'

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <SignIn />
    </NativeBaseProvider>
  );
}
