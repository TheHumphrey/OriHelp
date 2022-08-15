import { HStack, Text, useTheme } from 'native-base'
import { ClockAfternoon } from 'phosphor-react-native'

type Props = {
  children: React.ReactNode;
}

export const StackTextWithIcon = ({ children }: Props) => {
  const { colors } = useTheme()

  return (
    <HStack alignItems="center">
      <ClockAfternoon
        size={15}
        color={colors.gray[300]}
      />
      <Text
        color="gray.200"
        fontSize="xs"
        ml={1}
      >
        {children}
      </Text>
    </HStack>
  );
}