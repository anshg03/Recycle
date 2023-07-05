import React from "react";
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, ButtonGroup, Button } from '@chakra-ui/react';
import Carousel from "./Carousel";

function CardDisplay(props) {
    return (
        <Card maxW='xl' variant="filled" >
            <CardBody>
                <Carousel />
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