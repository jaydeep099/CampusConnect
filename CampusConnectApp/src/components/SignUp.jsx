import { useState } from "react";
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
  useToast,
} from "@chakra-ui/react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password || !formData.confirmPassword) {
      toast({
        title: "Error",
        description: "All fields are required.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    window.location.href = "/";
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
                  <FormControl isRequired>
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
                    />
                  </FormControl>
                  <FormControl isRequired>
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
                    />
                  </FormControl>
                  <FormControl isRequired>
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
