import { Animate, Section } from '@/components'
import { fadeInRight, fadeInUp } from '@/components/animation/variants'
import { Heading, Image } from '@chakra-ui/react'
import React from 'react'

export const Tree = () => {
  return (
    <Animate triggerOnce="true" variants={fadeInUp}>
    <Section
    direction="column"
    >
        <Heading fontSize={"4xl"} color={"primary.100"} textAlign={'center'} py={8}>
        Bagan Struktur Organisasi Tata Kerja Pemerintah Desa Kemuning
        </Heading>
        <Image alt="" src="./structure.png" />

    </Section>
    </Animate>
  )
}
