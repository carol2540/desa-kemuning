import { Animate, Section, SubTitle } from '@/components'
import { fadeInUp } from '@/components/animation/variants'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React from 'react'

export const Faq = () => {
  return (
    <Animate variants={fadeInUp} triggerOnce={true}>

        <Section
        direction="column"
        rowGap={10}
        justifyContent="center"
        >
            <SubTitle
                url="/logos/Iconoir2.png"

                >
                    Tanya Jawab Umum
            </SubTitle>
            <Accordion color={"primary.100"}  allowMultiple width={"100%"} shadow={"xl"} borderRadius={"xl"}>
                <AccordionItem borderTop={'none'} borderBottom={'1px'}  borderColor={'gray.200'}>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton color={'primary.100'} fontWeight={'400'} py={"15px"}>
                            <Box as="span" flex='1' textAlign='left' fontSize={"lg"}>
                            Ada apa saja di desa Kemuning?
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color={'gray'} pb={4} fontSize={"md"} px={8}>
                        Desa Kemuning memiliki beragam industri rumahan yang menjadi kekhasan desa Kemuning dan terdapat kampung budaya Legok yang mengenalkan serta melestarikan batik parakan khas legok
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>

                <AccordionItem borderBottom={'1px'} borderColor={'gray.200'}>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton color={'primary.100'} fontWeight={'400'}  py={"15px"}>
                            <Box as="span" flex='1' textAlign='left' fontSize={"lg"}>
                            Bagaimana cara untuk mendapatkan produk UMKM desa Kemuning?
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color={'gray'} pb={4} fontSize={"md"} px={8}>
                        Anda dapat menghubungi nomor yang tertera di produk produk yang ada dalam katalog UMKM untuk nantinya diarahkan ke nomor whatsapp penjual
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>
                <AccordionItem borderBottom={'1px'} borderColor={'gray.200'}>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton color={'primary.100'} fontWeight={'400'}  py={"15px"}>
                            <Box as="span" flex='1' textAlign='left' fontSize={"lg"}>
                            Bagaimana cara menghubungi Kantor Desa Kemuning Legok?
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color={'gray'} pb={4} fontSize={"md"} px={8}>
                        Anda dapat mengunjungi laman instagram dan facebook desa kemuning yang tercantum pada bagian bawah website dan juga menghubungi nomor telepon 
yang ada dibagian bawah website atau mengunjungi langsung ke alamat yang telah tercantum
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>
            </Accordion>
        </Section>
    </Animate>
  )
}
