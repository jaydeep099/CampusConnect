import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Stack,
  Card,
  HStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const ClubRegistration = () => {
  const [clubInfo, setClubInfo] = useState({
    clubName: "",
    clubDepartment: "",
    clubEmail: "",
    clubPassword: "",
    clubDescription: "",
    clubPresident: "",
    clubImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClubInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setClubInfo((prevInfo) => ({
      ...prevInfo,
      clubImage: file,
    }));
  };
  const createEvent = (e) => {
    e.preventDefault();
    console.log(clubInfo);
  };

  return (
    <Card p={8} m={4} borderRadius={0} boxShadow="lg" maxW="70%" mx="auto">
      <Stack spacing={4}>
        <Heading mb={4}>Register Your Club Here!</Heading>
        <form onSubmit={createEvent}>
          <FormControl mt={4}>
            <FormLabel>Club Name</FormLabel>
            <Input
              type="text"
              name="clubName"
              value={clubInfo.clubName}
              onChange={handleChange}
              placeholder="Enter club name"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Club Department</FormLabel>
            <Input
              type="text"
              name="clubDepartment"
              value={clubInfo.clubDepartment}
              onChange={handleChange}
              placeholder="Enter club department"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Club President</FormLabel>
            <Input
              type="text"
              name="clubPresident"
              value={clubInfo.clubPresident}
              onChange={handleChange}
              placeholder="Enter club president"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Club Email</FormLabel>
            <Input
              type="email"
              name="clubEmail"
              value={clubInfo.clubEmail}
              onChange={handleChange}
              placeholder="Enter club email"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Club Password</FormLabel>
            <Input
              type="password"
              name="clubPassword"
              value={clubInfo.clubPassword}
              onChange={handleChange}
              placeholder="Enter club password"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Club Description</FormLabel>
            <Textarea
              name="clubDescription"
              value={clubInfo.clubDescription}
              onChange={handleChange}
              placeholder="Enter club description"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Club Image</FormLabel>
            <Input type="file" name="clubImage" onChange={handleImageChange} />
          </FormControl>

          <HStack justifyContent="center" mt={5}>
            <Button colorScheme="blue" type="submit">
              Register
            </Button>
            <Button colorScheme="blue" type="reset">
              Reset
            </Button>
          </HStack>
        </form>
      </Stack>
    </Card>
  );
};

export default ClubRegistration;
