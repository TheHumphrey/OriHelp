import {
  FlatList,
  Center,
  Text,
  useTheme
} from 'native-base'

import { ChatTeardropText } from 'phosphor-react-native'

import {
  Order,
  OrderProps,
  OrderStatusProps
} from '../../organisms';

type Props = {
  data: OrderProps[];
  status: OrderStatusProps;
}

export const Orders = ({ data, status }: Props) => {
  const { colors } = useTheme()

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => item.status === status && (<Order data={item} />)}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
      ListEmptyComponent={() => (
        <Center>
          <ChatTeardropText
            color={colors.gray[300]}
            size={40}
          />
          <Text color="gray.300" fontSize="xl" mt={6} textAlign="center" >
            Você ainda não possui {'\n'}
            solicitações {status === 'open' ? 'em andamento' : 'finalizados'}
          </Text>
        </Center>
      )}
    />
  );
}