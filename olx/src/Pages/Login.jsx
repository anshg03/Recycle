import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./Login.css";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        fullName: "",
        password: ""
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(() => {
            return {
                ...user,
                [name]: value
            }
        })
    }

    const handleLogin = () => {
        fetch('http://localhost:5000/api/Login', {

            method: 'POST',
            headers: { 'content-type': 'application/json' },
            mode: 'no-cors',
            body: JSON.stringify(user)

        }).then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(rejected => {
                console.log(rejected);
            });
    }
    return (


        <Flex
            h={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} w={'xl'} py={12} px={6} h={"xl"}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Login to your account</Heading>
                    <Text fontSize={'xl'} color={'gray.600'}>
                        to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'xl'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'xl'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'blue.400'}>Forgot password?</Link>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );

}

export default Login;