
import { NativeBaseProvider, StatusBar } from 'native-base'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { THEME } from './src/styles/theme'

import { SignIn } from './src/screens'
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
        {fontsLoaded ? (<SignIn />) : (<Loading />)}
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
