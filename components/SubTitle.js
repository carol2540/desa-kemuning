import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const SubTitle = (props) => {
    const { url } = props

  return (
    <VStack
    spacing={5}
    align={'center'}
    >
        <Image
        alt="logo"
        width="80px"
        src={url}
        ></Image>
        <Heading color={"primary.100"}>
            {props.children}
        </Heading >
    </VStack>
  )
}
