import { Center } from 'native-base'
import { Spinner } from '../../atoms'

export const Loading = () => {
  return (
    <Center flex={1} bg="gray.700">
      <Spinner />
    </Center>
  )
}