import { Section } from '@/components/Section'
import { fetchData, fetchProduct } from '@/firebase/firebase'
import { Box, Button, Flex, Heading, Image, Skeleton, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const logos = [
    {
        url: "/logos/umkm/1.png"
    },
    {
        url: "/logos/umkm/2.png"
    },
    {
        url: "/logos/umkm/3.png"
    },
    {
        url: "/logos/umkm/4.png"
    },
]


export const MoreNews = () => {
    const [newsCount, setNewsCount] = useState(6)
   

    const [data, setData] = useState(null);
    const fetchDataAndSetData = async () => {
        const fetchedData = await fetchProduct();
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
        <Section flexWrap={'wrap'} justifyContent="space-between" pb={12} pt={12}>
            <Swiper
            speed={6000}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 0, // 2 seconds
            }}
            modules={[Autoplay]}
            >
                <Box transitionTimingFunction="linear" >
                    {logos.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Image alt="" width={"80px"} src={item.url} />
                        </SwiperSlide>
                    ))}
                </Box>
                
            </Swiper>
            {data ? data.slice(0, newsCount).map((news, index) => 
            
                <Flex mt={12} rowGap={2} columnGap={2} flexDirection={'column'} key={index} width={{lg:"30%", md:"50%", base:"100%"}}  justifyContent={'space-around'}>
                    <Image width={"100%"} src={news.image} alt="" borderRadius="30px" shadow={'md'} />
                    <Flex  rowGap={2} direction={'column'} width={{lg:"50%", base:"100%"}} >
                        <Link href={`/News/${news.id}`}>
                        <Flex direction={'column'}  rowGap={2} alignItems={'start'}>
                            <Heading fontSize={'lg'} noOfLines={2}>{news.name}</Heading>    
                            <Text noOfLines={4} fontSize={{lg :'sm', base: 'xs'}} >{news.price}</Text>
                            <Text noOfLines={4} fontSize={{lg :'sm', base: 'xs'}} >{news.contact}</Text>

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
