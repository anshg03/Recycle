import React from "react";
import Navbar from "../Components/NavbarAfterLogin";
import { Grid, GridItem } from "@chakra-ui/react"

function Sell() {
    return (
        <div>
            <Navbar />
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem h='10' bg='blue.500' ></GridItem>
                <GridItem h='10' bg='blue.500' ></GridItem>
                <GridItem h='10' bg='blue.500' ></GridItem>
                <GridItem h='10' bg='blue.500' ></GridItem>
                <GridItem h='10' bg='blue.500' ></GridItem>
            </Grid>
        </div>
    )
}

export default Sell;