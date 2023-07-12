import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { postData } from './NewsTable';
import { Section } from '../Section'
import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Textarea } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export const AddNews = ({ onTabChange }) => {
    const validate = () => {
        let result = true
        if (title === '' || title === null) {
            result = false;
            toast.warning('Please Enter title');
        }
        if (desc === '' || desc === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        if (image === '' || image === null) {
          result = false;
          toast.warning('Please Enter Password');
        }
        if (location === '' || location === null) {
          result = false;
          toast.warning('Please Enter Password');
        }
        return result;
    }
    
        const [ title, setTitle ] = useState("")
        const [ desc, setDesc ] = useState("")
        const [ location, setLocation ] = useState("")
    
        const [ image, setImage] = useState()
        const router = useRouter();
    
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
    
        const handleImageChange = (event) => {
          setImage(event.target.files[0]);
        };
    
        const handleSubmit = async () => {
            if(validate()) {
              const data = {
                title: title,
                desc: desc,
                mainNews: false,
                subNews: false,
                image: "",
                location: location,
                date: new Date()
            }
    
            try {
                const file = image
                const storageRef = await uploadImage(file)
                data.image = storageRef; 
                
                await postData(data)
                onTabChange('news')
            } catch (error) {
                // Handle any errors that occurred during the execution
                console.error('Error:', error);
                toast.error('Fail :' + error.message);
            }
            }
            
        }
     
        const uploadImage = async (file) => {
          try {
            const storage = getStorage();
            const storageRef = ref(storage, 'images/' + file.name);
            await uploadBytes(storageRef, file);
        
            console.log('Image uploaded successfully!');
            const imageUrl = await getDownloadURL(storageRef); // Get the download URL of the uploaded image
            console.log("this is imageUrl ", imageUrl)
            return imageUrl; // Return the image URL
            // You can perform additional operations after the upload, if needed.
          } catch (error) {
            toast.error('Fail :' + error.message);
            console.error('Error uploading image:', error);
          }
        };
    
  return (
    <Box width={"80%"}>
        
        <Flex columnGap={6} justifyContent={'center'} height={'80px'} px={20} alignItems={'center'} py={4} width={"100%"} textAlign={"center"} mx={"auto"} bgColor={"primary.100"} color={"white"}>
            <Image width={"35px"} alt="logo" src='/logos/newswhite.png' />
            <Heading fontSize={'lg'}>Tambah Produk</Heading>
        </Flex>
        <Box p={8}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input  onChange={handleTitleChange} placeholder='Title' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Desc</FormLabel>
              <Textarea onChange={handleDescChange} placeholder='Desc' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Location</FormLabel>
              <Input onChange={handleLocChange} placeholder='Location' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>
              <Input type="file" accept="image/*" onChange={handleImageChange} placeholder='Desc' />
            </FormControl>

            <Button mt={4} onClick={handleSubmit} colorScheme='blue' mr={3}>
              Save
            </Button>
        </Box>
    </Box>
  )
}
