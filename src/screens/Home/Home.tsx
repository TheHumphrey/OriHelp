import React, { useState } from 'react'
import { ChatTeardropText } from 'phosphor-react-native'

import {
  HStack,
  VStack,
  useTheme,
  Text,
  Heading,
  FlatList,
  Center
} from 'native-base'

import { Filters } from '../../components/organisms'
import { Order, OrderProps, OrderStatusProps } from '../../components/organisms'
import { Button } from '../../components/atoms'
import { DefaultLogo, HomeHeader } from '../../components/templates'

export const Home = () => {
  const [statusSelected, setStatusSelected] = useState<OrderStatusProps>('open')
  const [orders, setOrders] = useState<OrderProps[]>([
    {
      id: '123',
      patrimony: '3213131',
      when: '18/07/2022 as 10:00',
      status: 'open'
    },
    {
      id: '12',
      patrimony: '5134515',
      when: '18/07/2022 as 10:00',
      status: 'closed'
    }
  ])

  const { colors } = useTheme()

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <DefaultLogo />

      <VStack flex={1} px={6}>
        <HomeHeader orderLength={orders.length} />

        <HStack space={3} mb={8}>
          <Filters
            title="andamento"
            type="open"
            onPress={() => setStatusSelected('open')}
            isActive={statusSelected === 'open'}
          />

          <Filters
            title="finalizados"
            type="closed"
            onPress={() => setStatusSelected('closed')}
            isActive={statusSelected === 'closed'}
          />
        </HStack>

        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({ item }) => item.status === statusSelected && (<Order data={item} />)}
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
                solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizados'}
              </Text>
            </Center>
          )}
        />

        <Button title="Nova solicitação" />
      </VStack>
    </VStack>
  );
}