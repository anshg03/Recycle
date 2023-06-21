import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
} from "@chakra-ui/react";

function Login() {
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setcredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();

    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
    }
  };
  return (
    <Flex
      h={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} w={"xl"} py={12} px={6} h={"xl"}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login to your account</Heading>
          <Text fontSize={"xl"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"xl"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"xl"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"} onClick={() => navigate("/signup")} >Don't have an account</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleLogin}
              >
                Log in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Login;
