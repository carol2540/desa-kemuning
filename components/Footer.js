import React from 'react'
import { Section } from './Section'
import { Box, Flex, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <Flex 
    py={"8rem"}
    px={{ base: "2rem", md: "6rem", xl: "8rem", "2xl": "10rem" }}
    bgColor="primary.100" color="white.100" flexDirection="column" justifyContent="center" rowGap={20} alignItems="center">
        <Flex width="100%" justifyContent={"space-between"}>
            <Flex width="50%" columnGap={5} rowGap={5} direction={{base: "column", lg: "row"}}>
                <Box>
                    <Heading fontSize={{md :"2xl", base:"lg"}} mb={5}>Kontak</Heading>
                    <Link href={`mailto:desakemuninglgk@gmail.com`}>  <Text fontSize={{md :"md", base:"sm"}}>desakemuninglgk@gmail.com</Text></Link>
                    <Text fontSize={{md :"md", base:"sm"}}>021-29871982</Text>
                </Box>
                <Link  href={"https://goo.gl/maps/PsszbhQH5tqrSteZ6"}>
                    <Heading fontSize={{md :"2xl", base:"lg"}} mb={5}>Alamat</Heading>
                    <Text fontSize={{md :"md", base:"sm"}}>Jl. Bojong, Kemuning, Legok,</Text>
                    <Text fontSize={{md :"md", base:"sm"}}>Tangerang, Banten 15820, Indonesia</Text>
                </Link>
            </Flex>
            <Box textAlign={"end"}>
                <Heading fontSize={{md :"2xl", base:"lg"}} mb={5}>Bekerja Sama Dengan</Heading>
                <HStack justifyContent={"end"}>
                    <Image alt="" src="/logos/umn.png" width={"50px"} />
                    <Image alt="" src="/logos/logo.png" width={"35px"} />
                </HStack>
            </Box>
        </Flex>
        <Flex pt={4} justifyContent={"space-between"} borderTop={"2px"} borderColor={"white"} width="100%">
            <Flex columnGap={2}>
            <Text fontSize={{md :"sm", base:"xs"}} pe={3} borderRight={'white solid 1pt'}> &copy; 2023 Kantor Desa Kemuning Legok</Text>
            <Link href={'/Credits'}><Text fontSize={{md :"sm", base:"xs"}}> Di Balik Website Desa Kemuning</Text></Link>
            
            </Flex>
            <Flex columnGap={2}>
                <Link href={"https://instagram.com/desakemuning_legok"} >  
                    <Image alt="" src="/logos/instagram.svg"  />    
                </Link>
                <Link href={"https://www.facebook.com/profile.php?id=100070029061904&mibextid=ZbWKwL"}>
                    <Image alt="" src="/logos/facebook.svg"  />
                </Link>
            </Flex>
        </Flex>
    </Flex>
  )
}
