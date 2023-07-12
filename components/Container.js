import { Container as ChakraContainer} from '@chakra-ui/react'

export const Container = ({ children, ...rest }) => {
  return (
    <ChakraContainer height="100%" maxW="none" px={{ base: "2rem", md: "6rem", xl: "8rem", "2xl": "10rem" }} {...rest}>
      {children}
    </ChakraContainer>
  );
};
