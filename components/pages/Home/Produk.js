import { Animate, Section } from '@/components'
import { DynamicImage } from '@/components/DynamicImage'
import { fade } from '@/components/animation/variants'
import { Button, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export const Produk = () => {
  return (
    <Animate variants={fade} triggerOnce={true}>
        <Section
            columnGap={10}
            flexDirection={{base:"column", lg:"row"}}
            justifyContent="center"
            rowGap={8}
        >
            <DynamicImage alt="" borderRadius={'md'} width={{lg:"50%", base:"100%"}} src='/product/Slideshow.png'/>
            <Flex direction={'column'} width={{lg:"50%", base:"100%"}} rowGap={4} alignItems={'start'}>
                <Heading>Produk UMKM Desa Kemuning</Heading>    
                <Text fontSize={{lg :'lg', base: 'md'}} >Klik tombol dibawah ini untuk melihat katalog produk umkm desa Kemuning</Text>
                <Link href={"/Product"}><Button borderRadius={'full'} variant={'outline'} borderColor={'primary.100'} color={'primary.100'} bg={'transparent'} _hover={{ bg:"primary.110"}}>Produk Lain</Button></Link>
            </Flex> 
        </Section>
    </Animate>
  )
}
