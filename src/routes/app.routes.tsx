import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  Details,
  Home,
  Register
} from '../screens'

const { Screen, Navigator } = createNativeStackNavigator()

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="new" component={Register} />
      <Screen name="details" component={Details} />
    </Navigator>
  )
}