import React from "react"
import { VStack } from 'native-base'

import {
  BodySignIn,
  HeaderSignIn
} from "../../components/organisms"

export const SignIn = () => {

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <HeaderSignIn />

      <BodySignIn onPress={() => { }} />
    </VStack>
  );
}