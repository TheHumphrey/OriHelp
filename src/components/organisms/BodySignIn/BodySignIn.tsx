import React, { useState } from "react"
import { useTheme, Icon } from "native-base"

import { Envelope, Key } from 'phosphor-react-native'

import { Button, Input } from "../../atoms"

type Props = {
  onPress: (email: string, password: string) => void;
}

export const BodySignIn = ({ onPress }: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { colors } = useTheme()

  return (
    <>
      <Input
        placeholder="E-mail"
        marginBottom={4}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
        value={email}
        onChangeText={setEmail}
      />

      <Input
        mb={8}
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key />} />}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Entrar" w="full" />
    </>
  );
}