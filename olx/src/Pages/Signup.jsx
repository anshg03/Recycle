import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { Text, FormControl, Input, Button, Grid, GridItem } from '@chakra-ui/react'

function Signup() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: ""
    })
    const handleSignup = (e) => {
        fetch('http://localhost:5000/api/signup', {

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(() => {
            return {
                ...user,
                [name]: value
            }
        })
    }
    return (
        <Grid className="bg" templateColumns="repeat(2, 1fr)">
            <GridItem className="rect1" w={{ sm: 0, md: "54.72%" }}>
                <Text className="welcome-back" fontSize={{ sm: 0, lg: 55, xl: 65 }} w={{ lg: "75%" }}>Welcome</Text>
                <Text className="welcome-text" fontSize={{ sm: 0, lg: 20, xl: 27 }} w={{ lg: "75%" }}>Welcome to our Signup Page! We are thrilled to have you join our community.</Text>
            </GridItem>
            <GridItem className="rect2" borderRadius={{ sm: "50", lg: "0 50px 50px 0" }} left={{ sm: "6.55%", lg: "55.55%" }}>
                <Text className="signup-text" w="80%">Signup to your Account</Text>
                <FormControl className="username" isRequired>
                    <Input className="username" placeholder='Username' size="lg" width="71.8%" variant="filled" colorScheme="blue" name="fullName" value={user.fullName} onChange={handleChange} />
                </FormControl>
                <FormControl className="email" isRequired>
                    <Input className="email" placeholder='Email Address' type="email" size="lg" width="71.8%" variant="filled" colorScheme="blue" name="email" value={user.email} onChange={handleChange} />
                </FormControl>
                <FormControl className="password" isRequired>
                    <Input className="password" type="password" placeholder='Password' size="lg" width="71.8%" variant="filled" colorScheme="blue" name="password" value={user.password} onChange={handleChange} />
                </FormControl>
                <Button className="signup-button" colorScheme='blue' onClick={handleSignup}>Signup</Button>
                <br />
                <Button className="google" colorScheme='gray'>Signup using Google Authentication</Button>
                <br />
                <Button className="signup" colorScheme='gray' onClick={() => navigate("/login")}>Already have an Account</Button>
            </GridItem>
        </Grid >
    )
}

export default Signup;