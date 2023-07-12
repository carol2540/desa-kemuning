import { Animate, Container, Section } from '@/components'
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const Content = () => {
  return (
    <Animate>
        <Box
        boxShadow={'lg'}
        borderRadius={"lg"}>
            <Container
            direction={{base: "row", lg: "column"}}
            columnGap={5}
            rowGap={5}
            
            height={{base: "100vh", lg: "100%"}}>
                <Flex
                direction={{base: "column", lg: "row"}}
                columnGap={5}
                rowGap={5}
                
                >
                    <Flex
                    width={{base:"100%", lg:"29%"}}
                    height="100%"
                    py={12}
                    justify={{base: "space-between", lg: "center"}}
                    >
                        <Heading fontSize={"5xl"} color={"lightblue.100"} mr={4}>8100</Heading>
                        <Box my={"auto"}>
                            <Text>Jumlah</Text>
                            <Text>Penduduk</Text>
                        </Box>
                    </Flex>
                    <Flex
                    width={{base:"100%", lg:"29%"}}
                    height="100%"
                    py={12}
                    justify={{base: "space-between", lg: "center"}}
                    >
                        <Heading fontSize={"5xl"} color={"lightblue.100"} mr={4}>2.238</Heading>
                        <Box my={"auto"}>
                            <Text>Jumlah</Text>
                            <Text>Kepala Keluarga</Text>
                        </Box>
                    </Flex>
                    <Flex
                    width={{base:"100%", lg:"42%"}}
                    height="100%"
                    py={12}
                    justify={{base: "space-between", lg: "center"}}
                    >
                        <Heading fontSize={"5xl"} color={"lightblue.100"} mr={4}>247,11 Ha</Heading>
                        <Box my={"auto"}>
                            <Text>Wilayah </Text>
                            <Text>Desa</Text>
                        </Box>
                    </Flex>
                    <Divider orientation={{base:'horizontal', lg:'vertical'}} />
                </Flex>
            </Container>
            
            
        </Box>
    </Animate>
  )
}
