import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./Login.css";
import { Text, FormControl, Input, Button, Grid, GridItem } from '@chakra-ui/react'

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
        <Grid className="bg">
            <div>
                <GridItem className="rect1" w={{ sm: 0, md: "54.72%" }}>
                    <Text className="welcome-back" fontSize={{ sm: 0, lg: 55, xl: 65 }} w={{ lg: "75%" }}>Welcome Back</Text>
                    <Text className="welcome-text" fontSize={{ sm: 0, lg: 20, xl: 27 }} w={{ lg: "75%" }}>Welcome back! Your presence is a breath of fresh air, and we're thrilled to have you back in our digital realm.</Text>
                </GridItem>
                <GridItem className="rect2" borderRadius={{ sm: "50", lg: "0 50px 50px 0" }} left={{ sm: "6.55%", lg: "55.55%" }}>
                    <Text className="login-text" w="80%">Login to your Account</Text>
                    <FormControl className="username" isRequired>
                        <Input className="username" placeholder='Username' size="lg" width="71.8%" variant="filled" name="fullName" value={user.fullName} onChange={handleChange} />
                    </FormControl>
                    <FormControl className="password" isRequired>
                        <Input className="password" type="password" placeholder='Password' size="lg" width="71.8%" variant="filled" name="password" value={user.password} onChange={handleChange} />
                    </FormControl>
                    <Button className="login-button" colorScheme='blue' onClick={handleLogin}>Login</Button>
                    <br />
                    <Button className="google" colorScheme='gray'>Login using Google Authentication</Button>
                    <br />
                    <Button className="signup" colorScheme='gray' onClick={() => navigate("/signup")}>Dont't have an Account</Button>
                </GridItem>
            </div>
        </Grid >
    )
}

export default Login;