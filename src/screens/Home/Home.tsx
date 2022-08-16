import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { VStack } from 'native-base'

import { OrderProps, OrderStatusProps } from '../../components/organisms'
import { Button } from '../../components/atoms'
import { DefaultLogo, HomeHeader, Filters, Orders } from '../../components/templates'

const initialTestState: OrderProps[] = [
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
]

export const Home = () => {
  const [statusSelected, setStatusSelected] = useState<OrderStatusProps>('open')
  const [orders, setOrders] = useState<OrderProps[]>(initialTestState)

  const navigation = useNavigation()

  const handleNewOrder = () => {
    navigation.navigate('new')
  }

  const handleOpenDetails = (orderId: string) => {
    navigation.navigate('details', { orderId })
  }

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <DefaultLogo />

      <VStack flex={1} px={6}>
        <HomeHeader orderLength={orders.length} />

        <Filters
          setStatusSelected={setStatusSelected}
          statusSelected={statusSelected}
        />

        <Orders
          data={orders}
          status={statusSelected}
          handleOrderDetails={handleOpenDetails}
        />

        <Button title="Nova solicitação" onPress={handleNewOrder} />
      </VStack>
    </VStack>
  );
}