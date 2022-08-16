import { NavigationContainer } from '@react-navigation/native'

import { SignIn } from '../screens'
import { AppRoutes } from './app.routes'

export const Routes = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}