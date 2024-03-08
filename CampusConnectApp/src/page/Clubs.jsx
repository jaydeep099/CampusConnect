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
              <Image src="./assets/images/campusconnect.jpeg" />
            </Box>
            <Box as="h3" ml="50px" mt="20px">
              Demo Club descryption .............. ...........................
            </Box>
          </Flex>
        </Box>
        {/* <EventCard/>
                <EventCard/> */}
        <Flex direction="row" justifyContent="space-between" maxW="sm">
          {events.map((event) => {
            function printDate(numbers) {
                return new Date(numbers).toLocaleDateString();
            }
            return (
              <Card key={event.eventId} maxW="sm" className="event-card">
                <CardBody>
                  <div style={{ flex: 3 }}>
                    <Image
                      src="./assets/images/campusconnect.jpeg"
                      alt="Club"
                      borderRadius="lg"
                    />
                    <Heading size="sm">{event.eventName}</Heading>
                    <Text as="h5">Date: {printDate(event.eventDate)}</Text>
                  </div>
                  {/* <div style={{ flex: 3, paddingLeft: "10px" }}>
                  </div> */}
                </CardBody>
                <Center>
                  <Button variant="solid" colorScheme="blue">
                    View Details
                  </Button>
                </Center>
              </Card>
            );
          })}
        </Flex>
      </Box>
    </Base>
  );
};

export default Club;
