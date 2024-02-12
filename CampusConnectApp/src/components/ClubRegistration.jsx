import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Image,
  Card,
  Heading,
  Center,
  Select, // Import Select component for dropdown
  useToast
} from "@chakra-ui/react";
import Resizer from 'react-image-file-resizer'; // Import the image resizer library

const ClubRegistration = () => {
  const [clubData, setClubData] = useState({
    clubName: "",
    mentorName: "",
    emailAddress: "",
    description: "",
    departmentName: "-select department",//default value  
    logo: "", // Change to null to avoid issues with displaying null value
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClubData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    // Resize the image using the react-image-file-resizer library
    Resizer.imageFileResizer(
      file,
      100, // Max width
      100, // Max height
      'JPEG', // Output format
      100, // Quality
      0, // Rotation
      (uri) => {
        // Convert resized image URI to base64 string
        const base64String = uri.split(',')[1];
        setClubData((prevData) => ({
          ...prevData,
          logo: base64String, // Set the base64 string as the logo
        }));
      },
      'base64' // Output type
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!clubData.clubName || !clubData.mentorName || !clubData.emailAddress || !clubData.description || clubData.departmentName=="-select department")
    {
      toast({
        title:"Error",
        description: "Please fill out all fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    // Handle form submission here, e.g., send data to server
    console.log(clubData);

    toast({
      title: "Club Registered",
      description: "Your club has been successfully registered!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Reset form data
    setClubData({
      clubName: "",
      mentorName: "",
      emailAddress: "",
      description: "",
      departmentName: "",
      logo: null,
    });
  };

  return (
    <Card maxWidth="500px" mx="auto" p="4" boxShadow="md">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <Image
            borderRadius="full"
            boxSize="100px"
            src="./assets/images/campusconnectlogo.jpeg"
            alt="CampusConnect"
            margin="auto"
          />
          <Heading as="h1" margin="auto">Club Registration</Heading>
          <FormControl id="clubName" isRequired>
            <FormLabel>Club Name</FormLabel>
            <Input
              type="text"
              name="clubName"
              value={clubData.clubName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="mentorName" isRequired>
            <FormLabel>Mentor Name</FormLabel>
            <Input
              type="text"
              name="mentorName"
              value={clubData.mentorName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="emailAddress" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              name="emailAddress"
              value={clubData.emailAddress}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="description" isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={clubData.description}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="departmentName" isRequired>
            <FormLabel>Department Name</FormLabel>
            <Select
              name="departmentName"
              value={clubData.departmentName}
              onChange={handleChange}
            >
              <option value="select department">-select department</option>
              <option value="IT">IT</option>
              <option value="CE">CE</option>
              <option value="EC">EC</option>
              <option value="CH">CH</option>
              <option value="MH">MH</option>
              <option value="BCA">BCA</option>
            </Select>
          </FormControl>

          {/* Other form fields */}
          <FormControl id="logo" isRequired>
            <FormLabel>Logo</FormLabel>
            <Input
              type="file"
              name="logo"
              accept="image/*"
              onChange={handleLogoChange} // Handle logo change separately
            />
            {clubData.logo && (
              <Image src={`data:image/jpeg;base64,${clubData.logo}`} alt="Logo" /> // Display base64 string as image
            )}
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </VStack>
      </form>
      
    </Card>

  );
};

export default ClubRegistration;