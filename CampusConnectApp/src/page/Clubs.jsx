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
// import campusconnectlogo from "../images/campusconnectlogo.jpeg";
// import EventCard from "../components/EventCard";
import axios from "axios";

const Club = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/event/club/${4}`).then((response) => {
      console.log(response.data);
      setEvents(response.data);
    });
  }, []);

  return (
    <Base>
      <Center as="h1" size="xl" mb={4}>
        Club Name
      </Center>
      <Box ml="25%">
        <Box p={4} textAlign="center">
          <Flex>
            <Box maxW="200px" overflow="hidden" mr={4}>
              <Image borderRadius="20px" src="./assets/images/campusconnect.jpeg" />
            </Box>
            <Box as="h3" ml="50px" mt="20px">
              Demo Club descryption .............. ...........................
            </Box>
          </Flex>
        </Box>
        {/* <EventCard/>
                <EventCard/> */}
        <Flex direction="row" justifyContent="space-between" maxW="100%">
          {events.map((event) => {
            function printDate(numbers) {
              return new Date(numbers).toLocaleDateString();
            }
            return (
              <Card key={event.eventId} maxW="sm" className="event-card">
                <Box
                  maxW="md"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <Flex direction="row" p="3  ">
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

                      <Button mt="auto" colorScheme="blue">
                        View Details
                      </Button>
                  </Center>
                </Box>
              </Card>
            );
          })}
        </Flex>
      </Box>
    </Base>
  );
};

export default Club;
