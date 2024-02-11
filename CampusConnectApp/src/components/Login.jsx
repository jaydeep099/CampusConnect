import React from "react";
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
const Login = () => {
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
              <form>
                <Stack spacing="4">
                  <FormControl>
                    <FormLabel size="sm">Username or Email</FormLabel>
                    <Input
                      type="text"
                      bg="white"
                      borderColor="#d8dee4"
                      size="sm"
                      borderRadius="6px"
                    />
                  </FormControl>
                  0
                  <FormControl>
                    <HStack justify="space-between">
                      <FormLabel size="sm">Password</FormLabel>
                    </HStack>
                    <Input
                      type="password"
                      bg="white"
                      borderColor="#d8dee4"
                      size="sm"
                      borderRadius="6px"
                    />
                  </FormControl>
                  <Button
                    bg="#2da44e"
                    color="white"
                    size="sm"
                    _hover={{ bg: "#2c974b" }}
                    _active={{ bg: "#298e46" }}
                  >
                    Sign in
                  </Button>
                  <Button
                    as="a"
                    href="#"
                    variant="link"
                    size="s"
                    color="#0969da"
                    fontWeight="50"
                    ml="-1"
                  >
                    Are you new? Register
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

export default Login;
