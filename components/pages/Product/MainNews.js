import { Animate } from '@/components/Animate'
import { Section } from '@/components/Section'
import { fade } from '@/components/animation/variants'
import { db, fetchData, fetchProduct } from '@/firebase/firebase'
import { Button, Flex, Heading, Image, Skeleton, Text } from '@chakra-ui/react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

export const MainNews = () => {
    const [data, setData] = useState(null);
  
    const fetchDataAndSetData = async () => {
      const fetchedData = await fetchProduct();
      setData(fetchedData);
      console.log(fetchedData);
    };
  
    useEffect(() => {
      fetchDataAndSetData();
    }, []);
  
    return (
      <Animate variants={fade} triggerOnce={true}>
        {data ? (
          data
            .map((item, index) => (
              <Section
                key={index}
                columnGap={10}
                flexDirection={{ base: 'column', lg: 'row' }}
                justifyContent="center"
                rowGap={8}
                minHeight="70vh"
              >
                <Image alt="" borderRadius={'md'} width={{ lg: '50%', base: '100%' }} src={item.image} />
                <Flex rowGap={8} columnGap={4} direction={'column'} width={{ lg: '50%', base: '100%' }} justifyContent={'space-between'}>
                  <Flex justifyContent={'space-between'}>
                    <Text fontSize={{ lg: 'md', base: 'sm' }}>{item.contact}</Text>
                    <Text fontSize={{ lg: 'md', base: 'sm' }}>{item.date}</Text>
                  </Flex>
                  <Link href={`/News/${item.id}`}><Flex direction={'column'} rowGap={4} alignItems={'start'}>
                    <Heading noOfLines={2}>{item.name}</Heading>
                    <Text noOfLines={4} fontSize={{ lg: 'lg', base: 'md' }}>{item.price}</Text>
                  </Flex></Link>
                </Flex>
              </Section>
            ))
        ) : (
          <Skeleton />
        )}
      </Animate>
    );
  };
  