import React, { useState } from 'react'
import { SignOut, ChatTeardropText } from 'phosphor-react-native'

import {
  HStack,
  VStack,
  IconButton,
  useTheme,
  Text,
  Heading,
  FlatList,
  Center
} from 'native-base'

import Logo from '../../assets/logo_secondary.svg'
import { Filters } from '../../components/templates'
import { Order, OrderProps, OrderStatusProps } from '../../components/organisms'
import { Button } from '../../components/atoms'

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
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.700"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />

        <IconButton
          icon={<SignOut size={26} color={colors.gray[300]} />}
        />

      </HStack>

      <VStack flex={1} px={6}>
        <HStack
          w="full"
          mt={6}
          mb={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="gray.100">
            Meus chamados
          </Heading>

          <Text color="gray.200">
            3
          </Text>
        </HStack>

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