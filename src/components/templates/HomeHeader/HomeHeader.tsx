import { HStack, Heading, Text } from 'native-base'

type Props = {
  orderLength: number;
}

export const HomeHeader = ({ orderLength = 0 }: Props) => {
  return (
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
        {orderLength}
      </Text>
    </HStack>
  );
}