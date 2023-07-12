import { Animate } from '@/components/Animate'
import { Section } from '@/components/Section'
import { fadeInUp } from '@/components/animation/variants'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const crew = [
    {
        name: "Dadang, S.I.P",
        role: "Kepala Desa",
        image: '/crew/1.jpg' 
    },
    {
        name: "Eko Heri Prabowo",
        role: "Sekretaris Desa",
        image: '/crew/2.jpg' 
    },
    {
        name: "Anggi Alvian",
        role: "Kaur Keuangan",
        image: '/crew/3.jpg' 
    },
    {
        name: "Jamil",
        role: "Kasi Kesejahteraan",
        image: '/crew/4.jpg' 
    },
    
    {
        name: "Neneng",
        role: "Kasi Pelayanan",
        image: '/crew/5.jpg' 
    },
    {
        name: "Usman S.I.P",
        role: "Kasi Pemerintahan",
        image: '/crew/6.jpg' 
    },
    {
        name: "Ega Utami Amalia",
        role: "Pembantu Kasi Pelayanan",
        image: '/crew/7.jpg' 
    },
    {
        name: "Desi Wiyanti",
        role: "Operator",
        image: '/crew/8.jpg' 
    },
    {
        name: "Suapri",
        role: "Jaro 3",
        image: '/crew/9.jpg' 
    },
    {
        name: "Patuh Rohman",
        role: "Kaur Umum",
        image: '/crew/10.jpg' 
    },
    
]
export const Crew = () => {
  return (
    <Section flexWrap={'wrap'} columnGap={6} rowGap={6} mb={8}>
        {crew?.map((item, index) => (
            <Flex
            key={index}
            justifyContent={'space-evenly'}
            width={{base: '100%', md: '45%', lg: '30%'}}
            flexDir={'column'}
            flexWrap={'wrap'}
            columnGap={2} rowGap={2}
            alignItems={'flex-start'}
            >   
                <Animate variants={fadeInUp} triggerOnce="true">

                    <Image alt="" src={item.image} width={"100%"} borderRadius={'xl'} shadow={'lg'} />
                    <Text fontSize={'lg'} color={'black'}>{item.name}</Text>
                    <Text fontSize={'md'} color={'gray'}>{item.role}</Text>
                </Animate>
            </Flex>
        ))}
    </Section>
  )
}
