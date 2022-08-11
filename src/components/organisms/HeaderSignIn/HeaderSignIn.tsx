import Logo from '../../../assets/logo_primary.svg'
import { Heading } from 'native-base'

export const HeaderSignIn = () => {
  return (
    <>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>
    </>
  );
}