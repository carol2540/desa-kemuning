import { Animate } from '@/components/Animate'
import { Section } from '@/components/Section'
import { fade } from '@/components/animation/variants'
import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

export const Banner = () => {
  return (
    <Animate variants={fade} triggerOnce={true}>
    <Section
    position="relative"
    bgImage="/bg/informasidesa.png"
    alignItems="center"
    justifyContent="start"
    minHeight="70vh"
    >
        <Box   color={'white.100'} 
        zIndex={999}
        textAlign={'start'}
        width={"50%"}
        >
          <Heading fontSize={'6xl'} mb={3}>Berita Desa</Heading>
          <Heading fontSize={'xl'} >Laman untuk mengetahui berbagai informasi penting seputar Desa Kemuning</Heading>
        </Box>
        <Box
        width="100%"
        height="100%"
        position="absolute"
        bgColor="RGBA(0, 0, 0, 0.3)"
        zIndex={1}
        top={0}
        left={0}
        />
        
        

    </Section>
    </Animate>
  )
}
