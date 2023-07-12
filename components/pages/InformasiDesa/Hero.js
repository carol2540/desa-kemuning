import { Animate, Container } from '@/components'
import { Section } from '@/components/Section'
import { fade, zoomInRotate } from '@/components/animation/variants'
import { Box, Flex, Text, Heading } from '@chakra-ui/react'
import React from 'react'



export const Hero = (props) => {
  return (
    <Animate variants={fade} triggerOnce={true}>
    <Section
    position="relative"
    bgImage="/bg/profil.png"
    alignItems="center"
    justifyContent="center"
    {...props}
    >
        <Box   color={'white.100'} 
        zIndex={999}
        textAlign={'center'}
        >
          <Heading mb={3}>Selamat Datang</Heading>
          <Heading fontSize={'md'} >Desa Kemuning Legok, Kabupaten Tangerang</Heading>
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

