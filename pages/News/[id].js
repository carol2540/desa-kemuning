import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Animate, Section } from '@/components'
import { HStack, Heading, Image, Skeleton, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { fade } from '@/components/animation/variants'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import { BoxNews } from '@/components/pages/commons/BoxNews'

export const News = () => {
    const router = useRouter()
    const { id } = router.query

    const [mainNews, setMainNews] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
        const fec = await getDocs(query(collection(db, 'news'), where('__name__', '==', id)))

        if (fec.empty) {
            // Document with the specified ID not found, redirect to 404 page
            router.push('/404');
            return;
          }
          
        setMainNews(fec.docs.map(doc => doc.data()))
        }
        fetchData()
    }, [router.query])
  return (
    <>
    {mainNews ? (mainNews.map((item, index) => (
    <Animate pt="140px" key={index} variants={fade} triggerOnce={true}>
        <Section flexDirection={{base:"column", lg:"row"}}>
            <VStack alignItems={'flex-start'} width={{base: '100%', lg:'70%'}}>
                <HStack >
                    <Link href="/BeritaDesa"><Text>Berita Desa</Text></Link>
                    
                    <Text isTruncated maxWidth={{base:'120px', lg:'70%'}}> &gt; {item.title}</Text>
                </HStack>

                <Heading>{item.title}</Heading>
                <Image shadow={'sm'} alt="" src={item.image} width={'100%'} borderRadius={'3xl'} />
                <Text py={8}>
                    <b>{item.location}</b> - {item.desc}
                </Text>
            </VStack>
            <BoxNews width={{base: '100%', lg:'30%'}}>
              <Heading textAlign={'center'} fontSize={'2xl'}>Berita Lainnya</Heading>
            </BoxNews>

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

export default News