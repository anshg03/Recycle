import React from "react";
import "./NavbarBeforeLogin.css";
import { useNavigate } from "react-router-dom";
import { Button, Center, Flex, HStack, Heading, Input, Spacer, Text } from "@chakra-ui/react";

function NavbarBeforeLogin() {
    const navigate = useNavigate();
    return (
        <Flex className="navbar" as="nav">
            <Heading className="heading" as="h1">OLX</Heading>
            <Spacer />
            <Center w={{ sm: "20%", lg: "38.88%" }}>
                <Input placeholder="Search" variant="filled" className="input" />
            </Center>
            <HStack className="credentials">
                <Button colorScheme="none" size="lg" name="login" onClick={() => navigate("/login")}>Login</Button>
                <Text className="separator">I</Text>
                <Button colorScheme="none" size="lg" name="signup" onClick={() => navigate("/signup")}>Sign Up</Button>
            </HStack>

        </Flex>
    )
}

export default NavbarBeforeLogin;