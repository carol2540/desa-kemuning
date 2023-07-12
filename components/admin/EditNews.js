import { db } from '@/firebase/firebase';
import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Textarea } from '@chakra-ui/react';
import { doc, getFirestore, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export const EditNews = ({ documentId, initialData }) => {
const router = useRouter()

    const validate = () => {
        let result = true
        if (title === '' || title === null) {
            result = false;
            toast.warning('Please Enter title');
        }
        if (desc === '' || desc === null) {
            result = false;
            toast.warning('Please Enter Desc');
        }
        if (location === '' || location === null) {
          result = false;
          toast.warning('Please Enter Location');
        }
        return result;
    }

    const [ title, setTitle ] = useState(initialData.title)
    const [ desc, setDesc ] = useState(initialData.desc)
    const [ location, setLocation ] = useState(initialData.location)

    const handleTitleChange = e => {
        setTitle(e.target.value)
    }

    const handleDescChange = e => {
        const valueWithLineBreaks = e.target.value.replace(/\n/g, '<br>');
        setDesc(valueWithLineBreaks)
    }

    const handleLocChange = e => {
      setLocation(e.target.value)
  }


    const handleSubmitForm = async (data) => {
        if(validate()) {
          const data = {
            title: title,
            desc: desc,
            location: location,
        }
        const firestore = getFirestore();
        const documentRef = doc(firestore, 'news', documentId);
    
        try {
          await updateDoc(documentRef, data);
          toast.success('News Edited Successfully')
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
              <FormLabel>Title</FormLabel>
              <Input  onChange={handleTitleChange} value={title} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Desc</FormLabel>
              <Textarea onChange={handleDescChange} value={desc} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Location</FormLabel>
              <Input onChange={handleLocChange} value={location} />
            </FormControl>


            <Button mt={4} onClick={handleSubmitForm} colorScheme='blue' mr={3}>
              Save
            </Button>
        </Box>
    </Box>
  )
}
