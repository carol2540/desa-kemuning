
import React, { useEffect, useRef, useState } from 'react'
import { Section } from '../Section'
import { Flex, Heading, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { db, fetchProduct } from '@/firebase/firebase'
import { collection, query, where, getDocs, doc, deleteDoc, addDoc } from 'firebase/firestore'
import moment from 'moment/moment'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

export const ProductTable = ({ onTabChange, onNewsChange }) => {
    const [data, setData] = useState(null);
    const router = useRouter();
    
    const handleEdit = (id, tab) => {
        onNewsChange(id)
        onTabChange(tab)
    }
    
  
    const handleDelete = async (documentId) => {
        try {
            const docRef = doc(db, 'products', documentId);
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
        const fetchedData = await fetchProduct();
        setData(fetchedData);
        console.log(fetchedData);
      };
   
    useEffect(() => {
        
        
          fetchDataAndSetData();
      }, []);

    
  return (
    <TableContainer width={"80%"} shadow={'md'}>
            <Flex columnGap={6}justifyContent={'center'} height={'80px'} px={20} alignItems={'center'} py={4} width={"100%"} textAlign={"center"} mx={"auto"} bgColor={"primary.100"} color={"white"}>
                <Image width={"35px"} alt="logo" src='/logos/produkwhite.png' />
                <Heading fontSize={'lg'}>Dashboard Produk</Heading>
            </Flex>
            <Table>
                <Thead >
                    <Tr>
                        <Th width={'30px'} textAlign={'center'}>id</Th>
                        <Th width={'50px'} textAlign={'center'}>Nama</Th>
                        <Th width={'30px'} textAlign={'center'}>Tanggal</Th>
                        <Th textAlign={'center'}>Harga</Th>
                        <Th textAlign={'center'}>Kontak</Th>
                        <Th textAlign={'center'}>Action</Th>
                    </Tr>
                </Thead>
                
                {data ?
                <Tbody>
                    {data.map((item, index) => (
                        <Tr key={index}>
                            <Td textAlign={'center'}>{item.id}</Td>
                            <Td textAlign={'center'}>{item.name}</Td>
                            <Td textAlign={'center'}>{item.date}</Td>
                            <Td textAlign={'center'}>{item.price}</Td>
                            <Td textAlign={'center'}>{item.contact}</Td>
                            <Td display={'flex'} justifyContent={'space-around'}>
                                <EditIcon onClick={() => handleEdit(item.id, "editProduct")} _hover={{cursor:"pointer"}} /> 
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
        </TableContainer>
  )
}
