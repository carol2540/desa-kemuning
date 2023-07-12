import React from "react";
import { Flex } from "@chakra-ui/react";
import { Container } from "./Container";

export const Section = (props) => {
  return (
    <Flex
      as="section"
      minH="100vh"
      bgSize="cover"
      bgPosition="center"
      alignItems="center"
      px={{ base: "2rem", md: "6rem", xl: "8rem", "2xl": "10rem" }}
      {...props}
        bgRepeat="no-repeat"
    >

            {props.children}

    </Flex>
  );
};
