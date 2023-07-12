import { Animate, SubTitle } from '@/components'
import { Section } from '@/components/Section'
import React, { useEffect, useState } from 'react'
import { Box, Text, Flex, Heading, Button, Skeleton } from '@chakra-ui/react'
import { fadeInUp } from '@/components/animation/variants'
import { fetchData } from '@/firebase/firebase'
import Link from 'next/link'
import BeritaDesa from '../BeritaDesa'
import { BoxNews } from '../commons/BoxNews'


export const SubNews = () => {
    const [data, setData] = useState(null);
    const fetchDataAndSetData = async () => {
        const fetchedData = await fetchData();
        fetchedData.slice(fetchedData, 3)
        setData(fetchedData.sort(() => Math.random() - 0.5));
        console.log(fetchedData);
      };

    useEffect(() => {
        
        
          fetchDataAndSetData();

      }, []);
    // const filteredNews = news.filter(

    // const theNews = data.slice(data, 3)
  return (
    <Animate variants={fadeInUp} triggerOnce={true}>
        <Section
        direction="column"
        justifyContent="center"
        rowGap={20}
        pt={{lg:'200px', base:'450px'}}
        position={'relative'}
        >
            <BoxNews zIndex={9999} top={0} left={'50%'} width={'80%'} bgColor={"white"} transform={{base:"translate(-55%, -30%)",lg:"translate(-52%, -50%)" }} position={'absolute'} flexDirection={{base:'column', lg:'row'}} />
            <SubTitle 
            url="/logos/Iconoir.png"

            >
                Berita Desa
            </SubTitle>
            
            <Flex
            direction={{base:"column", lg:"row"}}
            columnGap={10}
            >

                {data ?
                data.slice(0, 3).map((items, index) =>
                    <Box  flex="1" flexGrow="1" flexBasis="0" my={4} key={index} >
                        <Link href={`/News/${items.id}`} >
                            <Text fontSize={'sm'} mb={4} color={'gray'}>{items.date}</Text>
                            <Text fontWeight={800} noOfLines={2} mb={2}>{items.title}</Text>
                            <Text  color={'gray'} noOfLines={2}>{items.desc}</Text>
                        </Link>
                    </Box>
                ) :
                <>
                    <Box >
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </Box>
                    <Box >
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </Box>
                    <Box >
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </Box>
                    </>
                }

            </Flex>
            <Link href="/BeritaDesa"><Button borderRadius={'full'} variant={'outline'} borderColor={'primary.100'} color={'primary.100'} bg={'transparent'} _hover={{ bg:"primary.110"}}>Berita Lainnya</Button></Link>
        </Section>
    </Animate>
  )
}
