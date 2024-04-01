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
import { useEffect, useState } from "react";
import { LoadAllClubs, createClub } from "../services/club-service";
import { uploadImage } from "../services/event-service";
import { useNavigate } from "react-router-dom";

const ClubRegistration = () => {
  const [clubInfo, setClubInfo] = useState({
    club_name: "",
    dept: "",
    president: "",
    club_email: "",
    club_password: "",
    description: "",
  });
  let [clubIds, setClubIds] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    LoadAllClubs().then((data) => {
      console.log(data);
      const highestclubId = data.reduce(
        (max, club) => Math.max(max, club.clubId),
        0
      );
      clubIds = highestclubId + 1;
      console.log(clubIds);
    });
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClubInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };
  const handleImageChange = (e) => {
    console.log(e.target.files[0]);
    setImage((prevImage) => ({
      ...prevImage,
      logo: e.target.files[0],
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    createClub(clubInfo)
      .then((data) => {

        uploadImage(image, clubIds)
          .then((data) => {
            console.log("logo is uploaded");
          })
          .catch((error) => {
            console.log("Reupload and make sure it's size is less than 20MB");
          });
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
      dept: "",
      clubEmail: "",
      clubPassword: "",
      description: "",
      clubPresident: "",
      logo: null,
    });
  };

  return (
    <Card p={8} m={4} borderRadius={0} boxShadow="lg" maxW="70%" mx="auto">
      <Stack spacing={4}>
        <Heading mb={4}>Register Your Club Here!</Heading>
        <form onSubmit={handleSubmit}>
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
              name="description"
              value={clubInfo.description}
              onChange={handleChange}
              placeholder="Enter club description"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Club Image</FormLabel>
            <Input type="file" name="brochure" onChange={handleImageChange} />
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
