import { Box, Flex, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from './NavLink';
import { Container } from './Container';
import Link from 'next/link';

const navLinks = [
  {
    text: "Informasi Desa",
    targetId: "/InformasiDesa",
  },
  {
    text: "Berita Desa",
    targetId: "/BeritaDesa",
  },
  {
    text: "UMKM",
    targetId: "/Product",
  },
];

export const Navbar = () => {
  return (
    <Flex shadow="md" position="fixed" top={0} width="100%" bgColor={'#ffffff'} height="80px" alignItems="center" zIndex="10000">
    <Container>
      <Flex width="100%" alignItems="center" justifyContent={'space-between'} height="100%" px="xl">
        <Link href={"/"}>
          <Flex alignItems="center" columnGap={10}>
            <Image alt="logo" src="/logos/logo.png" height="50px" />
            <Heading fontSize="1.3em">Desa Kemuning Legok</Heading>
          </Flex>
        </Link>
        <Stack direction="row" spacing="9" display={{base:"none", md:"flex"}}>
          {navLinks.map((link) => (
            <NavLink
              key={link.text}
              text={link.text}
              targetId={link.targetId}
            />
          ))}
        </Stack>
      </Flex>
    </Container>`
    </Flex>
  )
}
