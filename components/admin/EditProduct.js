import { db } from '@/firebase/firebase';
import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Textarea } from '@chakra-ui/react';
import { doc, getFirestore, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export const EditProduct = ({ documentId, initialData }) => {
const router = useRouter()

    const validate = () => {
        let result = true
        if (name === '' || name === null) {
            result = false;
            toast.warning('Please Enter name');
        }
        if (price === '' || price === null) {
            result = false;
            toast.warning('Please Enter price');
        }
        if (contact === '' || contact === null) {
          result = false;
          toast.warning('Please Enter contact');
        }
        return result;
    }

    const [ name, setName ] = useState(initialData.name)
    const [ price, setPrice ] = useState(initialData.price)
    const [ contact, setContact ] = useState(initialData.contact)

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handlePriceChange = e => {
        setPrice(e.target.value)
    }

    const handleContactChange = e => {
      setContact(e.target.value)
  }


    const handleSubmitForm = async (data) => {
        if(validate()) {
          const data = {
            name: name,
            price: price,
            contact: contact,
        }
        const firestore = getFirestore();
        const documentRef = doc(firestore, 'products', documentId);
    
        try {
          await updateDoc(documentRef, data);
          toast.success('Product Edited Successfully')
          router.push('/Admin'); // Redirect to home page after successful update
        } catch (error) {
          console.error('Error updating document:', error);
          toast.error('Fail :' + error.message);
        }
      };
    }
  return (
    <Box width={"80%"}>
        <Flex columnGap={6} justifyContent={'center'} height={'80px'} px={20} alignItems={'center'} py={4} width={"100%"} textAlign={"center"} mx={"auto"} bgColor={"primary.100"} color={"white"}>
            <Image width={"35px"} alt="logo" src='/logos/newswhite.png' />
            <Heading fontSize={'lg'}>Edit Berita</Heading>
        </Flex>
        <Box p={8}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input  onChange={handleNameChange} value={name} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Textarea onChange={handlePriceChange} value={price} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Contact</FormLabel>
              <Input onChange={handleContactChange} value={contact} />
            </FormControl>


            <Button mt={4} onClick={handleSubmitForm} colorScheme='blue' mr={3}>
              Save
            </Button>
        </Box>
    </Box>
  )
}
