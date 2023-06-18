import React from "react";
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, ButtonGroup, Button } from '@chakra-ui/react';

function CardDisplay(props) {
    return (
        <Card maxW='xl' variant="filled" >
            <CardBody>
                <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='xl'>{props.name}</Heading>
                    <Heading size="lg">Details</Heading>
                    <Text fontSize='lg'>
                        {props.description}
                    </Text>
                    <Text color='blue.600'>
                        <Heading size="lg">Amount: {props.amount}</Heading>
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='outline' colorScheme='blue' size='lg'>
                        Contact
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default CardDisplay;