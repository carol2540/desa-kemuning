import { fetchData } from '@/firebase/firebase';
import { Box, Flex, Skeleton, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export const BoxNews = (props) => {
    const [data, setData] = useState(null);
    const router = useRouter();
    const fetchDataAndSetData = async () => {
        const fetchedData = await fetchData();
        fetchedData.slice(fetchedData, 3)
        setData(fetchedData.sort(() => Math.random() - 0.5));
        console.log(fetchedData);
      };

    useEffect(() => {
        
        
          fetchDataAndSetData();

      }, [router.query]);
  return (
    <Flex m={8} direction={{base:"column"}}
    columnGap={10} rowGap={12} p={8} borderRadius={'xl'} shadow={'xl'} {...props}>
                
                {props.children}
                {data ?
                data.slice(0, 3).map((items, index) =>
                    <Box  flex="1" flexGrow="1" flexBasis="0" key={index} >
                        <Link href={`/News/${items.id}`} passHref>
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
  )
}
