import React from "react";
import "./NavbarAfterLogin.css";
import { Button, Center, Flex, HStack, Heading, Input, Spacer, Text } from "@chakra-ui/react";

function NavbarAfterLogin() {
    return (
        <Flex className="navbar" as="nav">
            <Heading className="heading" as="h1">OLX</Heading>
            <Spacer />
            <Center w={{ sm: "20%", lg: "38.88%" }}>
                <Input placeholder="Search" variant="filled" className="input" />
            </Center>
            <HStack className="credentials">
                <Text className="username">Username</Text>
                <Button colorScheme="none" size="lg">Cart</Button>
            </HStack>
        </Flex>
    )
}

export default NavbarAfterLogin;