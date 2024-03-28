/* eslint-disable no-unused-vars */
import React, { useState } from "react";
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
  Select,
} from "@chakra-ui/react";
import Base from "../components/Base";
import { LoginStudent } from "../services/student-service";
import { useNavigate } from "react-router-dom";
import { LoginClub } from "../services/club-service";
const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    role: "student",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleLogin = () => {
    if (data.role === "student") {
      console.log(data);
      LoginStudent(data.username, data.password)
        .then((studentId) => {
          navigate("/studentProfile", { state: { student_Id: studentId } });
        })
        .catch((error) => {
          console.log(error);
        });
    }

    else if(data.role === "club")
    {
      LoginClub(data.username,data.password).then((clubId) => {
        navigate("/clubDetail",{state:{clubId:clubId}});
      }).catch((error) => {
        console.log(error);
      });
    }
  };

  return (
    <Base>
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
                        name="username"
                        value={data.username}
                        onChange={handleChange}
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
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel size="sm">Login as a..</FormLabel>
                      <Select
                        id="select"
                        name="role"
                        value={data.role}
                        onChange={handleChange}
                        bg="white"
                        borderColor="#d8dee4"
                        size="sm"
                        borderRadius="6px"
                      >
                        <option className="py-2" value="student">
                          Student
                        </option>
                        <option className="py-2" value="club">
                          Club
                        </option>
                      </Select>
                    </FormControl>
                    <Button
                      bg="#2da44e"
                      color="white"
                      size="sm"
                      _hover={{ bg: "#2c974b" }}
                      _active={{ bg: "#298e46" }}
                      onClick={handleLogin}
                    >
                      Log In
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
    </Base>
  );
};

export default Login;
