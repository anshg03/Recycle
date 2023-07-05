import { Box, VStack, Heading, useColorModeValue, Center, Input, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Otp() {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state;
    const [code, setCode] = useState("");
    const [otp, setOtp] = useState({
        first: "",
        second: "",
        third: "",
        fourth: ""
    });

    useEffect(() => {
        setCode(otp.first + otp.second + otp.third + otp.fourth);
    }, [otp])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setOtp({
            ...otp,
            [name]: value
        })
    }
    const verify = async () => {
        // match otp controller call
        let verified = false;
        await fetch("http://localhost:5000/api/product/sell/verifydetails/match", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                enterOtp: code,
                otp: data.num,
            }),
        }).then((res) => res.json()).then((json) => {
            if (json.success) verified = true;
            console.log(json)
        });
        fetch("http://localhost:5000/api/product/sell/verified", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                description: data.description,
                amount: data.amount,
                proImage: data.proImage,
                phoneNo: data.phoneNo
            }),
        });
        navigate("/");
    }
    return (
        <VStack padding={50} spacing={5}>
            <Heading
                textAlign="center"
                fontSize="4xl"
                bg={useColorModeValue("gray.50", "gray.900")}
            >
                OTP VERIFICATION
            </Heading>
            <Heading
                textAlign="center"
                fontSize="xl"
                bg={useColorModeValue("gray.50", "gray.900")}
            >
                Enter the OTP sent to the entered phone number.
            </Heading>
            <Box padding={[50]}>
                <Center>
                    <Input fontSize={"4xl"} width={20} height={20} textAlign={"center"} margin={5} maxLength={1} name="first" value={otp.first} onChange={handleChange} />
                    <Input fontSize={"4xl"} width={20} height={20} textAlign={"center"} margin={5} maxLength={1} name="second" value={otp.second} onChange={handleChange} />
                    <Input fontSize={"4xl"} width={20} height={20} textAlign={"center"} margin={5} maxLength={1} name="third" value={otp.third} onChange={handleChange} />
                    <Input fontSize={"4xl"} width={20} height={20} textAlign={"center"} margin={5} maxLength={1} name="fourth" value={otp.fourth} onChange={handleChange} />
                </Center>
            </Box>
            <Button variant={"solid"} height={20} fontSize={"2xl"} onClick={verify}>Verify</Button>
        </VStack>
    )
}

export default Otp;