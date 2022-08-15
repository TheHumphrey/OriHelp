import { HStack } from 'native-base'
import { Filter, OrderStatusProps } from '../../organisms'

type Props = {
  setStatusSelected(value: React.SetStateAction<OrderStatusProps>): void;
  statusSelected: OrderStatusProps;
}

export const Filters = ({ setStatusSelected, statusSelected }: Props) => {
  return (
    <HStack space={3} mb={8}>
      <Filter
        title="andamento"
        type="open"
        onPress={() => setStatusSelected('open')}
        isActive={statusSelected === 'open'}
      />

      <Filter
        title="finalizados"
        type="closed"
        onPress={() => setStatusSelected('closed')}
        isActive={statusSelected === 'closed'}
      />
    </HStack>
  );
}