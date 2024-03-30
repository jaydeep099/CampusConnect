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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../services/helper";

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
        console.log(location.state.clubId);
      });
  }, []);

  function printDate(numbers) {
    return new Date(numbers).toLocaleDateString();
  }

  const handleClick = (eventId) => {
    navigate("/eventdetails", { state: { event_Id: eventId } });
  };

  const handleCreate = (clubId) => {
    navigate("/eventRegistry",{state:{club_Id:clubId}});
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
              src={BASE_URL+"/api/event/eventbroucher/"+club?.logo}
              alt="club logo"
              objectFit="cover"
            />
              </Box>
              <Box as="h3" ml="50px" mt="20px">
                {club.description}
              </Box>
            </Flex>
          </Box>
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => handleCreate(club.club_id)}
          >
            Create New Event
          </Button>
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
                      {/* <Button mt="auto" colorScheme="blue" onClick={() => handleClick(event.eventId)}>
                        View Details
                      </Button> */}
                      <Link
                        mt="auto"
                        to={"/eventdetails/" + event.eventId}
                        className="btn btn-primary"
                      >
                        View Details
                      </Link>
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
