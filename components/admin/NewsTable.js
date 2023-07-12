
import React, { useEffect, useRef, useState } from 'react'
import { Section } from '../Section'
import { Box, Flex, Heading, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { db, fetchData } from '@/firebase/firebase'
import { collection, query, where, getDocs, doc, deleteDoc, addDoc } from 'firebase/firestore'
import moment from 'moment/moment'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { EditMainNewsButton } from './EditMainNewsButton'

export const postData = async (data) => {
    try {
      const collectionRef = collection(db, 'news');
      await addDoc(collectionRef, data);
      toast.success('News Added!');
      console.log('Data successfully posted to Firestore');
    } catch (error) {
      console.error('Error posting data to Firestore: ', error);
      toast.error('Fail :' + error.message);
  
    }
  };

  export const postProduct = async (data) => {
    try {
      const collectionRef = collection(db, 'products');
      await addDoc(collectionRef, data);
      toast.success('Product Added!');
      console.log('Data successfully posted to Firestore');
    } catch (error) {
      console.error('Error posting data to Firestore: ', error);
      toast.error('Fail :' + error.message);
  
    }
  };


export const NewsTable = ({ onTabChange, onNewsChange }) => {
    const [data, setData] = useState(null);
    const router = useRouter();
    
    const handleEdit = (id, tab) => {
        onNewsChange(id)
        onTabChange(tab)
    }
  
    const handleDelete = async (documentId) => {
        try {
            const docRef = doc(db, 'news', documentId);
            await deleteDoc(docRef);
            console.log('Document deleted successfully.');
            toast.success('Document deleted successfully.');
            fetchDataAndSetData()
          } catch (error) {
            console.error('Error deleting document:', error);
            toast.error('Fail :' + error.message);
    
          }
    }
    const fetchDataAndSetData = async () => {
        const fetchedData = await fetchData();
        setData(fetchedData);
        console.log(fetchedData);
      };
   
    useEffect(() => {
        
        
          fetchDataAndSetData();
      }, []);

    
  return (
    <TableContainer width={"80%"} shadow={'md'}>
            <Flex overflow={'hidden'} columnGap={6} justifyContent={'center'} height={'80px'} px={20} alignItems={'center'} py={4} width={"100%"} textAlign={"center"} mx={"auto"} bgColor={"primary.100"} color={"white"}>
            <Image width={"35px"} alt="logo" src='/logos/newswhite.png' />
                <Heading fontSize={'lg'}>Dashboard Berita</Heading>
            </Flex>
            <Box maxWidth={'100%'} overflow={"scroll"}>
            <Table height={"100%"}>
                <Thead >
                    <Tr>
                        <Th width={'30px'} textAlign={'center'}>id</Th>
                        <Th width={'50px'} textAlign={'center'}>Judul</Th>
                        <Th width={'30px'} textAlign={'center'}>Tanggal Terbit</Th>
                        <Th textAlign={'center'}>Desc</Th>
                        <Th textAlign={'center'}>Lokasi</Th>
                        <Th textAlign={'center'}>Berita Utama</Th>
                        <Th textAlign={'center'}>Action</Th>
                    </Tr>
                </Thead>
                
                {data ?
                <Tbody>
                    {data.map((item, index) => (
                        <Tr key={index}>
                            <Td textAlign={'center'}>{item.id}</Td>
                            <Td textAlign={'center'}>{item.title}</Td>
                            <Td textAlign={'center'}>{item.date}</Td>
                            <Td maxW="100px" overflow={"hidden"} textAlign={'center'}>{item.desc}</Td>
                            <Td textAlign={'center'}>{item.location}</Td>
                            <Td textAlign={'center'}>
                              {item.mainNews == true? 
                                <Text>Yes</Text> :
                                <EditMainNewsButton itemId={item.id} /> 
                            }
                              
                            </Td>

                            <Td display={'flex'} justifyContent={'space-around'}>
                                <EditIcon onClick={() => handleEdit(item.id, "editNews")} _hover={{cursor:"pointer"}} /> 
                                <DeleteIcon _hover={{cursor:"pointer"}} onClick={() => handleDelete(item.id)}/>
                            </Td>

                        </Tr>
                    ))}
                </Tbody>
                 :
                
                <Tbody>
                    <Tr>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                    
                    </Tbody>
                    }
            </Table>
            </Box>
            
        </TableContainer>
  )
}
