import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { postData, postProduct } from './NewsTable';
import { Section } from '../Section'
import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Textarea } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export const AddProduct = ({ onTabChange }) => {
    const validate = () => {
        let result = true
        if (name === '' || name === null) {
            result = false;
            toast.warning('Please Enter Name');
        }
        if (price === '' || price === null) {
            result = false;
            toast.warning('Please Enter Price');
        }
        if (image === '' || image === null) {
          result = false;
          toast.warning('Please Insert Image');
        }
        if (contact === '' || contact === null) {
          result = false;
          toast.warning('Please Enter Contact');
        }
        return result;
    }
    
        const [ name, setName ] = useState("")
        const [ price, setPrice ] = useState("")
        const [ contact, setContact ] = useState("")
    
        const [ image, setImage] = useState()
        const router = useRouter();
    
        const handleNameChange = e => {
            setName(e.target.value)
        }
    
        const handlePriceChange = e => {
            setPrice(e.target.value)
        }
    
        const handleContactChange = e => {
          setContact(e.target.value)
      }
    
        const handleImageChange = (event) => {
          setImage(event.target.files[0]);
        };
    
        const handleSubmit = async () => {
            if(validate()) {
              const data = {
                name: name,
                price: price,
                image: "",
                contact: contact,
                date: new Date()
            }
    
            try {
                const file = image
                const storageRef = await uploadImage(file)
                data.image = storageRef; 
                
                await postProduct(data)
                onTabChange('product')
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
            <Image width={"35px"} alt="logo" src='/logos/produkwhite.png' />

            <Heading fontSize={'lg'}>Tambah Produk</Heading>
        </Flex>
        <Box p={8}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input  onChange={handleNameChange} placeholder='Name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Textarea onChange={handlePriceChange} placeholder='Price' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Contact</FormLabel>
              <Input onChange={handleContactChange} placeholder='Contact' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>
              <Input type="file" accept="image/*" onChange={handleImageChange} placeholder='Image' />
            </FormControl>

            <Button mt={4} onClick={handleSubmit} colorScheme='blue' mr={3}>
              Save
            </Button>
        </Box>
    </Box>
  )
}
