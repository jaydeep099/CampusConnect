/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Base from "../components/Base";
import {
  Box,
  Heading,
  Center,
  Image,
  Flex,
  Card,
  CardBody,
  Text,
  Button,
  Spacer,
} from "@chakra-ui/react";
import axios from "axios";
import { LoadClubById } from "../services/club-service";
import { useLocation, useNavigate } from "react-router-dom";

const Club = () => {
  //   const [events, setEvents] = useState([]);
  const location = useLocation();
  const [club, setClub] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    LoadClubById(location.state.clubId)
      .then((response) => {
        console.log("then ", response);
        setClub(response);
      })
      .catch((error) => {
        console.log("jj", error);
      });
  }, []);

  function printDate(numbers) {
    return new Date(numbers).toLocaleDateString();
  }

  const handleClick = (eventId) => {
    navigate("/eventDashBoard",{state:({event_Id:eventId})})
  }

  return (
    <Base>
      <div>
        <Center as="h1" size="xl" mb={4}>
          {club.club_name}
        </Center>
        <Box ml="25%">
          <Box p={4} textAlign="center">
            <Flex>
              <Box maxW="200px" overflow="hidden" mr={4}>
                <Image
                  borderRadius="20px"
                  src="./assets/images/campusconnect.jpeg"
                />
              </Box>
              <Box as="h3" ml="50px" mt="20px">
                {club.description}
              </Box>
            </Flex>
          </Box>
          {/* <EventCard/>
                <EventCard/> */}
          <Flex direction="row" justifyContent="space-between" maxW="100%">
            {club.eventList &&
              club.eventList.map((event) => (

                <Card key={event.eventId} maxW="sm">
                  <Box
                    maxW="sm"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                  >
                    <Flex direction="row" p="3">
                      <Image
                        src="./assets/images/campusconnect.jpeg"
                        alt="Event Logo"
                        boxSize="100px"
                        borderRadius="10px"
                        objectFit="cover"
                      />
                      <Flex direction="column" flex="1" ml="2">
                        <Text fontSize="xl" fontWeight="semibold">
                          {event.eventName}
                        </Text>
                        <Text fontSize="md" mt="2">
                          Date: {printDate(event.eventDate)}
                        </Text>
                      </Flex>
                    </Flex>
                    <Center>
                      <Button mt="auto" colorScheme="blue" onClick={() => handleClick(event.eventId)}>
                        View Details
                      </Button>
                    </Center>
                  </Box>
                </Card>
              ))}
          </Flex>
        </Box>
      </div>
      ;
    </Base>
  );
};

export default Club;
