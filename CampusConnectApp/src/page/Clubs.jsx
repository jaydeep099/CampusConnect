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
import { BASE_URL } from "../services/helper";

const Clubs = () => {
  const navigate = useNavigate();
  const [clubs, setClubs] = useState([]);
  const [usedeffect, SetUsedEffect] = useState(false);
  useEffect(() => {
    LoadAllClubs()
      .then((response) => {
        setClubs([...response]);
      })
      .catch((error) => {
        console.error("Error loading events:", error);
      });
  }, []);


  const handleClick = (club_id) => {
      navigate("/clubDetail",{state:({clubId:club_id})})
  }

  return (
    <Base>
      <Flex direction="row" maxW="100%">
        <Flex direction="row" flex="1" p="4">
          {clubs.map((club) => (
            <Card maxW="sm">
              <CardBody paddingBottom="0">
                <Image
                  src={BASE_URL+"/api/club/logo/"+club?.logo}
                  alt="Event Brochure"
                  objectFit="cover"
                  borderRadius="lg"
                />
                <Heading size="md" paddingTop="10px">
                  {club.clubName}
                </Heading>
                <Text>{club.description}</Text>
              </CardBody>
              <Center>
                <Button variant="solid" colorScheme="blue" onClick={() => handleClick(club.club_id)}>
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

export default Clubs;
