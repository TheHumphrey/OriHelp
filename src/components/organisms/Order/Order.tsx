import { HStack, Text } from 'native-base'

export type OrderStatusProps = 'open' | 'closed'

export type OrderProps = {
  id: string;
  patrimony: string;
  when: string;
  status: OrderStatusProps;
}

type Props = {
  data: OrderProps;
}

export const Order = ({ data, ...rest }: Props) => {
  return (
    <HStack>
      <Text
        color="white"
        fontSize="md"
      >
        Patrimônio: {data.patrimony}
      </Text>

    </HStack>
  );
}