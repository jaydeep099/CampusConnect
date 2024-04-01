/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Base from "../components/Base";
import {
  Heading,
  Center,
  Image,
  Flex,
  Card,
  CardBody,
  Text,
  Button,
} from "@chakra-ui/react";
import { LoadAllClubs } from "../services/club-service";
import { useNavigate } from "react-router-dom";

const Club = () => {
  const navigate = useNavigate();
  const [clubs, setClubs] = useState([]);
  useEffect(() => {
    LoadAllClubs()
      .then((response) => {
        // console.log(response);
        setClubs([...response]);
      })
      .catch((error) => {
        console.error("Error loading events:", error);
      });
  }, []);


  const handleClick = (clubId) => {
      // e.preventDefault();

      navigate(`/clubDetail/${clubId}`);
  }

  return (
    <Base>
      <Flex direction="row" maxW="100%">
        <Flex direction="row" flex="1" p="4">
          {clubs.map((club) => (
            <Card maxW="sm">
              <CardBody paddingBottom="0">
                <Image
                  src="./assets/images/campusconnect.jpeg"
                  alt="Club"
                  borderRadius="lg"
                />
                <Heading size="md" paddingTop="10px">
                  {club.clubName}
                </Heading>
                <Text>{club.description}</Text>
              </CardBody>
              <Center>
                <Button variant="solid" colorScheme="blue" onClick={() => handleClick(club.clubId)}>
                  View Details
                </Button>
              </Center> 
            </Card>
          ))}
        </Flex>
      </Flex>
    </Base>
  );
};

export default Club;
