/* eslint-disable no-unused-vars */
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {message} from "antd";
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Image,
  VStack,
} from "@chakra-ui/react";



const SignUp = () => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      if(formData.password != formData.confirmPassword)
      {
        message.error("Password and Confirm Password are Not Same")
        return;
      }

    console.log(formData.username);
    
    navigate("/registration",{state:({password:formData.password,username:formData.username})});

  };

  return (
    <Box>
      <Center>
        <Stack spacing="4">
          <Card variant="outline" w="150%">
            <VStack as="header" spacing="6" mt="8">
              <Image
                borderRadius="full"
                boxSize="100px"
                src="./assets/images/campusconnectlogo.jpeg"
                alt="CampusConnect"
              />
              <Heading
                as="h1"
                fontWeight="500"
                fontSize="24px"
                letterSpacing="-0.5px"
              >
                Sign in to CampusConnect
              </Heading>
            </VStack>
            <CardBody>
              <form onSubmit={handleSubmit}>
                <Stack spacing="4">
                  <FormControl>
                    <FormLabel size="sm">Username</FormLabel>
                    <Input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      bg="white"
                      borderColor="#d8dee4"
                      size="sm"
                      borderRadius="6px"
                      required={true}
                    />
                  </FormControl>
                  <FormControl>
                    <HStack justify="space-between">
                      <FormLabel size="sm">Password</FormLabel>
                    </HStack>
                    <Input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      bg="white"
                      borderColor="#d8dee4"
                      size="sm"
                      borderRadius="6px"
                      required={true}
                    />
                  </FormControl>
                  <FormControl>
                    <HStack justify="space-between">
                      <FormLabel size="sm">Confirm Password</FormLabel>
                    </HStack>
                    <Input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      bg="white"
                      borderColor="#d8dee4"
                      size="sm"
                      borderRadius="6px"
                      required={true}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    bg="#2da44e"
                    color="white"
                    size="sm"
                    _hover={{ bg: "#2c974b" }}
                    _active={{ bg: "#298e46" }}
                  >
                    Sign Up
                  </Button>
                </Stack>
              </form>
            </CardBody>
          </Card>
        </Stack>
      </Center>
    </Box>
  );
};

export default SignUp;
