import {
  Center,
  Text,
  useTheme
} from 'native-base'

import { ChatTeardropText } from 'phosphor-react-native'

type Props = {
  status: 'em andamento' | 'finalizados';
}

export const EmptyOrder = ({ status }: Props) => {
  const { colors } = useTheme()

  return (
    <Center>
      <ChatTeardropText
        color={colors.gray[300]}
        size={40}
      />
      <Text color="gray.300" fontSize="xl" mt={6} textAlign="center" >
        Você ainda não possui {'\n'}
        solicitações {status}
      </Text>
    </Center>
  );
}