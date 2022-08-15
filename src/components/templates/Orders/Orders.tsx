import { FlatList } from 'native-base'

import {
  Order,
  OrderProps,
  OrderStatusProps,
  EmptyOrder
} from '../../organisms';

type Props = {
  data: OrderProps[];
  status: OrderStatusProps;
}

export const Orders = ({ data, status }: Props) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => item.status === status && (<Order data={item} />)}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
      ListEmptyComponent={() => (<EmptyOrder status={status === 'open' ? 'em andamento' : 'finalizados'} />)}
    />
  );
}