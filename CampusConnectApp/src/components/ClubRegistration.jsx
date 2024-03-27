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
import  { useState } from "react";
import { createClub } from "../services/club-service";

const ClubRegistration = () => {
  const [clubInfo, setClubInfo] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClubInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };
  // const handleLogoChange = (e) => {
  //   const file = e.target.files[0];
  //   // Resize the image using the react-image-file-resizer library
  //   Resizer.imageFileResizer(
  //     file,
  //     100, // Max width
  //     100, // Max height
  //     "JPEG", // Output format
  //     100, // Quality
  //     0, // Rotation
  //     (uri) => {
  //       // Convert resized image URI to base64 string
  //       const base64String = uri.split(",")[1];
  //       setClubInfo((prevData) => ({
  //         ...prevData,
  //         logo: base64String, // Set the base64 string as the logo
  //       }));
  //     },
  //     "base64" // Output type
  //   );
  // };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setClubInfo((prevInfo) => ({
      ...prevInfo,
      clubImage: file,
    }));
  };
  const createEvent = (e) => {
    e.preventDefault();
    createClub(clubInfo)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(clubInfo);
  };

  const handleReset = () => {
    setClubInfo({
      clubName: "",
      clubDepartment: "",
      clubEmail: "",
      clubPassword: "",
      clubDescription: "",
      clubPresident: "",
      clubImage: null,
    });
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
              name="club_name"
              value={clubInfo.club_name}
              onChange={handleChange}
              placeholder="Enter club name"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Club Department</FormLabel>
            <Input
              type="text"
              name="dept"
              value={clubInfo.dept}
              onChange={handleChange}
              placeholder="Enter club department"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Club President</FormLabel>
            <Input
              type="text"
              name="president"
              value={clubInfo.president}
              onChange={handleChange}
              placeholder="Enter club president"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Club Email</FormLabel>
            <Input
              type="email"
              name="club_email"
              value={clubInfo.club_email}
              onChange={handleChange}
              placeholder="Enter club email"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Club Password</FormLabel>
            <Input
              type="password"
              name="club_password"
              value={clubInfo.club_password}
              onChange={handleChange}
              placeholder="Enter club password"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Club Description</FormLabel>
            <Textarea
              name="description"
              value={clubInfo.description}
              onChange={handleChange}
              placeholder="Enter club description"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Club Image</FormLabel>
            <Input type="file" name="logo" value={clubInfo.logo} onChange={handleImageChange} />
          </FormControl>

          <HStack justifyContent="center" mt={5}>
            <Button colorScheme="blue" type="submit">
              Register
            </Button>
            <Button colorScheme="blue" type="reset" onClick={handleReset}>
              Reset
            </Button>
          </HStack>
        </form>
      </Stack>
    </Card>
  );
};

export default ClubRegistration;
