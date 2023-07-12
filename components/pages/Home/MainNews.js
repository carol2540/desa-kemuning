import { Animate, Container } from '@/components'
import { Section } from '@/components/Section'
import { fade, zoomInRotate } from '@/components/animation/variants'
import { db } from '@/firebase/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { Box, Flex, Text, Heading, Skeleton } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'



export const MainNews = (props) => {

  const [mainNews, setMainNews] = useState(null)
  let data = useRef(mainNews)
  useEffect(() => {
    const fetchData = async () => {
      const fec = await getDocs(query(collection(db, 'news'), where('mainNews', '==', true)))

      setMainNews(fec.docs.map(doc => ({ id: doc.id, ...doc.data()})))
      console.log(mainNews)
    }
    fetchData()
  }, [])
  

  return (
    <>

      {mainNews ? (mainNews.map((item, index) => (
        <Animate key={index} variants={fade} triggerOnce={true}>
        <Section
        key={item.id}
        position="relative"
        bgImage={item.image}
        {...props}
        >
            <Box   color={'white.100'} 
            zIndex={999}
            width={{base: '100%', md: '60%'}}
            >
              <Text fontSize={'sm'} mb={5}>{item.location}</Text>
              <Link href={`/News/${item.id}`}>
                <Heading mb={3} noOfLines={1}>{item.title}</Heading>

              </Link>
              <Text fontSize={'md'} noOfLines={2} >{item.desc}</Text>
            </Box>
            <Box
            width="100%"
            height="100%"
            position="absolute"
            bgColor="RGBA(0, 0, 0, 0.36)"
            zIndex={1}
            top={0}
            left={0}
            />
        </Section>
        </Animate>
      ))) :
        <Skeleton>
          <Section>

          </Section>
        </Skeleton>
      }
    
    </>
  )
}

