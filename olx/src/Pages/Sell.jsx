import{Box,
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
InputGroup,
InputLeftAddon,
InputRightAddon,
Center
} from "@chakra-ui/react";
import React, { useState } from "react";

const Sell = () => {
const [details, setDetails] = useState({
  name: "",
  email: "",
  description: "",
  amount: 0,
  proImage: [],
  phoneNo: ""
});
const handleFileUpload = (event) => {
  const files = event.target.files;
  if (files.length > 5) {
    console.log("Maximum 5 files can be uploaded.");
    return;
  }
  setDetails({
    ...details,
    proImage: files
  });
};
const handleDetailChange = (e) => {
  const { name, value } = e.target;
  setDetails({
    ...details,
    [name]: value
  })
  console.log(details);
}

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
      bg={useColorModeValue("gray.100", "gray.800")}
      p={8}
      borderRadius="lg"
      boxShadow={"xl"}
      rounded={"lg"}
      w="full"
    >
      <SimpleGrid
        columns={2}
        columnGap={10}
        rowGap={10}
        alignItems="flex-start"
      >
        <GridItem colSpan={[2, 2, 1]}>
          <FormControl>
            <FormLabel fontSize="3xl">Name of the product *</FormLabel>
            <Input
              type="text"
              placeholder="Enter price in rupees..."
              fontSize="xl"
              name="name"
              value={details.name}
              onChange={handleDetailChange}
            />
            <Text fontSize="xl">
              Mention the name of the item (e.g., cycle, etc)
            </Text>
          </FormControl>
        </GridItem>
        <GridItem colSpan={[2, 2, 1]}>
          <FormControl>
            <FormLabel fontSize="3xl">Description *</FormLabel>
            <Textarea placeholder="Enter description..." fontSize="xl" rows={1} name="description" value={details.description} onChange={handleDetailChange} />
            <Text fontSize="xl">
              Includes the condition and features of your item
            </Text>
          </FormControl>
        </GridItem>
        <GridItem colSpan={[2, 2, 1]}>
          <FormControl>
            <FormLabel fontSize="3xl">Price *</FormLabel>
            <Input
              type="text"
              placeholder="Enter price in rupees..."
              fontSize="xl"
              name="amount"
              value={details.amount}
              onChange={handleDetailChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={[2, 2, 1]}>
          <FormControl>
            <FormLabel fontSize="3xl">Upload Images *</FormLabel>
            <Input
              type="file"
              onChange={handleFileUpload}
              multiple
              accept="image/*"
              max="5"
              name="proImage"
            />
            <Text fontSize="xl">
              Select up to 5 images
            </Text>
          </FormControl>
        </GridItem>
        <GridItem colSpan={[2, 2, 1]}>
          <FormControl>
            <FormLabel fontSize="3xl">Email *</FormLabel>
            <InputGroup>
              <Input type="email" placeholder='Email' fontSize="xl" name="email" value={details.email} onChange={handleDetailChange} />
              <InputRightAddon children='.com' fontSize="xl" />
            </InputGroup>
          </FormControl>
        </GridItem>
        <GridItem colSpan={[2, 2, 1]}>
          <FormControl>
            <FormLabel fontSize="3xl">Phone Number *</FormLabel>
            <InputGroup fontSize="3xl">
              <InputLeftAddon children='+91' fontSize="xl" />
              <Input type='tel' placeholder='Phone number' fontSize="xl" name="phoneNo" value={details.phoneNo} onChange={handleDetailChange} />
            </InputGroup>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Center>
            <Button size="lg">Submit</Button>
          </Center>
        </GridItem>
      </SimpleGrid>
    </Box>
  </VStack>
);
};

export default Sell;