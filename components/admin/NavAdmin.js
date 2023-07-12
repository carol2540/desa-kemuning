import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AddForm } from './AddProduct'
import { auth } from '@/firebase/firebase'
import { signOut } from 'firebase/auth'




export const NavAdmin = ({ onTabChange }) => {

    const handleLogout = async () => {
        try {
            await signOut(auth);
            // User logged out successfully
          } catch (error) {
            console.error("Error logging out:", error);
          }
    }

  return (
    <Flex direction={'column'} rowGap={4} width={"20%"} height={'100vh'} shadow={'xl'}>
        <Flex  JustifyContent={'space-between'} height={'80px'} px={20} alignItems={'center'} py={4} width={"100%"} textAlign={"center"} mx={"auto"} bgColor={"primary.100"} color={"white"}>
            <Image width={"35px"} alt="logo" src='/logo.png' />
            <Heading fontSize={'lg'}>Admin Desa Kemuning</Heading>
        </Flex>

        <Flex _hover={{cursor: "pointer"}}  onClick={() => onTabChange('news')} justifyContent={'space-between'} px={20} alignItems={'center'} py={4} width={"100%"} textAlign={"center"} mx={"auto"} >
            <Image width={"35px"} alt="logo" src='/logos/berita.png' />
            <Text>Dashboard Berita</Text>
        </Flex>
        <Flex _hover={{cursor: "pointer"}}  onClick={() => onTabChange('product')} justifyContent={'space-between'} px={20} alignItems={'center'} py={4} width={"100%"} textAlign={"center"} mx={"auto"} >
            <Image width={"35px"} alt="logos" src='/logos/produk.png' />
            <Text>Dashboard Produk</Text>

        </Flex>
        <Flex _hover={{cursor: "pointer"}}  onClick={() => onTabChange('newsForm')} justifyContent={'space-between'} px={20} alignItems={'center'} py={4} width={"100%"} textAlign={"center"} mx={"auto"} >
            <Image width={"35px"} alt="logo" src='/logos/berita.png' />
            <Text>Tambah Berita</Text>

        </Flex>
        <Flex _hover={{cursor: "pointer"}}  onClick={() => onTabChange('productForm')} justifyContent={'space-between'} px={20} alignItems={'center'} py={4} width={"100%"} textAlign={"center"} mx={"auto"} >
            <Image width={"35px"} alt="logo" src='/logos/produk.png' />
            <Text>Tambah Produk</Text>

        </Flex>
        <Flex    onClick={() => handleLogout()} _hover={{bgColor:"primary.110", cursor:"pointer", transition:'200ms'}} transition='200ms' marginTop="auto" justifyContent={'space-between'} px={20} alignItems={'center'} py={4} width={"100%"} textAlign={"center"} color={'white'} bgColor={"primary.100"} >
            <Image width={"35px"} alt="logo" src='/logos/logout.png' />
            <Text>Logout</Text>
        </Flex>
    </Flex>
  )
}
