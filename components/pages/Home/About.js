import { Animate, Section } from '@/components'
import { fade } from '@/components/animation/variants'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export const About = () => {
  return (
    <Animate variants={fade} triggerOnce={true}>
        <Section
        position="relative"
        
        bgImage="/bg/about.png"
        >
            <Box   color={'white.100'} 
            zIndex={999}
            textAlign={"center"}
            margin="auto"
            
            >
            <Heading mb={7}>Tentang Desa Kemuning</Heading>
            <Text mb={5} fontSize={{lg :'lg', base: 'md'}} >Desa Kemuning disahkan pada tahun 1984 yang pada saat itu terjadi pemekaran wilayah dari Desa Caringin. Nama Desa Kemuning dipilih untuk dijadikan nama desa didasari karena adanya legenda masyarakat mengenai masjid yang muncul secara tiba tiba dan dikenal oleh masyarakat sebagai “Masjid Tiban”. Terdapat bedug besar yang terbuat dari kayu kemuning, menurut tetua setempat jika bedug besar tersebut ditabuh maka suaranya akan terdengar ratusan kilometer dari lokasi masjid. Motivasi pemberian nama kemuning juga didasari niat untuk membuat desa terkenal dan terdengar oleh masyarakat luas seperti hal-nya suara bedug kemuning dan dikenal baik seperti harumnya bunga kemuning.</Text>
                <Flex justifyContent={'center'} columnGap={10}>
                    <Link href="/InformasiDesa"><Button bgColor="white.100" color='primary.100' _hover={{ bg: '#e3e3e3' }}  borderRadius="full">Informasi Desa</Button></Link>
                   
                </Flex>
            </Box>
            <Box
            width="100%"
            height="100%"
            position="absolute"
            bgColor="RGBA(0, 0, 0, 0.16)"
            zIndex={1}
            top={0}
            left={0}
            />
            
            

        </Section>
    </Animate>
  )
}
