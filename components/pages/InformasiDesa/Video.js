import { Animate } from '@/components/Animate'
import { Section } from '@/components/Section'
import { fade } from '@/components/animation/variants'
import { Box, Button, Heading, Link } from '@chakra-ui/react'
import React from 'react'
import YouTubeVideo from '../commons/Youtube'

export const Video = () => {
  return (
    <Section justifyContent="space-around" flexDirection={{base: 'column', lg:'row'}}>
        <Animate variants={fade} triggerOnce="true" as='Box' width={{base: '100%', lg:'50%' }}>
                <YouTubeVideo videoId={'MAs1CldLz_U'} />
        </Animate>
        <Animate  variants={fade} triggerOnce="true" as='Box' width={{base: '100%', lg:'45%' }}>
            <Heading mb={6}>Video Profil Desa Kemuning Legok Tangerang</Heading>      
            <Link href={"/Umkm"}><Button borderRadius={'full'} variant={'outline'} borderColor={'primary.100'} color={'primary.100'} bg={'transparent'} _hover={{ bg:"primary.110"}}>Link Kanal Youtube</Button></Link>

        </Animate>
    </Section>
  )
}
