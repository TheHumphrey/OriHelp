import React, { useState } from 'react'

import { VStack } from 'native-base'

import { OrderProps, OrderStatusProps } from '../../components/organisms'
import { Button } from '../../components/atoms'
import { DefaultLogo, HomeHeader, Filters, Orders } from '../../components/templates'

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

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <DefaultLogo />

      <VStack flex={1} px={6}>
        <HomeHeader orderLength={orders.length} />

        <Filters
          setStatusSelected={setStatusSelected}
          statusSelected={statusSelected}
        />

        <Orders data={orders} status={statusSelected} />

        <Button title="Nova solicitação" />
      </VStack>
    </VStack>
  );
}