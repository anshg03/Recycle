import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    GridItem,
    Heading,
    Input,
    Select,
    SimpleGrid,
    Text,
    Textarea,
    useColorModeValue,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  
  const Sell = () => {
    const handleFileUpload = (event) => {
      const files = event.target.files;
      if (files.length > 5) {
        console.log("Maximum 5 files can be uploaded.");
        return;
      }
    };
  
    return (
      <VStack w="100%" p={50} spacing={10}>
        <Heading
          textAlign="center"
          fontSize="4xl"
          bg={useColorModeValue("gray.50", "gray.900")}
        >
          POST YOUR AD
        </Heading>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          p={8}
          borderRadius="lg"
          boxShadow={"lg"}
          rounded={"lg"}
          w="full"
        >
          <SimpleGrid
            columns={2}
            columnGap={2}
            rowGap={4}
            alignItems="flex-start"
          >
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel fontSize="3xl">Field *</FormLabel>
                <Textarea placeholder="Enter the field..." fontSize="xl" />
                <Text fontSize="xl">
                  Mention the field of the item (e.g., cycle, etc)
                </Text>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel fontSize="3xl">Description *</FormLabel>
                <Textarea placeholder="Enter description..." fontSize="xl" />
                <Text fontSize="xl">
                  Includes the condition and features of your item
                </Text>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel fontSize="3xl">Price *</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter price in rupees..."
                  fontSize="xl"
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel fontSize="3xl">Upload Images *</FormLabel>
                <Input
                  type="file"
                  onChange={handleFileUpload}
                  multiple
                  accept="image/*"
                  max="5"
                />
                <Text fontSize="xl">
                  Select up to 5 images
                </Text>
              </FormControl>
            </GridItem>
          </SimpleGrid>
        </Box>
      </VStack>
    );
  };
  
  export default Sell;
  