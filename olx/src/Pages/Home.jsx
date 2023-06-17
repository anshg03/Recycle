import React from "react";
import Navbar from "../Components/Navbar";
import CardDisplay from "../Components/DisplayCard"
import NavbarAfterLogin from "../Components/NavbarAfterLogin";
import { SimpleGrid } from "@chakra-ui/react";


function Home() {
    // here we will create an array in which we will fetch the data from the db and show the data in the simplegrid
    const productDetails = {
        name: "Sofa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        amount: 450
    }
    const login = false;
    return (
        <div>
            {login ? (<NavbarAfterLogin />) : (<Navbar />)}
            <SimpleGrid minChildWidth='250px' spacing='20px' padding="40px 20px">
                <CardDisplay name={productDetails.name} description={productDetails.description} amount={productDetails.amount} />
                <CardDisplay name={productDetails.name} description={productDetails.description} amount={productDetails.amount} />
                <CardDisplay name={productDetails.name} description={productDetails.description} amount={productDetails.amount} />
                <CardDisplay name={productDetails.name} description={productDetails.description} amount={productDetails.amount} />
            </SimpleGrid>
        </div>
    )
}

export default Home;