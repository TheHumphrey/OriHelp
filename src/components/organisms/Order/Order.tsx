import { Box, Circle, HStack, Text, useTheme, VStack, Pressable, IPressableProps } from 'native-base'

import { Hourglass, CircleWavyCheck } from 'phosphor-react-native'

import { StackTextWithIcon } from '../../molecules'

export type OrderStatusProps = 'open' | 'closed'

export type OrderProps = {
  id: string;
  patrimony: string;
  when: string;
  status: OrderStatusProps;
}

type Props = IPressableProps & {
  data: OrderProps;
}

export const Order = ({ data, ...rest }: Props) => {

  const { colors } = useTheme()

  const statusColor = data.status === 'open' ? colors.secondary[700] : colors.green[300]

  return (
    <Pressable {...rest}>
      <HStack
        bg="gray.600"
        mb={4}
        alignItems="center"
        justifyContent="space-between"
        rounded="sm"
        overflow="hidden"
      >
        <Box h="full" w={2} bg={statusColor} />

        <VStack flex={1} my={5} ml={5}>
          <Text
            color="white"
            fontSize="md"
          >
            Patrimônio: {data.patrimony}
          </Text>

          <StackTextWithIcon>
            {data.when}
          </StackTextWithIcon>

        </VStack>

        <Circle bg="gray.500" w={12} h={12} mr={5}>
          {
            data.status === 'closed'
              ? (<CircleWavyCheck size={24} color={statusColor} />)
              : (<Hourglass size={24} color={statusColor} />)
          }
        </Circle>

      </HStack>
    </Pressable>
  );
}