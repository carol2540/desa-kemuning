import { Section } from '@/components'
import { useAuth } from '@/context/AuthContext'
import { Button, FormControl, Heading, Img, Input, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'

export const SignIn = () => {
    const [userData, setUserData] = useState({
        email : "",
        password : ""
    })
    const [error, setError] = useState(null)
    const [isLoggingIn, setIsLoggingIn] = useState(true)

    const { login, signup, currentUser } = useAuth()
    console.log(currentUser)

    const handleChange = e => {
        setUserData({...userData, [e.target.name] : e.target.value})
    }

    async function submitHandler() {
        if (!userData.email || !userData.password) {
            setError('Please enter email and password')
            return
        }
        if (isLoggingIn) {
            try {
                await login(userData.email, userData.password)
            } catch (err) {
                setError('Incorrect email or password')
            }
            return
        }
        await signup(userData.email, userData.password)
    }


  return (
    <Section bgColor="primary.100" flexDirection="column" alignItems="center" justifyContent="center" rowGap={5}>
        <Img alt="" src='/logos/logo.png' width={"100px"}/>
            <FormControl color={"white"} mx={'auto'} textAlign={'center'}>
                <Heading mb="6">Admin Kantor Desa Kemuning</Heading>
                <Stack direction='column' spacing='3'>
                    <Input onChange={e => handleChange(e)} name="email" shadow='base' type='text'  _placeholder={{ color: 'whiteAlpha.800' }} textColor={'white'} placeholder="Input Your Email"></Input>
                    <Input  onChange={e => handleChange(e)} name="password" shadow='base' type='password' _placeholder={{ color: 'whiteAlpha.800' }} textColor='white'  placeholder="Input Your Password"></Input>
                </Stack>
                <Button onClick={submitHandler} mt={'6'} colorScheme='white' type='submit' variant={'outline'}>Sign In</Button>
            </FormControl>
    </Section>
  )
}

