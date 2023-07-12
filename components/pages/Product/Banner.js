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
    bgImage="/product/Slideshow.png"
    alignItems="center"
    justifyContent="center"
    minHeight="70vh"
    >
        <Box   color={'white.100'} 
        zIndex={999}
        textAlign={'center'}
        width={"50%"}
        >
          <Heading fontSize={'2xl'} mb={3}>Produk UMKM Desa Kemuning Legok</Heading>
          <Heading fontSize={'lg'} >Produk makanan maupun kerajinan khas Desa Kemuning Legok dapat dilihat disini.</Heading>
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
