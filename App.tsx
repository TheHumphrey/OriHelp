
import { NativeBaseProvider, StatusBar } from 'native-base'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { THEME } from './src/styles/theme'

import { Routes } from './src/routes'
import { Loading } from './src/components/templates'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={THEME}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? (<Routes />) : (<Loading />)}
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
