import React from "react";
import { VStack, Heading, Icon, useTheme } from 'native-base'
import { Envelope, Key } from 'phosphor-react-native'

import Logo from '../../assets/logo_primary.svg'
import { Button, Input } from "../../components/atoms"

export const SignIn = () => {
  const { colors } = useTheme()

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        placeholder="E-mail"
        marginBottom={4}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
      />

      <Input
        mb={8}
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key />} />}
        secureTextEntry
      />

      <Button title="Entrar" w="full" />
    </VStack>
  );
}