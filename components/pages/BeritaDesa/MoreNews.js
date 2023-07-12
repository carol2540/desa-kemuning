import { Section } from '@/components/Section'
import { fetchData } from '@/firebase/firebase'
import { Button, Flex, Heading, Image, Skeleton, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const MoreNews = () => {
    const [newsCount, setNewsCount] = useState(6)
   

    const [data, setData] = useState(null);
    const fetchDataAndSetData = async () => {
        const fetchedData = await fetchData();
        setData(fetchedData);
        console.log(fetchedData);
      };
   
    useEffect(() => {
          fetchDataAndSetData();
      }, []);

    const addCount = () => {
        setNewsCount(newsCount => newsCount + 6)
    }
    return (
        <Section flexWrap={'wrap'}>
            {data ? data.slice(0, newsCount).map((news, index) => 
            
                <Flex wrap={'wrap'} key={index} width={{lg:"50%", base:"100%"}}  height="125px"  justifyContent={'space-around'}>
                    <Image height={"100%"} src={news.image} alt="" borderRadius="30px" />
                    <Flex  height={"100%"} rowGap={2} direction={'column'} width={{lg:"50%", base:"100%"}} >
                        <Flex justifyContent={'space-between'}>
                            <Text fontSize={'xs'}>Admin</Text>
                            <Text fontSize={'xs'}>Februari 2023</Text>
                        </Flex>
                        <Link href={`/News/${news.id}`}>
                        <Flex direction={'column'}  rowGap={2} alignItems={'start'}>
                            <Heading fontSize={'lg'} noOfLines={2}>{news.title}</Heading>    
                            <Text noOfLines={4} fontSize={{lg :'sm', base: 'xs'}} >{news.desc}</Text>
                        </Flex> 
                        </Link>
                    </Flex>
                </Flex>
           
            ) :
            <>
                <Flex wrap={'wrap'} width={{lg:"50%", base:"100%"}}  height="125px"  justifyContent={'space-around'}>
                    <Skeleton />
                    <Skeleton>
                    </Skeleton>
                </Flex>
            </>
            
            }
            {newsCount < data?.length ? <Button onClick={addCount} borderRadius={'full'} variant={'outline'} borderColor={'primary.100'} color={'primary.100'} bg={'transparent'} _hover={{ bg:"primary.110"}}>See More</Button> :
            null
        }
            
        </Section>
    )
}
