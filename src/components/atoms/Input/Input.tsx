import { Input as NativeBaseInpute, IInputProps } from 'native-base'

export const Input = ({ ...rest }: IInputProps) => (
  <NativeBaseInpute
    bg="gray.700"
    h={14}
    size="md"
    borderWidth={0}
    fontSize="md"
    fontFamily="body"
    color="white"
    placeholderTextColor="gray.300"
    {...rest}
  />
)